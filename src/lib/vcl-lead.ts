const ROOT_DOMAIN = "julienesalvan.com.br";
export const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const isUuid = (v: unknown): v is string => typeof v === "string" && UUID_RE.test(v);

export function setCookie(name: string, value: string, days: number) {
  const exp = new Date(Date.now() + days * 864e5).toUTCString();
  const host = location.hostname;
  const domain =
    host === ROOT_DOMAIN || host.endsWith("." + ROOT_DOMAIN) ? `; domain=.${ROOT_DOMAIN}` : "";
  document.cookie = `${name}=${value}; expires=${exp}; path=/${domain}; SameSite=Lax; Secure`;
}

export function getCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&") + "=([^;]*)"));
  return m ? m[1] : null;
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export type Utms = Record<(typeof UTM_KEYS)[number], string>;

export function getUtms(): Utms {
  const out = Object.fromEntries(UTM_KEYS.map((k) => [k, ""])) as Utms;
  const qs = new URLSearchParams(location.search);
  if (UTM_KEYS.some((k) => qs.get(k))) {
    for (const k of UTM_KEYS) out[k] = qs.get(k) ?? "";
    return out;
  }
  const raw = getCookie("LeadUTM");
  if (raw) {
    try {
      const obj = JSON.parse(decodeURIComponent(raw));
      for (const k of UTM_KEYS) if (typeof obj?.[k] === "string") out[k] = obj[k];
    } catch {
      /* ignore */
    }
  }
  return out;
}

export function hasUtms(u: Utms) {
  return UTM_KEYS.some((k) => u[k]);
}

export function pushDL(data: Record<string, unknown>) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(data);
}

export function readCheckoutCookie(): { name?: string; email?: string; phone?: string } | null {
  const raw = getCookie("vc_checkout");
  if (!raw) return null;
  try {
    return JSON.parse(decodeURIComponent(raw));
  } catch {
    return null;
  }
}

export function buildCheckoutUrl(
  href: string | null | undefined,
  d: { nome: string; email: string; phone: string; leadId: string | null; utms: Utms },
) {
  let url: URL;
  try {
    url = new URL(href && href.includes("pay.hotmart.com") ? href : "https://pay.hotmart.com/T105324426S");
  } catch {
    url = new URL("https://pay.hotmart.com/T105324426S");
  }
  const p = url.searchParams;
  const add = (k: string, v: string) => {
    if (v && !p.has(k)) p.set(k, v);
  };
  add("name", d.nome);
  add("email", d.email);
  add("phoneac", d.phone.slice(0, 2));
  add("phonenumber", d.phone.slice(2));
  if (d.leadId) add("xcod", d.leadId);
  if (hasUtms(d.utms)) {
    for (const [k, v] of Object.entries(d.utms)) add(k, v);
    add("src", d.utms.utm_source);
    const u = d.utms;
    add("sck", [u.utm_source, u.utm_medium, u.utm_campaign, u.utm_content, u.utm_term].join("|").slice(0, 250));
  }
  return url.toString();
}

export function trackLeadClick() {
  const lid = new URLSearchParams(location.search).get("lid");
  if (isUuid(lid)) setCookie("vc_lead_id", lid, 180);
  const id = getCookie("vc_lead_id");
  if (!isUuid(id)) return;
  try {
    if (sessionStorage.getItem("vc_click_sent")) return;
    sessionStorage.setItem("vc_click_sent", "1");
  } catch {
    /* ignore */
  }
  const endpoint = "https://n8n.julienesalvan.com.br/webhook/clique-vendas";
  const body = JSON.stringify({ lead_id: id });
  try {
    if (navigator.sendBeacon && navigator.sendBeacon(endpoint, new Blob([body], { type: "text/plain" }))) return;
  } catch {
    /* fallback */
  }
  fetch(endpoint, { method: "POST", body, keepalive: true, headers: { "Content-Type": "text/plain" } }).catch(() => {});
}
