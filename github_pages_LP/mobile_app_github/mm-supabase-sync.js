/**
 * Mobile Manager — Supabase read/sync (alternative to Firebase Firestore).
 */
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

let sb = null;
let sbCfg = null;

export function mmSbEnabled() {
    const backend = String(window.MM_SYNC_BACKEND || "both").toLowerCase();
    if (backend === "firebase") return false;
    const c = window.POS_SUPABASE_MOBILE || {};
    return !!(c.enabled && c.url && c.anonKey);
}

export function mmSbInit(cfg) {
    sbCfg = cfg || window.POS_SUPABASE_MOBILE || {};
    if (!sbCfg.url || !sbCfg.anonKey) return null;
    if (!sb) {
        sb = createClient(sbCfg.url, sbCfg.anonKey, {
            auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
        });
    }
    return sb;
}

export function mmSbClient() {
    if (!sb && mmSbEnabled()) mmSbInit(window.POS_SUPABASE_MOBILE);
    return sb;
}

export function mmSbRowToDoc(row) {
    if (!row) return null;
    const d = row.data && typeof row.data === "object" ? Object.assign({}, row.data) : {};
    if (row.updated_at) {
        const ts = new Date(row.updated_at);
        d.updatedAt = { toDate: function () { return ts; } };
    }
    return d;
}

export async function mmSbSignIn(email, password) {
    const client = mmSbClient();
    if (!client) throw new Error("supabase_not_configured");
    const em = String(email || "").trim().toLowerCase();
    return client.auth.signInWithPassword({ email: em, password: password || "" });
}

export async function mmSbSignOut() {
    const client = mmSbClient();
    if (!client) return;
    return client.auth.signOut();
}

export async function mmSbGetSessionEmail() {
    const client = mmSbClient();
    if (!client) return "";
    const { data } = await client.auth.getSession();
    const u = data && data.session && data.session.user;
    return u && u.email ? String(u.email).toLowerCase() : "";
}

export function mmSbBindDashboard(channelId, onData, onErr) {
    const client = mmSbClient();
    if (!client) return function () {};
    const ch = String(channelId || "").trim().toLowerCase();
    client.from("pos_mobile_dashboard").select("data, updated_at").eq("channel_id", ch).maybeSingle()
        .then(function (res) {
            if (res.error) { if (onErr) onErr(res.error); return; }
            onData(mmSbRowToDoc(res.data));
        });
    const rt = client.channel("mm-dash-" + ch)
        .on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "pos_mobile_dashboard",
            filter: "channel_id=eq." + ch
        }, function (payload) {
            if (payload.new) onData(mmSbRowToDoc(payload.new));
        })
        .subscribe();
    return function () {
        try { client.removeChannel(rt); } catch (e) {}
    };
}

export function mmSbBindInventory(channelId, onData, onErr) {
    const client = mmSbClient();
    if (!client) return function () {};
    const ch = String(channelId || "").trim().toLowerCase();
    client.from("pos_mobile_inventory").select("data, updated_at").eq("channel_id", ch).maybeSingle()
        .then(function (res) {
            if (res.error) { if (onErr) onErr(res.error); return; }
            onData(mmSbRowToDoc(res.data));
        });
    const rt = client.channel("mm-inv-" + ch)
        .on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "pos_mobile_inventory",
            filter: "channel_id=eq." + ch
        }, function (payload) {
            if (payload.new) onData(mmSbRowToDoc(payload.new));
        })
        .subscribe();
    return function () { try { client.removeChannel(rt); } catch (e) {} };
}

export function mmSbBindDebt(channelId, onData, onErr) {
    const client = mmSbClient();
    if (!client) return function () {};
    const ch = String(channelId || "").trim().toLowerCase();
    client.from("pos_mobile_debt").select("data, updated_at").eq("channel_id", ch).maybeSingle()
        .then(function (res) {
            if (res.error) { if (onErr) onErr(res.error); return; }
            onData(mmSbRowToDoc(res.data));
        });
    const rt = client.channel("mm-debt-" + ch)
        .on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "pos_mobile_debt",
            filter: "channel_id=eq." + ch
        }, function (payload) {
            if (payload.new) onData(mmSbRowToDoc(payload.new));
        })
        .subscribe();
    return function () { try { client.removeChannel(rt); } catch (e) {} };
}

export function mmSbBindDetail(channelId, dayKey, onData, onErr) {
    const client = mmSbClient();
    if (!client) return function () {};
    const ch = String(channelId || "").trim().toLowerCase();
    const dk = String(dayKey || "");
    client.from("pos_mobile_daily_detail").select("data, updated_at").eq("channel_id", ch).eq("day_key", dk).maybeSingle()
        .then(function (res) {
            if (res.error) { if (onErr) onErr(res.error); return; }
            onData(mmSbRowToDoc(res.data));
        });
    const rt = client.channel("mm-detail-" + ch + "-" + dk)
        .on("postgres_changes", {
            event: "*",
            schema: "public",
            table: "pos_mobile_daily_detail",
            filter: "channel_id=eq." + ch
        }, function (payload) {
            if (payload.new && String(payload.new.day_key) === dk) {
                onData(mmSbRowToDoc(payload.new));
            }
        })
        .subscribe();
    return function () { try { client.removeChannel(rt); } catch (e) {} };
}

export async function mmSbFetchAll(channelId, dayKey) {
    const client = mmSbClient();
    if (!client) throw new Error("supabase_not_configured");
    const ch = String(channelId || "").trim().toLowerCase();
    const dk = String(dayKey || "");
    const [dash, inv, debt, detail] = await Promise.all([
        client.from("pos_mobile_dashboard").select("data, updated_at").eq("channel_id", ch).maybeSingle(),
        client.from("pos_mobile_inventory").select("data, updated_at").eq("channel_id", ch).maybeSingle(),
        client.from("pos_mobile_debt").select("data, updated_at").eq("channel_id", ch).maybeSingle(),
        client.from("pos_mobile_daily_detail").select("data, updated_at").eq("channel_id", ch).eq("day_key", dk).maybeSingle()
    ]);
    return {
        dashboard: dash.error ? null : mmSbRowToDoc(dash.data),
        inventory: inv.error ? null : mmSbRowToDoc(inv.data),
        debt: debt.error ? null : mmSbRowToDoc(debt.data),
        detail: detail.error ? null : mmSbRowToDoc(detail.data)
    };
}
