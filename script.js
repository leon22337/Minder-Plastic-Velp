/* ============================================================
   MINDER PLASTIC VELP — script.js
   Includes: i18n (EN/NL), analytics, email, reply form,
   scroll animations, stat counters, share, navbar.
   ============================================================ */


/* ============================================================
   1. TRANSLATIONS
   ============================================================ */
const TRANSLATIONS = {

  en: {
    pageTitle:  "Minder Plastic Velp — Less Plastic, More Life",

    nav: {
      problem:   "The Problem",
      impact:    "Impact",
      solutions: "Solutions",
      reply:     "Supermarkets Reply",
      cta:       "Take Action",
    },

    hero: {
      tag:         "Velp, Netherlands — Community Initiative",
      title:       "Every bag <em>counts.</em><br />Every choice <em>matters.</em>",
      subtitle:    "Supermarkets in Velp hand out thousands of plastic bags every week. Together, we can ask them to change — politely, simply, effectively.",
      ctaPrimary:  "✉️ Send an Email Now",
      ctaSecondary:"Learn Why →",
      scroll:      "Scroll",
    },

    problem: {
      label: "Why This Matters",
      title: "The Plastic Bag Problem",
      intro: "Plastic bags seem harmless — until you follow their journey after the bin.",
      card1: { title: "They End Up in Nature",    body: "Millions of bags end up in rivers, parks, and oceans every year. They break into microplastics that enter the food chain — including the food on your table." },
      card2: { title: "They Last 500+ Years",     body: "A single plastic bag takes up to 500 years to decompose. Used for 10 minutes, it outlives every person alive today — many times over." },
      card3: { title: "Wildlife Suffers",         body: "Sea turtles mistake bags for jellyfish. Birds feed them to chicks. Over one million marine animals die from plastic pollution every single year." },
      card4: { title: "Velp Is Affected Too",     body: "Plastic litter is found along the IJssel riverbanks, in Velp's parks, and on neighbourhood streets. Our local environment deserves better." },
    },

    impact: {
      label:       "By the Numbers",
      title:       "The Scale of the Problem",
      stat1: { unit: "bags / year", desc: "used in the Netherlands alone" },
      stat2: { unit: "years",       desc: "for one bag to decompose" },
      stat3: { unit: "minutes",     desc: "average bag use time" },
      stat4: { unit: "%",           desc: "of ocean plastic comes from land" },
      quote:       '"The most powerful step a supermarket can take is to stop automatically offering plastic bags at the checkout."',
      quoteSource: "— Plastic Soup Foundation, Netherlands",
    },

    reusable: {
      label: "The Solution",
      title: "Reusable Is the Future",
      intro: "Small changes in habit make a massive collective difference.",
      card1: { title: "Bring Your Own Bag",        body: "Keep a tote in your coat pocket or backpack. You'll never need a plastic bag again." },
      card2: { title: "Choose Paper Over Plastic",  body: "When you forget your bag, pick paper. It biodegrades in weeks, not centuries." },
      card3: { title: "Ask the Supermarket",        body: "Supermarkets respond to customer feedback. A polite email from many people creates real change." },
      card4: { title: "Spread the Word",            body: "Share this page with friends and family in Velp. Community pressure works." },
      funFact: "<strong>Did you know?</strong> One reusable cotton bag replaces up to <strong>700 plastic bags</strong> over its lifetime. That's 700 bags that never enter the environment.",
    },

    supermarkets: {
      label:     "Local Focus",
      title:     "Supermarkets in Velp",
      intro:     "These are the supermarkets we're encouraging to reduce plastic bag usage. Each one has the power to make a significant local impact.",
      decoLabel: "supermarkets<br />in Velp to contact",
    },

    action: {
      label:            "Take Action",
      title:            "Send an Email Today",
      intro:            "We've written a polite, friendly email for you. One click opens it in your email app — read, edit, and personalise before sending. It takes less than 2 minutes.",
      emailChrome:      "New Message",
      emailTo:          "To",
      emailSubjectLabel:"Subject",
      emailSubjectValue:"Request: Fewer Plastic Bags in Velp",
      emailOpening:     "Dear team,",
      emailPreview:     "As a resident of Velp, I would like to kindly ask you to reduce the use of plastic bags in your store...",
      emailShowMore:    "Show full email ↓",
      emailBody:        "Given the growing environmental awareness in our community, and the serious harm that plastic bags cause to our rivers, parks and wildlife, I would like to ask you to consider the following measures:",
      emailBullet1:     "Stop automatically offering plastic bags at the checkout",
      emailBullet2:     "Offer reusable or paper alternatives",
      emailBullet3:     "Inform your customers about the environmental impact of plastic",
      emailBullet4:     "Consider charging a small fee for plastic bags to discourage use",
      emailClosing:     "As a regular customer of your store, I believe that small changes can make a big difference for Velp and the surrounding area. I sincerely hope for your cooperation.",
      emailSignature:   "Kind regards,<br /><em>[Your name]</em><br />Resident of Velp",
      counterLabel:     "people in Velp have clicked this button",
      emailBtn:         "✉️ Open Email in My Mail App",
      emailNote:        "Your email client will open with a pre-written message.<br />You can edit it before sending — please personalise it!",
      shareLabel:       "Know someone in Velp? Share this page:",
      shareWhatsapp:    "WhatsApp",
      shareCopy:        "Copy Link",
      copied:           "✓ Copied!",
    },

    reply: {
      label:       "Get in Touch",
      title:       "Are You a Supermarket?",
      body:        "We'd love to hear from you. Whether you're already reducing plastic, or you'd like to share your plans — your response matters to this community.",
      emailPrompt: "You can also reach us directly:",
      whyTitle:    "Why respond?",
      whyBody:     "Showing your community that you care about sustainability builds real trust and loyalty. Even a short message makes a difference.",
      successTitle:"Message received!",
      successBody: "Thank you for reaching out. We'll read your message and may share your response with the Velp community.",
      form: {
        name:               "Your name",
        namePlaceholder:    "Jan de Vries",
        org:                "Organisation",
        orgPlaceholder:     "Albert Heijn Velp",
        email:              "Email address",
        emailHint:          "optional, for follow-up",
        message:            "Your message",
        messagePlaceholder: "We are already working on reducing plastic bags by...",
        privacy:            "🔒 Your message is stored securely and only visible to the campaign team.",
        submit:             "Send Message →",
        errorRequired:      "Please fill in your name and message.",
      },
    },

    footer: {
      tagline:       "A community initiative to reduce plastic bag use in Velp, Netherlands. Not affiliated with any supermarket chain.",
      linksTitle:    "Useful Links",
      campaignTitle: "Campaign",
      dashboard:     "📊 Admin Dashboard",
      replyLink:     "Supermarket Reply Form",
      contact:       "Contact Us",
      credit:        "Made with 💚 by a concerned citizen of Velp · © 2025",
    },
  },

  /* ── DUTCH ───────────────────────────────────────────────── */
  nl: {
    pageTitle: "Minder Plastic Velp — Minder Plastic, Meer Leven",

    nav: {
      problem:   "Het Probleem",
      impact:    "Impact",
      solutions: "Oplossingen",
      reply:     "Supermarkten Reageren",
      cta:       "Onderneem Actie",
    },

    hero: {
      tag:         "Velp, Nederland — Gemeenschapsinitiatief",
      title:       "Elk tasje <em>telt.</em><br />Elke keuze <em>doet ertoe.</em>",
      subtitle:    "Supermarkten in Velp geven elke week duizenden plastic tasjes uit. Samen kunnen we hen vragen dit te veranderen — beleefd, eenvoudig, effectief.",
      ctaPrimary:  "✉️ Stuur Nu Een E-mail",
      ctaSecondary:"Lees Meer →",
      scroll:      "Scroll",
    },

    problem: {
      label: "Waarom Dit Belangrijk Is",
      title: "Het Plastic Tasjesprobleem",
      intro: "Plastic tasjes lijken onschuldig — tot je ziet wat er na de prullenbak mee gebeurt.",
      card1: { title: "Ze Belanden in de Natuur",    body: "Miljoenen tasjes belanden elk jaar in rivieren, parken en oceanen. Ze vallen uiteen tot microplastics die in de voedselketen terechtkomen — ook in jouw eten." },
      card2: { title: "Ze Gaan 500+ Jaar Mee",       body: "Eén plastic tasje duurt tot 500 jaar om af te breken. Tien minuten gebruikt, maar het overleeft iedereen die nu leeft — vele malen over." },
      card3: { title: "Dieren Lijden Eronder",       body: "Zeeschildpadden verwarren tasjes met kwallen. Vogels voeden hun kuikens ermee. Meer dan een miljoen zeedieren sterven jaarlijks door plastic vervuiling." },
      card4: { title: "Ook Velp Heeft Er Last Van",  body: "Plastic zwerfafval is te vinden langs de IJsseloever, in de parken van Velp en op straten. Onze lokale omgeving verdient beter." },
    },

    impact: {
      label:       "In Cijfers",
      title:       "De Omvang van het Probleem",
      stat1: { unit: "tasjes / jaar", desc: "alleen al in Nederland" },
      stat2: { unit: "jaar",          desc: "voor één tasje om af te breken" },
      stat3: { unit: "minuten",       desc: "gemiddelde gebruikstijd per tasje" },
      stat4: { unit: "%",             desc: "van oceaanplastic komt van land" },
      quote:       '"De krachtigste stap die een supermarkt kan zetten, is stoppen met het automatisch aanbieden van plastic tasjes bij de kassa."',
      quoteSource: "— Plastic Soup Foundation, Nederland",
    },

    reusable: {
      label: "De Oplossing",
      title: "Herbruikbaar Is de Toekomst",
      intro: "Kleine gewoontewijzigingen maken samen een enorm verschil.",
      card1: { title: "Neem Je Eigen Tas Mee",         body: "Bewaar een tas in je jaszak of rugzak. Je hebt nooit meer een plastic tasje nodig." },
      card2: { title: "Kies Papier in Plaats van Plastic", body: "Als je je tas vergeet, pak dan papier. Dat breekt af in weken, niet in eeuwen." },
      card3: { title: "Vraag het de Supermarkt",        body: "Supermarkten reageren op feedback van klanten. Een beleefde e-mail van velen creëert echte verandering." },
      card4: { title: "Verspreid het Nieuws",           body: "Deel deze pagina met vrienden en familie in Velp. Gemeenschapsdruk werkt." },
      funFact: "<strong>Wist je dat?</strong> Eén herbruikbare katoenen tas vervangt tot wel <strong>700 plastic tasjes</strong> gedurende zijn levensduur. Dat zijn 700 tasjes die nooit in het milieu terechtkomen.",
    },

    supermarkets: {
      label:     "Lokale Focus",
      title:     "Supermarkten in Velp",
      intro:     "Dit zijn de supermarkten die we aanmoedigen om plastic tasjesgebruik te verminderen. Elk van hen heeft de macht om een significante lokale impact te maken.",
      decoLabel: "supermarkten<br />in Velp om te contacteren",
    },

    action: {
      label:            "Onderneem Actie",
      title:            "Stuur Vandaag Een E-mail",
      intro:            "We hebben een beleefde, vriendelijke e-mail voor je geschreven. Eén klik opent hem in je e-mailprogramma — lees, bewerk en personaliseer voor het versturen. Het duurt minder dan 2 minuten.",
      emailChrome:      "Nieuw Bericht",
      emailTo:          "Aan",
      emailSubjectLabel:"Onderwerp",
      emailSubjectValue:"Verzoek: Minder Plastic Tasjes in Velp",
      emailOpening:     "Geachte medewerkers,",
      emailPreview:     "Als inwoner van Velp wil ik u vriendelijk vragen om het gebruik van plastic tasjes in uw winkel te verminderen...",
      emailShowMore:    "Volledige e-mail tonen ↓",
      emailBody:        "Met de groei van milieubewustzijn in onze gemeenschap, en met het oog op de ernstige schade die plastic tasjes toebrengen aan onze rivieren, parken en wilde dieren, wil ik u vragen om de volgende maatregelen te overwegen:",
      emailBullet1:     "Stop met het automatisch aanbieden van plastic tasjes bij de kassa",
      emailBullet2:     "Bied herbruikbare of papieren alternatieven aan",
      emailBullet3:     "Informeer uw klanten over het milieu-effect van plastic",
      emailBullet4:     "Overweeg een kleine bijdrage te vragen voor plastic tasjes",
      emailClosing:     "Als vaste klant van uw winkel geloof ik dat kleine aanpassingen een groot verschil kunnen maken voor Velp en de omgeving. Ik hoop van harte op uw medewerking.",
      emailSignature:   "Met vriendelijke groet,<br /><em>[Uw naam]</em><br />Inwoner van Velp",
      counterLabel:     "mensen in Velp hebben op deze knop geklikt",
      emailBtn:         "✉️ Open E-mail in Mijn E-mailprogramma",
      emailNote:        "Uw e-mailprogramma opent met een vooraf geschreven bericht.<br />U kunt het bewerken vóór het verzenden — personaliseer het alstublieft!",
      shareLabel:       "Iemand in Velp kennen? Deel deze pagina:",
      shareWhatsapp:    "WhatsApp",
      shareCopy:        "Link Kopiëren",
      copied:           "✓ Gekopieerd!",
    },

    reply: {
      label:       "Neem Contact Op",
      title:       "Bent U een Supermarkt?",
      body:        "We horen graag van u. Of u nu al stappen zet om plastic te verminderen, of uw plannen wilt delen — uw reactie is belangrijk voor deze gemeenschap.",
      emailPrompt: "U kunt ons ook rechtstreeks bereiken:",
      whyTitle:    "Waarom reageren?",
      whyBody:     "Laten zien dat u om duurzaamheid geeft, bouwt echt vertrouwen en loyaliteit op in uw gemeenschap. Zelfs een kort berichtje maakt een verschil.",
      successTitle:"Bericht ontvangen!",
      successBody: "Bedankt voor uw bericht. We lezen het en kunnen uw reactie (eventueel anoniem) delen met de gemeenschap van Velp.",
      form: {
        name:               "Uw naam",
        namePlaceholder:    "Jan de Vries",
        org:                "Organisatie",
        orgPlaceholder:     "Albert Heijn Velp",
        email:              "E-mailadres",
        emailHint:          "optioneel, voor een reactie",
        message:            "Uw bericht",
        messagePlaceholder: "Wij werken al aan het verminderen van plastic tasjes door...",
        privacy:            "🔒 Uw bericht wordt veilig opgeslagen en is alleen zichtbaar voor het campagneteam.",
        submit:             "Bericht Versturen →",
        errorRequired:      "Vul uw naam en bericht in.",
      },
    },

    footer: {
      tagline:       "Een gemeenschapsinitiatief om plastic tasjesgebruik in Velp te verminderen. Niet gelieerd aan enige supermarktketen.",
      linksTitle:    "Handige Links",
      campaignTitle: "Campagne",
      dashboard:     "📊 Beheerdashboard",
      replyLink:     "Reactieformulier Supermarkten",
      contact:       "Neem Contact Op",
      credit:        "Gemaakt met 💚 door een bezorgde inwoner van Velp · © 2025",
    },
  },
};

