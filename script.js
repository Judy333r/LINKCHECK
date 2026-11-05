/* LINKCHECK
 * Optional threat-database check: set API_ENDPOINT to your serverless function
 * (e.g. Cloudflare Worker / Netlify / Vercel) that holds your Google Safe Browsing
 * or VirusTotal key. It must accept POST {url} and return {"status":"safe"|"dangerous"}.
 * Never put an API key in this file. */
const CONFIG = { API_ENDPOINT: "" };

const T = {
  en: {
    title: "Think before you click",
    intro: "Not sure if a link is safe? Paste it here and let LINKCHECK check it for you!",
    placeholder: "Paste your link here…", scan: "SCAN LINK", scanning: "Scanning…", clear: "Clear",
    tipsTitle: "Stay Safe Online",
    tip1: "Never share your passwords through unknown links.",
    tip2: "Check website addresses before opening them.",
    tip3: "Be careful with unexpected prizes and offers.",
    tip4: "Never enter personal information on unfamiliar websites.",
    footer: "LINKCHECK never opens the links you paste.",
    empty: "Please paste a link first.", invalid: "That doesn’t look like a valid link. Check it and try again.",
    safe: "Looks safe", warn: "Suspicious link", danger: "Dangerous link",
    safeMsg: "No known threats were detected. However, always be careful when visiting unfamiliar websites.",
    warnMsg: "This link contains suspicious characteristics. We recommend avoiding it until you verify its source.",
    dangerMsg: "This link has been identified as potentially dangerous. Do not open it or enter any personal information.",
    why: "Why this result?",
    basic: "Basic analysis only: LINKCHECK checked the link’s pattern but not a threat database, so it cannot confirm that a link is safe.",
    apiDown: "The threat-database check is unavailable right now, so only a basic analysis was done. It cannot confirm that a link is safe.",
    rDb: "The link appears in a known threat database.",
    rDbClean: "The link was not found in the threat database.",
    rNone: "No suspicious patterns were found in the address.",
    rIp: "The address uses numbers (an IP address) instead of a website name.",
    rAt: "The address contains an “@” sign, which can hide the real destination.",
    rPuny: "The address uses look-alike international characters that can imitate another site.",
    rHttp: "The link is not encrypted (it starts with http, not https).",
    rShort: "This is a shortened link, so the real destination is hidden.",
    rTld: "The domain ends with an extension often used in scams.",
    rBrand: b => `The address mentions “${b}” but does not belong to the real ${b} website.`,
    rSub: "The address has many sub-parts, a common trick to look like a trusted site.",
    rWords: "The address contains words often used to pressure people (like login, verify, or prize).",
    rLong: "The address is unusually long.",
    rPort: "The address uses an unusual port number."
  },
  ar: {
    title: "فكّر قبل أن تضغط",
    intro: "هل تشك في أمان أحد الروابط؟ انسخه وضعه هنا ودع LINKCHECK يفحصه لك!",
    placeholder: "ضع الرابط هنا…", scan: "افحص الرابط", scanning: "جارٍ الفحص…", clear: "مسح",
    tipsTitle: "حافظ على أمانك الإلكتروني",
    tip1: "لا تشارك كلمات المرور عبر روابط مجهولة.",
    tip2: "تحقق من عناوين المواقع قبل فتحها.",
    tip3: "احذر من الجوائز والعروض غير المتوقعة.",
    tip4: "لا تدخل معلوماتك الشخصية في مواقع غير مألوفة.",
    footer: "لا يقوم LINKCHECK بفتح الروابط التي تضعها.",
    empty: "الرجاء لصق رابط أولاً.", invalid: "لا يبدو هذا رابطاً صحيحاً. تحقق منه وحاول مجدداً.",
    safe: "يبدو آمناً", warn: "رابط مشبوه", danger: "رابط خطير",
    safeMsg: "لم يتم العثور على تهديدات معروفة. ومع ذلك، احرص دائماً على الحذر عند زيارة المواقع غير المعروفة.",
    warnMsg: "يحتوي هذا الرابط على مؤشرات مريبة. ننصحك بعدم فتحه حتى تتأكد من مصدره.",
    dangerMsg: "تم تحديد هذا الرابط على أنه قد يكون خطيراً. لا تفتحه ولا تدخل أي معلومات شخصية فيه.",
    why: "لماذا ظهرت هذه النتيجة؟",
    basic: "تحليل أساسي فقط: فحص LINKCHECK نمط الرابط دون الرجوع إلى قاعدة بيانات التهديدات، لذلك لا يمكنه تأكيد أن الرابط آمن.",
    apiDown: "فحص قاعدة بيانات التهديدات غير متاح حالياً، لذلك تم إجراء تحليل أساسي فقط ولا يمكن تأكيد أن الرابط آمن.",
    rDb: "ظهر هذا الرابط في قاعدة بيانات تهديدات معروفة.",
    rDbClean: "لم يُعثر على الرابط في قاعدة بيانات التهديدات.",
    rNone: "لم يتم العثور على أنماط مريبة في العنوان.",
    rIp: "يستخدم العنوان أرقاماً (عنوان IP) بدلاً من اسم موقع.",
    rAt: "يحتوي العنوان على علامة «@» التي قد تخفي الوجهة الحقيقية.",
    rPuny: "يستخدم العنوان أحرفاً دولية مشابهة قد تنتحل موقعاً آخر.",
    rHttp: "الرابط غير مشفّر (يبدأ بـ http وليس https).",
    rShort: "هذا رابط مختصر، لذلك الوجهة الحقيقية مخفية.",
    rTld: "ينتهي النطاق بامتداد يُستخدم كثيراً في عمليات الاحتيال.",
    rBrand: b => `يذكر العنوان «${b}» لكنه لا يتبع الموقع الحقيقي لـ ${b}.`,
    rSub: "يحتوي العنوان على أجزاء فرعية كثيرة، وهي حيلة شائعة لتقليد المواقع الموثوقة.",
    rWords: "يحتوي العنوان على كلمات تُستخدم عادةً للضغط على الناس (مثل login أو verify أو prize).",
    rLong: "العنوان طويل بشكل غير معتاد.",
    rPort: "يستخدم العنوان رقم منفذ غير معتاد."
  }
};

