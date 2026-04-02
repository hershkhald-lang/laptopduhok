<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mobile Manager - 4 KPIs</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        :root {
            --bg-a: #020617;
            --bg-b: #07132d;
            --surface: rgba(9, 19, 42, 0.62);
            --surface-strong: rgba(10, 23, 53, 0.82);
            --line: rgba(148, 163, 184, 0.22);
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --ok: #22c55e;
            --danger: #f87171;
            --primary: #60a5fa;
            --shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
        }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body {
            margin: 0;
            font-family: "Inter", "Segoe UI", Tahoma, Arial, sans-serif;
            background:
                radial-gradient(1400px 700px at 100% -20%, rgba(56, 189, 248, 0.16), transparent 45%),
                radial-gradient(1200px 600px at -20% 0%, rgba(99, 102, 241, 0.18), transparent 46%),
                linear-gradient(160deg, var(--bg-a), var(--bg-b));
            color: var(--text-main);
            min-height: 100vh;
        }
        .container { max-width: 700px; margin: 0 auto; padding: 16px; }
        .hidden { display: none !important; }
        .card {
            background: var(--surface);
            backdrop-filter: blur(10px);
            border: 1px solid var(--line);
            border-radius: 22px;
            padding: 18px;
            margin-bottom: 14px;
            box-shadow: var(--shadow);
        }
        .title {
            margin: 0 0 8px;
            font-family: "Outfit", "Inter", sans-serif;
            font-size: 1.55rem;
            font-weight: 700;
            letter-spacing: 0.2px;
        }
        .sub { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 16px; }
        .status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 12px;
            border-radius: 999px;
            font-size: 0.8rem;
            font-weight: 600;
            background: rgba(34, 197, 94, 0.16);
            color: #34d399;
            border: 1px solid rgba(34, 197, 94, 0.3);
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }
        .kpi {
            position: relative;
            overflow: hidden;
            background: var(--surface-strong);
            border: 1px solid var(--line);
            border-radius: 16px;
            padding: 14px;
            transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .kpi:active {
            transform: scale(0.985);
        }
        .kpi::before {
            content: "";
            position: absolute;
            inset-inline-start: 0;
            top: 0;
            width: 4px;
            height: 100%;
            border-radius: 3px;
            opacity: 0.95;
        }
        .kpi.kpi-sales::before { background: #3b82f6; }
        .kpi.kpi-expenses::before { background: #ef4444; }
        .kpi.kpi-net::before { background: #10b981; }
        .kpi.kpi-invoices::before { background: #f59e0b; }
        .kpi .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }
        .kpi .label { color: var(--text-muted); font-size: 0.8rem; font-weight: 600; }
        .kpi .icon {
            width: 28px;
            height: 28px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.08);
            color: #bfdbfe;
            font-size: 0.82rem;
        }
        .kpi .val {
            font-family: "Outfit", "Inter", sans-serif;
            font-size: 1.45rem;
            font-weight: 700;
            margin-top: 10px;
            letter-spacing: 0.3px;
        }
        .row { display: flex; gap: 8px; }
        input {
            width: 100%;
            margin: 7px 0;
            padding: 12px 13px;
            border-radius: 12px;
            border: 1px solid rgba(148, 163, 184, 0.33);
            background: rgba(2, 6, 23, 0.38);
            color: #fff;
            font-size: 0.95rem;
        }
        input:focus {
            outline: none;
            border-color: rgba(96, 165, 250, 0.72);
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);
        }
        button {
            border: 0;
            border-radius: 12px;
            padding: 10px 12px;
            color: #fff;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 600;
            transition: transform 0.18s ease, opacity 0.18s ease;
        }
        button:active { transform: translateY(1px); }
        .btn-primary {
            width: 100%;
            background: linear-gradient(135deg, #2563eb, #4f46e5);
            box-shadow: 0 10px 24px rgba(37, 99, 235, 0.32);
        }
        .btn-ghost {
            background: rgba(148, 163, 184, 0.14);
            border: 1px solid rgba(148, 163, 184, 0.3);
            flex: 1;
        }
        .btn-danger {
            background: rgba(239, 68, 68, 0.18);
            border: 1px solid rgba(239, 68, 68, 0.35);
            color: #fecaca;
            flex: 1;
        }
        .auth-logo {
            width: 54px;
            height: 54px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            background: linear-gradient(145deg, rgba(37, 99, 235, 0.35), rgba(99, 102, 241, 0.25));
            border: 1px solid rgba(147, 197, 253, 0.35);
            color: #dbeafe;
            font-size: 1.1rem;
        }
        .dash-head {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 6px;
        }
        #authMsg { min-height: 20px; margin-top: 8px; color: #fca5a5; font-size: 0.85rem; }
        #meta {
            color: var(--text-muted);
            font-size: 0.82rem;
            margin-top: 12px;
            padding-top: 10px;
            border-top: 1px dashed rgba(148, 163, 184, 0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <div id="authCard" class="card">
            <div class="auth-logo"><i class="fas fa-crown"></i></div>
            <h1 class="title">لوحة المدير</h1>
            <div class="sub">عرض 4 مؤشرات فقط من الكاشير</div>
            <input id="email" type="email" placeholder="admin@example.com" autocomplete="username">
            <input id="password" type="password" placeholder="كلمة المرور" autocomplete="current-password">
            <button id="loginBtn" class="btn-primary"><i class="fas fa-right-to-bracket"></i> دخول</button>
            <div id="authMsg"></div>
        </div>

        <div id="dashboard" class="hidden">
            <div class="card">
                <div class="dash-head">
                    <h2 class="title" style="font-size:1.2rem; margin:0;">Laptop duhok POS</h2>
                    <div id="status" class="status"><i class="fas fa-circle-notch fa-spin"></i> جاري الاتصال...</div>
                </div>
                <div class="grid" style="margin-top:14px;">
                    <div class="kpi kpi-sales">
                        <div class="head">
                            <div class="label">مبيعات اليوم</div>
                            <div class="icon"><i class="fas fa-wallet"></i></div>
            </div>
                        <div id="kpiSales" class="val">0</div>
                </div>
                    <div class="kpi kpi-expenses">
                        <div class="head">
                            <div class="label">المصاريف</div>
                            <div class="icon"><i class="fas fa-hand-holding-dollar"></i></div>
                </div>
                        <div id="kpiExpenses" class="val">0</div>
                </div>
                    <div class="kpi kpi-net">
                        <div class="head">
                            <div class="label">صافي الربح</div>
                            <div class="icon"><i class="fas fa-chart-line"></i></div>
                </div>
                        <div id="kpiNet" class="val">0</div>
                    </div>
                    <div class="kpi kpi-invoices">
                        <div class="head">
                            <div class="label">عدد الفواتير</div>
                            <div class="icon"><i class="fas fa-receipt"></i></div>
                        </div>
                        <div id="kpiInvoices" class="val">0</div>
                    </div>
                </div>
                <div id="meta">آخر تحديث: -</div>
                <div class="row" style="margin-top:12px;">
                    <button id="copyEmailBtn" class="btn-ghost"><i class="fas fa-copy"></i> نسخ الإيميل</button>
                    <button id="logoutBtn" class="btn-danger"><i class="fas fa-power-off"></i> خروج</button>
                </div>
            </div>

            <div id="detailCard" class="card hidden">
                <h2 class="title" style="font-size:1.15rem; margin:0 0 8px;">تفاصيل اليوم</h2>
                <div class="sub" id="detailMeta">مبيعات، مرتجعات، مصاريف (قراءة فقط من المزامنة)</div>
                <div id="detailContent" style="max-height:420px; overflow:auto; margin-top:10px; font-size:0.88rem;"></div>
            </div>
        </div>
    </div>

    <script src="js/firebase_config.js"></script>
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
        import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

        const firebaseConfig = window.POS_FIREBASE_CONFIG || {};

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);

        const authCard = document.getElementById("authCard");
        const dashboard = document.getElementById("dashboard");
        const emailEl = document.getElementById("email");
        const passEl = document.getElementById("password");
        const authMsg = document.getElementById("authMsg");
        const statusEl = document.getElementById("status");
        const metaEl = document.getElementById("meta");

        const kpiSales = document.getElementById("kpiSales");
        const kpiExpenses = document.getElementById("kpiExpenses");
        const kpiNet = document.getElementById("kpiNet");
        const kpiInvoices = document.getElementById("kpiInvoices");
        let unsub = null;
        let unsubDetail = null;

        function getBusinessDateKey(d) {
            const x = new Date(d);
            if (isNaN(x.getTime())) return "";
            if (x.getHours() < 4) {
                x.setDate(x.getDate() - 1);
            }
            return x.toDateString();
        }

        function esc(s) {
            return String(s || "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m]));
        }

        function formatMoney(v) {
            const n = Number(v || 0);
            return new Intl.NumberFormat("en-US").format(Number.isFinite(n) ? n : 0);
        }

        function setStatus(text, ok) {
            const icon = ok ? "fa-circle-check" : "fa-triangle-exclamation";
            statusEl.innerHTML = '<i class="fas ' + icon + '"></i> ' + text;
            statusEl.style.background = ok ? "rgba(34,197,94,0.16)" : "rgba(239,68,68,0.14)";
            statusEl.style.borderColor = ok ? "rgba(34,197,94,0.32)" : "rgba(239,68,68,0.34)";
            statusEl.style.color = ok ? "#4ade80" : "#fca5a5";
        }

        function bindDetail(channelId) {
            if (unsubDetail) {
                unsubDetail();
                unsubDetail = null;
            }
            const dayKey = getBusinessDateKey(new Date());
            const dref = doc(db, "pos_mobile_daily_detail", channelId, "days", dayKey);
            const detailCard = document.getElementById("detailCard");
            const detailContent = document.getElementById("detailContent");
            const detailMeta = document.getElementById("detailMeta");
            if (!detailCard || !detailContent) return;

            unsubDetail = onSnapshot(
                dref,
                (snap) => {
                    detailCard.classList.remove("hidden");
                    if (!snap.exists()) {
                        detailContent.innerHTML =
                            '<div style="color:var(--text-muted);">لا توجد تفاصيل بعد لهذا اليوم. اضغط «Sync now» على اللابتوب.</div>';
                        if (detailMeta) detailMeta.textContent = "مفتاح اليوم: " + dayKey;
                        return;
                    }
                    const data = snap.data() || {};
                    const meta = data.meta || {};
                    const sales = Array.isArray(data.sales) ? data.sales : [];
                    const ret = Array.isArray(data.returns) ? data.returns : [];
                    const exp = Array.isArray(data.expenses) ? data.expenses : [];
                    if (detailMeta) {
                        detailMeta.textContent =
                            "مفتاح اليوم: " +
                            (meta.businessDate || dayKey) +
                            (meta.truncatedSales ? " — عرض جزئي للفواتير" : "");
                    }

                    let html = "";
                    html += '<div style="font-weight:700; margin:8px 0 4px; color:#93c5fd;">فواتير البيع (' + sales.length + ")</div>";
                    if (!sales.length) {
                        html += '<div style="color:var(--text-muted);">—</div>';
                    } else {
                        sales.forEach((s) => {
                            const lines = Array.isArray(s.items) ? s.items.length : 0;
                            html +=
                                '<div style="border:1px solid var(--line); border-radius:10px; padding:8px 10px; margin-bottom:8px; background:rgba(2,6,23,0.25);">' +
                                "<div><strong>#" +
                                esc(s.id) +
                                "</strong> · " +
                                formatMoney(s.total) +
                                " · " +
                                esc(s.payment_method || "") +
                                "</div>" +
                                '<div style="color:var(--text-muted); font-size:0.82rem; margin-top:4px;">' +
                                esc(s.cashier || "") +
                                " · بنود: " +
                                lines +
                                "</div></div>";
                        });
                    }
                    html += '<div style="font-weight:700; margin:12px 0 4px; color:#fca5a5;">مرتجعات (' + ret.length + ")</div>";
                    if (!ret.length) html += '<div style="color:var(--text-muted);">—</div>';
                    else {
                        ret.slice(0, 50).forEach((r) => {
                            html +=
                                '<div style="margin-bottom:6px;">#' +
                                esc(r.id) +
                                " · " +
                                formatMoney(r.total) +
                                "</div>";
                        });
                    }
                    html += '<div style="font-weight:700; margin:12px 0 4px; color:#fde047;">مصاريف اليوم (' + exp.length + ")</div>";
                    if (!exp.length) html += '<div style="color:var(--text-muted);">—</div>';
                    else {
                        exp.slice(0, 50).forEach((e) => {
                            html +=
                                '<div style="margin-bottom:6px;">' +
                                formatMoney(e.amount) +
                                " · " +
                                esc(e.type || "") +
                                " " +
                                esc(e.note || "") +
                                "</div>";
                        });
                    }
                    detailContent.innerHTML = html;
                },
                () => {
                    detailContent.innerHTML =
                        '<div style="color:#fca5a5;">تعذر قراءة التفاصيل (تحقق من قواعد Firestore).</div>';
                }
            );
        }

        function bindDashboard(channelId) {
            if (unsub) unsub();
            const ref = doc(db, "pos_mobile_dashboard", channelId);
            unsub = onSnapshot(ref, (snap) => {
                if (!snap.exists()) {
                    kpiSales.textContent = "0";
                    kpiExpenses.textContent = "0";
                    kpiNet.textContent = "0";
                    kpiInvoices.textContent = "0";
                    metaEl.textContent = "آخر تحديث: لا توجد بيانات بعد";
                    setStatus("بانتظار أول مزامنة من اللابتوب", false);
                    return;
                }
                const d = snap.data() || {};
                kpiSales.textContent = formatMoney(d.salesToday);
                kpiExpenses.textContent = formatMoney(d.expensesToday);
                kpiNet.textContent = formatMoney(d.netProfitToday);
                kpiInvoices.textContent = String(Number(d.invoicesCountToday || 0));
                const ts = d.updatedAt && d.updatedAt.toDate ? d.updatedAt.toDate() : new Date();
                metaEl.textContent = "آخر تحديث: " + ts.toLocaleTimeString("ar-IQ", { hour: "2-digit", minute: "2-digit" });
                setStatus("متصل", true);
            }, () => {
                setStatus("تعذر قراءة بيانات Firebase", false);
            });
        }

        document.getElementById("loginBtn").addEventListener("click", async () => {
            const email = (emailEl.value || "").trim();
            const password = passEl.value || "";
            if (!email || !password) {
                authMsg.textContent = "يرجى إدخال الإيميل وكلمة المرور.";
                return;
            }
            authMsg.textContent = "جاري تسجيل الدخول...";
            try {
                await signInWithEmailAndPassword(auth, email, password);
                authMsg.textContent = "";
            } catch (e) {
                authMsg.textContent = "فشل الدخول: " + (e && e.message ? e.message : "Unknown error");
            }
        });

        document.getElementById("logoutBtn").addEventListener("click", () => signOut(auth));
        document.getElementById("copyEmailBtn").addEventListener("click", () => {
            const txt = auth.currentUser && auth.currentUser.email ? auth.currentUser.email : "";
            navigator.clipboard.writeText(txt);
        });

        onAuthStateChanged(auth, (user) => {
            if (!user || !user.email) {
                if (unsub) { unsub(); unsub = null; }
                if (unsubDetail) { unsubDetail(); unsubDetail = null; }
                const detailCard = document.getElementById("detailCard");
                if (detailCard) detailCard.classList.add("hidden");
                authCard.classList.remove("hidden");
                dashboard.classList.add("hidden");
                setStatus("غير متصل", false);
                return;
            }
            authCard.classList.add("hidden");
            dashboard.classList.remove("hidden");
            const channelId = user.email.toLowerCase();
            bindDashboard(channelId);
            bindDetail(channelId);
        });
    </script>
</body>
</html>