/* ── EMAIL BODY STRINGS per language ── */
const EMAIL_BODY = {
  en: [
    "Dear team,%0D%0A%0D%0A",
    "As a resident of Velp, I would like to kindly ask you to reduce the use of plastic bags in your store.%0D%0A%0D%0A",
    "I would like to ask you to consider the following measures:%0D%0A",
    "- Stop automatically offering plastic bags at the checkout%0D%0A",
    "- Offer reusable or paper alternatives%0D%0A",
    "- Inform your customers about the environmental impact of plastic%0D%0A",
    "- Consider charging a small fee for plastic bags%0D%0A%0D%0A",
    "For questions, please contact us at: velp.plastic.actie@gmail.com%0D%0A%0D%0A",
    "Kind regards,%0D%0A[Your name]%0D%0AResident of Velp"
  ].join(""),
  nl: [
    "Geachte medewerkers,%0D%0A%0D%0A",
    "Als inwoner van Velp wil ik u vriendelijk vragen om het gebruik van plastic tasjes in uw winkel te verminderen.%0D%0A%0D%0A",
    "Wil ik u vragen om de volgende maatregelen te overwegen:%0D%0A",
    "- Stop met het automatisch aanbieden van plastic tasjes bij de kassa%0D%0A",
    "- Bied herbruikbare of papieren alternatieven aan%0D%0A",
    "- Informeer uw klanten over het milieu-effect van plastic%0D%0A",
    "- Overweeg een kleine bijdrage te vragen voor plastic tasjes%0D%0A%0D%0A",
    "Voor vragen kunt u ons bereiken via: velp.plastic.actie@gmail.com%0D%0A%0D%0A",
    "Met vriendelijke groet,%0D%0A[Uw naam]%0D%0AInwoner van Velp"
  ].join(""),
};


