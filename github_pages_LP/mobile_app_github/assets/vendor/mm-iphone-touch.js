/**
 * iPhone / iPad touch bridge — works before ES modules load.
 * Fixes: stale boot overlay, touchend quirks, module init delays.
 */
(function () {
    var ua = navigator.userAgent || "";
    var isIos = window.__MM_IS_IOS ||
        /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    function hideBoot() {
        var o = document.getElementById("mmBootOverlay");
        if (o) {
            o.style.pointerEvents = "none";
            o.classList.add("hidden");
        }
    }

    function msg(text) {
        var el = document.getElementById("authMsg");
        if (el) el.textContent = text || "";
    }

    function cfg() {
        return window.POS_SUPABASE_MOBILE || {};
    }

    function sbReady() {
        return typeof window.mmSupabaseUmdReady === "function"
            ? window.mmSupabaseUmdReady()
            : Promise.resolve();
    }

    function getSb() {
        var c = cfg();
        if (!c.url || !c.anonKey || !window.supabase) return null;
        if (!window.__mmIphoneSb) {
            window.__mmIphoneSb = window.supabase.createClient(c.url, c.anonKey, {
                auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
            });
        }
        return window.__mmIphoneSb;
    }

    var loginBusy = false;
    function iphoneLogin() {
        if (typeof window.mmDoLogin === "function") {
            window.mmDoLogin();
            return;
        }
        if (loginBusy) return;
        var emailEl = document.getElementById("email");
        var passEl = document.getElementById("password");
        var email = emailEl ? String(emailEl.value || "").trim().toLowerCase() : "";
        var password = passEl ? String(passEl.value || "") : "";
        if (!email || !password) {
            msg("ئیمێیل و تێپەڕەوشە بنووسە.");
            return;
        }
        loginBusy = true;
        msg("چاوەڕێ بکە…");
        sbReady().then(function () {
            var sb = getSb();
            if (!sb) throw new Error("Supabase بارنەبوو — refresh بکە");
            return sb.auth.signInWithPassword({ email: email, password: password });
        }).then(function (res) {
            if (res.error) throw res.error;
            msg("");
            if (typeof window.mmDoLogin === "function") {
                window.mmDoLogin();
            } else {
                location.reload();
            }
        }).catch(function (e) {
            var m = e && e.message ? e.message : "هەڵە";
            msg("چوونەژوورەوە سەرنەکەوت: " + m);
        }).finally(function () {
            loginBusy = false;
        });
    }

    function themeToggle() {
        if (typeof window.mmThemeToggle === "function") {
            window.mmThemeToggle();
            return;
        }
        var isLight = document.documentElement.getAttribute("data-theme") === "light";
        if (isLight) document.documentElement.removeAttribute("data-theme");
        else document.documentElement.setAttribute("data-theme", "light");
        try { localStorage.setItem("pos_mobile_theme", isLight ? "dark" : "light"); } catch (e) {}
        var icon = document.getElementById("themeIcon");
        if (icon) {
            icon.className = isLight ? "fas fa-sun" : "fas fa-moon";
            icon.style.color = isLight ? "#fbbf24" : "#2563eb";
        }
    }

    function switchTab(tab) {
        if (typeof window.mmSwitchMobileTab === "function") {
            window.mmSwitchMobileTab(tab);
        }
    }

    var ACTION_MAP = {
        loginBtn: iphoneLogin,
        themeToggleBtn: themeToggle,
        tabHome: function () { switchTab("home"); },
        tabDash: function () { switchTab("dash"); },
        tabInv: function () { switchTab("inv"); },
        tabDebt: function () { switchTab("debt"); },
        homeGoDash: function () { switchTab("dash"); },
        homeGoInv: function () { switchTab("inv"); },
        homeGoDebt: function () { switchTab("debt"); },
        homeGoBackup: function () { switchTab("backup"); },
        logoutBtn: function () { if (window.mmLogoutUi) window.mmLogoutUi(); },
        logoutBtnHome: function () { if (window.mmLogoutUi) window.mmLogoutUi(); }
    };

    function tapTarget(el) {
        if (!el || !el.closest) return null;
        return el.closest("button, a[href], .mm-shop-card, .mm-saved-auth-item, .nav-tab, .btn-primary, .btn-install, .btn-ghost, .refresh-btn");
    }

    function handleTap(e) {
        if (window.__mmAppReady) return;
        var t = tapTarget(e.target);
        if (!t) return;
        if (t.id === "authForm" || (t.closest && t.closest("#authForm") && t.type === "submit")) {
            e.preventDefault();
            iphoneLogin();
            return;
        }
        var fn = t.id && ACTION_MAP[t.id];
        if (fn) {
            e.preventDefault();
            e.stopPropagation();
            fn();
            return;
        }
        if (t.classList && t.classList.contains("nav-tab") && t.id) {
            var tab = t.id.replace(/^tab/, "").toLowerCase();
            if (tab === "home") switchTab("home");
            else if (tab === "dash") switchTab("dash");
            else if (tab === "inv") switchTab("inv");
            else if (tab === "debt") switchTab("debt");
        }
    }

    function bind() {
        hideBoot();
        document.addEventListener("click", handleTap, true);
        if (isIos) {
            document.addEventListener("pointerup", handleTap, true);
        }
        var form = document.getElementById("authForm");
        if (form && !form.__mmIphoneBound) {
            form.__mmIphoneBound = true;
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                iphoneLogin();
            });
        }
        var loginBtn = document.getElementById("loginBtn");
        if (loginBtn && loginBtn.type === "submit") {
            loginBtn.type = "button";
        }
    }

    window.mmIphoneLogin = iphoneLogin;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bind);
    } else {
        bind();
    }
    setTimeout(hideBoot, isIos ? 1500 : 4000);
    setTimeout(hideBoot, 8000);
})();