const BRANDS = { paypal:"paypal.com", google:"google.com", apple:"apple.com", microsoft:"microsoft.com",
  amazon:"amazon.com", facebook:"facebook.com", instagram:"instagram.com", whatsapp:"whatsapp.com",
  netflix:"netflix.com", dhl:"dhl.com", fedex:"fedex.com", aramex:"aramex.com", absher:"absher.sa" };
const SHORTENERS = ["bit.ly","tinyurl.com","t.co","goo.gl","is.gd","cutt.ly","ow.ly","rb.gy","shorturl.at","tiny.cc"];
const BAD_TLDS = ["zip","mov","xyz","top","click","tk","ml","ga","cf","gq","icu","buzz","rest","work","country"];
const WORDS = ["login","signin","verify","secure","account","update","password","prize","winner","gift","free","bonus","claim","confirm","suspend"];

let lang = "en";
const $ = id => document.getElementById(id);
const t = k => T[lang][k];

function parseUrl(raw) {
  let s = raw.trim();
  if (!s || /\s/.test(s)) return null;
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(s)) s = "https://" + s;
  try {
    const u = new URL(s);
    if (!/^https?:$/.test(u.protocol)) return null;
    const h = u.hostname;
    if (!(/^\d{1,3}(\.\d{1,3}){3}$/.test(h) || h.includes(":") || /\.[^.]{2,}$/.test(h))) return null;
    return u;
  } catch { return null; }
}

function registrable(host) {
  const p = host.split(".");
  const n = p.length >= 3 && p[p.length - 1].length === 2 && ["co","com","org","net","gov","edu"].includes(p[p.length - 2]) ? 3 : 2;
  return p.slice(-n).join(".");
}