/* ============================================================
   2. i18n ENGINE
   ============================================================ */
const I18N_KEY  = "velp_language";
let   currentLang = localStorage.getItem(I18N_KEY) || "en";

/** Resolve a dotted key like "nav.problem" in a translations object */
function resolve(obj, key) {
  return key.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

/** Apply all translations to the DOM */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = resolve(t, el.dataset.i18n);
    if (val !== null) el.textContent = val;
  });

  // innerHTML (for bold/em/br tags)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const val = resolve(t, el.dataset.i18nHtml);
    if (val !== null) el.innerHTML = val;
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const val = resolve(t, el.dataset.i18nPlaceholder);
    if (val !== null) el.placeholder = val;
  });

  // Page title
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) { const v = resolve(t, titleEl.dataset.i18n); if (v) document.title = v; }

  // html[lang] attribute
  document.getElementById("htmlRoot")?.setAttribute("lang", lang);

  // Update the toggle button(s)
  const isNL  = lang === "nl";
  const flag  = isNL ? "🇬🇧" : "🇳🇱";
  const label = isNL ? "EN"   : "NL";
  ["langFlag","langFlagMobile"].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = flag; });
  ["langLabel","langLabelMobile"].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = label; });
}

/** Toggle between EN and NL */
function toggleLanguage() {
  // Brief opacity flash for a smooth feel
  document.body.classList.add("lang-switching");
  setTimeout(() => {
    currentLang = currentLang === "en" ? "nl" : "en";
    localStorage.setItem(I18N_KEY, currentLang);
    applyTranslations(currentLang);
    document.body.classList.remove("lang-switching");
  }, 120);
}


/* ============================================================
   3. EMAIL CONFIG
   ============================================================ */
const EMAIL_CONFIG = {
  replyTo: "velp.plastic.actie@gmail.com",
  to:      "supermarkt@ah.nl,klantenservice@jumbo.com,info@lidl.nl",
  get subject() { return currentLang === "nl"
    ? "Verzoek%3A%20Minder%20Plastic%20Tasjes%20in%20Velp"
    : "Request%3A%20Fewer%20Plastic%20Bags%20in%20Velp"; },
  get body()    { return EMAIL_BODY[currentLang] || EMAIL_BODY.nl; },
};


/* ============================================================
   4. STORAGE KEYS
   ============================================================ */
const KEYS = {
  clicks:       "velp_email_clicks",
  visits:       "velp_visit_log",
  visitorId:    "velp_visitor_id",
  scrollDepth:  "velp_scroll_depth",
  sectionViews: "velp_section_views",
  replies:      "velp_replies",
  sessionStart: "velp_session_start",
};


/* ============================================================
   5. ANALYTICS
   ============================================================ */
const Analytics = {
  init() {
    this.ensureVisitorId();
    this.recordVisit();
    this.trackScrollDepth();
    this.trackTimeOnPage();
    this.trackSectionViews();
  },

  ensureVisitorId() {
    if (!localStorage.getItem(KEYS.visitorId)) {
      localStorage.setItem(KEYS.visitorId,
        "v_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8));
    }
    return localStorage.getItem(KEYS.visitorId);
  },

  recordVisit() {
    const now    = Date.now();
    sessionStorage.setItem(KEYS.sessionStart, now);
    const device = window.innerWidth < 768 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop";
    let referrer = "direct";
    try { if (document.referrer) referrer = new URL(document.referrer).hostname; } catch(e) {}
    const visits = this.getVisits();
    visits.push({ timestamp: now, date: new Date(now).toLocaleDateString("nl-NL"), time: new Date(now).toLocaleTimeString("nl-NL", { hour:"2-digit", minute:"2-digit" }), device, referrer, visitorId: this.ensureVisitorId() });
    try { localStorage.setItem(KEYS.visits, JSON.stringify(visits)); } catch(e) {}
  },

  getVisits() { try { return JSON.parse(localStorage.getItem(KEYS.visits) || "[]"); } catch { return []; } },

  trackScrollDepth() {
    let max = 0;
    const sk = sessionStorage.getItem(KEYS.sessionStart);
    window.addEventListener("scroll", () => {
      const d = Math.round(((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100);
      if (d > max) {
        max = d;
        try {
          const h = JSON.parse(localStorage.getItem(KEYS.scrollDepth) || "[]");
          const i = h.findIndex(e => e.session === sk);
          if (i >= 0) h[i].depth = max; else h.push({ session: sk, depth: max });
          localStorage.setItem(KEYS.scrollDepth, JSON.stringify(h));
        } catch(e) {}
      }
    }, { passive: true });
  },

  trackTimeOnPage() {
    let t = Date.now();
    const save = () => { const e = Math.round((Date.now()-t)/1000); const s = parseInt(localStorage.getItem("velp_time_on_page")||"0",10); try{localStorage.setItem("velp_time_on_page",s+e);}catch(e){} };
    document.addEventListener("visibilitychange", () => { if (document.hidden) save(); else t = Date.now(); });
    window.addEventListener("beforeunload", save);
  },

  trackSectionViews() {
    if (!("IntersectionObserver" in window)) return;
    const ids = ["hero","problem","impact","reusable","supermarkets","action","reply"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          try { const c = JSON.parse(localStorage.getItem(KEYS.sectionViews)||"{}"); c[entry.target.id]=(c[entry.target.id]||0)+1; localStorage.setItem(KEYS.sectionViews,JSON.stringify(c)); } catch(e) {}
        }
      });
    }, { threshold: 0.4 });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
  },
};