function analyze(u) {
  const host = u.hostname.toLowerCase(), full = (u.pathname + u.search).toLowerCase();
  const out = []; // {k, w, p?}
  const add = (k, w, p) => out.push({ k, w, p });
  const isIp = /^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.includes(":");
  if (isIp) add("rIp", 3);
  if (u.username || u.href.split("?")[0].replace(/^https?:\/\//, "").split("/")[0].includes("@")) add("rAt", 3);
  if (host.split(".").some(l => l.startsWith("xn--"))) add("rPuny", 2);
  if (u.protocol === "http:") add("rHttp", 1);
  if (SHORTENERS.includes(host)) add("rShort", 2);
  if (!isIp && BAD_TLDS.includes(host.split(".").pop())) add("rTld", 2);
  if (!isIp) {
    const reg = registrable(host);
    for (const [b, real] of Object.entries(BRANDS)) {
      if (host.includes(b) && reg !== real) { add("rBrand", 3, b); break; }
    }
    if (host.split(".").length >= 5) add("rSub", 1);
  }
  const hits = WORDS.filter(w => host.includes(w) || full.includes(w));
  if (hits.length >= 2) add("rWords", 1);
  if (u.href.length > 120) add("rLong", 1);
  if (u.port && !["80","443"].includes(u.port)) add("rPort", 1);
  return { score: out.reduce((a, r) => a + r.w, 0), reasons: out };
}

async function dbCheck(url) {
  if (!CONFIG.API_ENDPOINT) return { state: "off" };
  try {
    const r = await fetch(CONFIG.API_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }) });
    if (!r.ok) throw new Error();
    const d = await r.json();
    if (d.status === "dangerous" || d.status === "safe") return { state: d.status };
    throw new Error();
  } catch { return { state: "down" }; }
}

const ICONS = {
  safe: '<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3Z"/><path d="m8.5 12 2.4 2.4 4.6-4.8"/></svg>',
  warn: '<svg viewBox="0 0 24 24"><path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4M12 17.5v.01"/></svg>',
  danger: '<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3Z"/><path d="M12 8v5M12 16.5v.01"/></svg>'
};
const esc = s => s.replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));

let last = null;
function render() {
  if (!last) return;
  const { url, verdict, reasons, db } = last;
  const items = reasons.map(r => typeof T[lang][r.k] === "function" ? T[lang][r.k](r.p) : t(r.k));
  if (db === "dangerous") items.unshift(t("rDb"));
  else if (db === "safe" && verdict === "safe") items.unshift(t("rDbClean"));
  if (!items.length) items.push(t("rNone"));
  const note = db === "safe" || db === "dangerous" ? "" : `<div class="note">${t(db === "down" ? "apiDown" : "basic")}</div>`;
  $("result").innerHTML = `<div class="res ${verdict}">
    <div class="res-head">${ICONS[verdict]}<h3>${t(verdict)}</h3></div>
    <p>${t(verdict + "Msg")}</p><div class="url-shown">${esc(url)}</div>
    <h4>${t("why")}</h4><ul>${items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>${note}</div>`;
}

async function scan() {
  const raw = $("url").value, err = $("error");
  err.hidden = true; $("result").innerHTML = ""; last = null;
  if (!raw.trim()) { err.textContent = t("empty"); err.hidden = false; return; }
  const u = parseUrl(raw);
  if (!u) { err.textContent = t("invalid"); err.hidden = false; return; }
  $("scanBtn").disabled = true; $("scanning").hidden = false;
  const [db] = await Promise.all([dbCheck(u.href), new Promise(r => setTimeout(r, 1200))]);
  const { score, reasons } = analyze(u);
  let verdict = score >= 6 ? "danger" : score >= 2 ? "warn" : "safe";
  if (db.state === "dangerous") verdict = "danger";
  last = { url: u.href, verdict, reasons, db: db.state };
  $("scanning").hidden = true; $("scanBtn").disabled = false;
  render();
}

function setLang(l) {
  lang = l;
  document.documentElement.lang = l; document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll("[data-i18n-ph]").forEach(e => e.placeholder = t(e.dataset.i18nPh));
  document.querySelectorAll("[data-i18n-label]").forEach(e => e.setAttribute("aria-label", t(e.dataset.i18nLabel)));
  $("lEn").classList.toggle("on", l === "en"); $("lAr").classList.toggle("on", l === "ar");
  $("error").hidden = true; render();
}

$("scanBtn").addEventListener("click", scan);
$("url").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); scan(); } });
$("url").addEventListener("input", () => { $("clearBtn").hidden = !$("url").value; });
$("clearBtn").addEventListener("click", () => { $("url").value = ""; $("clearBtn").hidden = true; $("error").hidden = true; $("result").innerHTML = ""; last = null; $("url").focus(); });
$("langBtn").addEventListener("click", () => setLang(lang === "en" ? "ar" : "en"));
setLang(/^ar/i.test(navigator.language) ? "ar" : "en");