/* ============================================================
   6. CLICK COUNTER
   ============================================================ */
/* ── Shared counter via JSONBin ────────────────────────────
   Stores click count in a free JSONBin so all devices share
   the same number. Falls back to localStorage on error.     */

const JSONBIN_ID  = "69bd4f31aa77b81da9018c2b";
const JSONBIN_KEY = "$2a$10$VpL7zU0UMUitubSJC5oW4eaLZYVAq6Jy9Y8lfxE06eIbY/PRQ7ITi";
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_ID}`;

function updateCounterDisplay(val) {
  const el = document.getElementById("counterDisplay");
  if (!el) return;
  el.textContent = Number(val).toLocaleString("nl-NL");
  el.style.transform = "scale(1.3)";
  el.style.transition = "transform 0.2s ease";
  setTimeout(() => { el.style.transform = "scale(1)"; }, 200);
}

async function fetchCount() {
  try {
    const res  = await fetch(`${JSONBIN_URL}/latest`, {
      headers: { "X-Master-Key": JSONBIN_KEY }
    });
    const data = await res.json();
    return data.record?.count ?? 0;
  } catch {
    return parseInt(localStorage.getItem(KEYS.clicks) || "0", 10);
  }
}

async function incrementCount() {
  try {
    // First get current count
    const getRes  = await fetch(`${JSONBIN_URL}/latest`, {
      headers: { "X-Master-Key": JSONBIN_KEY }
    });
    const getData = await getRes.json();
    const newCount = (getData.record?.count ?? 0) + 1;

    // Then write the new count back
    await fetch(JSONBIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": JSONBIN_KEY
      },
      body: JSON.stringify({ count: newCount })
    });

    localStorage.setItem(KEYS.clicks, newCount);
    return newCount;
  } catch {
    const n = parseInt(localStorage.getItem(KEYS.clicks) || "0", 10) + 1;
    localStorage.setItem(KEYS.clicks, n);
    return n;
  }
}


/* ============================================================
   7. SEND EMAIL
   ============================================================ */
async function sendEmail() {
  window.location.href = `mailto:${EMAIL_CONFIG.to}?reply-to=${encodeURIComponent(EMAIL_CONFIG.replyTo)}&subject=${EMAIL_CONFIG.subject}&body=${EMAIL_CONFIG.body}`;
  const newCount = await incrementCount();
  updateCounterDisplay(newCount);
  const btn = document.getElementById("emailBtn");
  if (btn) {
    const orig = btn.textContent;
    btn.textContent    = currentLang === "nl" ? "✓ E-mailprogramma geopend!" : "✓ Email client opened!";
    btn.style.background = "var(--olive-mid)";
    setTimeout(() => { btn.textContent = orig; btn.style.background = ""; }, 3000);
  }
}


/* ============================================================
   8. REPLY FORM
   ============================================================ */
function submitReply(e) {
  e.preventDefault();
  const name    = document.getElementById("replyName")?.value.trim();
  const org     = document.getElementById("replyOrg")?.value.trim();
  const email   = document.getElementById("replyEmail")?.value.trim();
  const message = document.getElementById("replyMessage")?.value.trim();

  const errMsg = resolve(TRANSLATIONS[currentLang], "reply.form.errorRequired") || "Please fill in your name and message.";
  if (!name || !message) {
    const err = document.getElementById("formError");
    if (err) { err.textContent = errMsg; err.style.display = "block"; setTimeout(() => { err.style.display = "none"; }, 4000); }
    return;
  }

  const replies = (() => { try { return JSON.parse(localStorage.getItem(KEYS.replies) || "[]"); } catch { return []; } })();
  replies.push({ id: Date.now(), date: new Date().toLocaleDateString("nl-NL"), time: new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"}), name, org: org||"—", email: email||"—", message, read: false });
  try { localStorage.setItem(KEYS.replies, JSON.stringify(replies)); } catch(e) {}

  const form    = document.getElementById("replyForm");
  const success = document.getElementById("formSuccess");
  if (form)    form.style.display    = "none";
  if (success) success.style.display = "block";
}


/* ============================================================
   9. EMAIL PREVIEW TOGGLE
   ============================================================ */
function toggleEmailPreview(e) {
  e.preventDefault();
  const preview = document.getElementById("fullEmailPreview");
  const toggle  = document.getElementById("previewToggle");
  if (!preview || !toggle) return;
  const shown = preview.style.display !== "none";
  preview.style.display = shown ? "none" : "block";
  const t = TRANSLATIONS[currentLang].action;
  toggle.textContent = shown ? t.emailShowMore : (currentLang === "nl" ? "Verberg e-mail ↑" : "Hide email ↑");
}


/* ============================================================
   10. NAVBAR
   ============================================================ */
function handleNavbarScroll() {
  document.getElementById("navbar")?.classList.toggle("scrolled", window.scrollY > 20);
}
function toggleMobileMenu() { document.getElementById("mobileMenu")?.classList.toggle("open"); }
function closeMobileMenu()  { document.getElementById("mobileMenu")?.classList.remove("open"); }


/* ============================================================
   11. SCROLL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  if (!("IntersectionObserver" in window)) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".slide-up").forEach(el => obs.observe(el));
}


/* ============================================================
   12. STAT COUNTERS
   ============================================================ */
function animateCounter(el, target, dur) {
  const start = performance.now();
  const fmt   = n => target >= 1e9 ? (n/1e9).toFixed(1)+"B" : Math.round(n).toLocaleString("nl-NL");
  const step  = now => { const p = Math.min((now-start)/dur,1); el.textContent = fmt(target*(1-Math.pow(1-p,3))); if (p<1) requestAnimationFrame(step); else el.textContent = fmt(target); };
  requestAnimationFrame(step);
}

function initStatCounters() {
  if (!("IntersectionObserver" in window)) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target, parseInt(e.target.dataset.target,10), 1800); obs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll(".stat-number[data-target]").forEach(el => obs.observe(el));
}


/* ============================================================
   13. SHARE
   ============================================================ */
function shareWhatsApp() {
  const msg = currentLang === "nl"
    ? "🌿 In Velp is er een initiatief om supermarkten te vragen plastic tasjes te verminderen. Doe mee via: "
    : "🌿 There's a community initiative in Velp asking supermarkets to reduce plastic bags. Join via: ";
  window.open("https://wa.me/?text=" + encodeURIComponent(msg + window.location.href), "_blank");
}

function copyLink() {
  const copy = () => { const d = document.createElement("input"); d.value = window.location.href; document.body.appendChild(d); d.select(); document.execCommand("copy"); document.body.removeChild(d); };
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(window.location.href).then(showCopy).catch(copy);
  else { copy(); showCopy(); }
}

function showCopy() {
  const c = document.getElementById("copyConfirm");
  if (!c) return;
  c.style.display = "inline";
  setTimeout(() => { c.style.display = "none"; }, 2500);
}


/* ============================================================
   14. INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved or default language immediately
  applyTranslations(currentLang);

  // Load counter from shared API (falls back to localStorage if unavailable)
  fetchCount().then(updateCounterDisplay);

  // Analytics
  Analytics.init();

  // Navbar
  window.addEventListener("scroll", handleNavbarScroll, { passive: true });
  document.getElementById("hamburger")?.addEventListener("click", toggleMobileMenu);

  // Reply form
  document.getElementById("replyForm")?.addEventListener("submit", submitReply);

  // Animations
  initScrollAnimations();
  initStatCounters();
});
