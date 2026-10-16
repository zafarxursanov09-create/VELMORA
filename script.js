const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("navMenu");
const appOrigin = document.querySelector('meta[name="velmora-app-origin"]')?.content;
const year = document.getElementById("year");
const localeButtons = document.querySelectorAll("[data-locale]");
const englishCopy = {
  "nav.ielts": "IELTS", "nav.cefr": "CEFR", "nav.features": "Features", "nav.teachers": "Tutors", "nav.classes": "Live classes", "nav.help": "24/7 support", "nav.login": "Log in", "nav.start": "Get started",
  "hero.eyebrow": "IELTS + CEFR · LEARNING PLATFORM", "hero.title": "Your next <span class=\"gradient-text\">English level</span> starts here.",
  "hero.description": "Prepare for IELTS and CEFR with focused lessons, mini practice and a learning path tailored to your goal.", "hero.start": "Start learning for free", "hero.explore": "Explore learning paths",
  "hero.proofLevels": " CEFR levels", "hero.proofSkills": " core skills", "hero.proofGoal": " clear learning goal",
  "preview.kicker": "STUDENT DASHBOARD · PREVIEW", "preview.title": "Your learning path", "preview.target": "IELTS target", "preview.current": "Current CEFR level", "preview.next": "Next: C1", "preview.step": "One step at a time",
  "trust.label": "OFFICIAL IELTS INFORMATION", "trust.examInfo": "Exam information", "trust.ieltsInfo": "IELTS information", "trust.note": "Independent study platform. No official partnership is implied.",
  "learning.kicker": "PREPARE WITH PURPOSE", "learning.title": "Focus on every skill, separately.", "learning.description": "IELTS lessons and practice, plus level-based English resources for CEFR.",
  "cards.readingLabel": "READING PRACTICE", "cards.readingText": "Understand passages, identify main ideas and practise question types.", "cards.lessons": "Explore lessons",
  "cards.listeningLabel": "LISTENING PRACTICE", "cards.listeningText": "Build focus and comprehension with listening materials.",
  "cards.writingLabel": "WRITTEN ENGLISH", "cards.writingText": "Write Task 1 and Task 2 essays and review them with a checklist.", "cards.writingLink": "Open writing practice",
  "cards.speakingLabel": "SPOKEN ENGLISH", "cards.speakingText": "Explore topics, useful phrases and speaking lessons.",
  "cards.vocabLabel": "WORD POWER", "cards.vocabText": "Learn useful words with translations and examples.", "cards.vocabLink": "Explore vocabulary",
  "cards.grammarLabel": "LANGUAGE FOUNDATIONS", "cards.grammarText": "Strengthen your grammar step by step.",
  "cards.practiceLabel": "TIMED PRACTICE", "cards.practiceTitle": "Reading practice", "cards.practiceText": "A timed mini test with question navigation and answer explanations.", "cards.practiceLink": "Start the mini test",
  "cards.assessmentLabel": "LEVEL CHECK", "cards.assessmentTitle": "CEFR placement", "cards.assessmentText": "Get an estimated level with a short diagnostic check.", "cards.assessmentLink": "Start the check",
  "cefr.kicker": "FROM A1 TO C2", "cefr.title": "A learning path for your English level.", "cefr.description": "Vocabulary, grammar, reading, listening, speaking and writing resources at every stage.", "cefr.link": "Take the short CEFR check",
  "cefr.a1": "Beginner", "cefr.a1Text": "Understand simple everyday phrases.", "cefr.a2": "Elementary", "cefr.a2Text": "Communicate about familiar topics.", "cefr.b1": "Intermediate", "cefr.b1Text": "Express ideas in familiar situations.", "cefr.b2": "Upper intermediate", "cefr.b2Text": "Understand complex texts and communicate fluently.", "cefr.c1": "Advanced", "cefr.c1Text": "Use English flexibly and precisely.", "cefr.c2": "Proficient", "cefr.c2Text": "Understand almost everything with ease.",
  "features.kicker": "THE VELMORA EXPERIENCE", "features.title": "Make your learning more organised.", "features.description": "Find resources based on your track, target level and available daily study time.",
  "features.goalTitle": "A personal learning goal", "features.goalText": "Set your IELTS band or CEFR level target.", "features.cabinetTitle": "One learning dashboard", "features.cabinetText": "Browse lessons and vocabulary for your learning track.", "features.resultsTitle": "A history of practice", "features.resultsText": "Sign in to keep your mini-test results with your account.",
  "teachers.kicker": "TUTORS AND SUPPORT", "teachers.title": "Need a hand with your learning?", "teachers.description": "Contact the help centre if you have a question about tutors, lessons or the platform.", "teachers.link": "Visit the help centre",
  "faq.kicker": "ANSWERS TO YOUR QUESTIONS", "faq.title": "Frequently asked questions.", "faq.q1": "Are IELTS and CEFR resources the same?", "faq.a1": "No. You will see resources for the track you select during registration.", "faq.q2": "Does the CEFR check award a certificate?", "faq.a2": "No. It is a short diagnostic and does not replace an official exam or certificate.", "faq.q3": "Is the Writing feedback AI-powered?", "faq.a3": "The current page provides a checklist for length, paragraphs and repetition; it does not provide an official band score or AI assessment.", "faq.q4": "Are my test results saved?", "faq.a4": "When signed in, mini-test results are saved to your profile. The Firebase rules must be published to your project.",
  "cta.kicker": "TAKE YOUR FIRST STEP", "cta.title": "Start working towards your goal.", "cta.description": "Create an account, choose a learning track and start with relevant lessons.", "cta.button": "Create a free account",
  "footer.tagline": "Clear steps towards your IELTS and CEFR goals.", "footer.help": "Support", "footer.register": "Create account", "footer.platform": "IELTS and CEFR learning platform", "support.label": "24/7 support",
  "assistant.title": "VELMORA assistant", "assistant.status": "24/7 · here to help", "assistant.welcome": "Hi! Ask me about IELTS, CEFR or the platform.", "assistant.quick1": "About the CEFR check", "assistant.quick2": "Reset my password", "assistant.quick3": "Live classes", "assistant.placeholder": "Type your question...", "assistant.safe": "Do not share passwords or payment details.", "assistant.human": "Help centre ↗", "assistant.open": "Open 24/7 support chat", "assistant.close": "Close support chat",
};

function setLocalizedText(element, value, locale) {
  if (locale === "en") {
    if (element.dataset.i18n === "hero.title") {
      element.innerHTML = value;
      return;
    }
    const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (textNode) textNode.textContent = value;
    else element.textContent = value;
    return;
  }

  if (element.dataset.i18n === "hero.title") {
    element.innerHTML = "Ingliz tilidagi keyingi <span class=\"gradient-text\">bosqichingiz</span> shu yerdan.";
    return;
  }
  const original = element.dataset.originalText;
  if (original !== undefined) {
    const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (textNode) textNode.textContent = original;
    else element.textContent = original;
  }
}

function setLocale(locale) {
  const selectedLocale = locale === "en" ? "en" : "uz";
  document.documentElement.lang = selectedLocale;
  document.title = selectedLocale === "en" ? "VELMORA | IELTS and CEFR Learning Platform" : "VELMORA | IELTS va CEFR platformasi";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (element.dataset.originalText === undefined && textNode) element.dataset.originalText = textNode.textContent;
    setLocalizedText(element, englishCopy[element.dataset.i18n], selectedLocale);
  });
  localeButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.locale === selectedLocale)));
  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.setAttribute("aria-label", selectedLocale === "en" ? `Switch language to ${button.dataset.locale.toUpperCase()}` : `Tilni ${button.dataset.locale.toUpperCase()} ga o‘zgartirish`);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (element.dataset.originalPlaceholder === undefined) element.dataset.originalPlaceholder = element.placeholder;
    element.placeholder = selectedLocale === "en" ? englishCopy[key] || element.dataset.originalPlaceholder : element.dataset.originalPlaceholder;
  });
  if (navToggle) navToggle.setAttribute("aria-label", navToggle.getAttribute("aria-expanded") === "true" ? (selectedLocale === "en" ? "Close menu" : "Menyuni yopish") : (selectedLocale === "en" ? "Open menu" : "Menyuni ochish"));
  const supportLink = document.querySelector(".support-fab");
  if (supportLink) supportLink.setAttribute("aria-label", selectedLocale === "en" ? englishCopy["assistant.open"] : "24/7 yordam chatini ochish");
  const assistantCloseButton = document.getElementById("assistantClose");
  if (assistantCloseButton) assistantCloseButton.setAttribute("aria-label", selectedLocale === "en" ? englishCopy["assistant.close"] : "Yordamchini yopish");
  try { localStorage.setItem("velmora-locale", selectedLocale); } catch {}
}

if (year) year.textContent = new Date().getFullYear();

localeButtons.forEach((button) => button.addEventListener("click", () => setLocale(button.dataset.locale)));
let savedLocale = "uz";
try { savedLocale = localStorage.getItem("velmora-locale") || "uz"; } catch {}
setLocale(savedLocale);

if (appOrigin) {
  document.querySelectorAll("[data-app-path]").forEach((link) => {
    link.href = new URL(link.dataset.appPath, appOrigin).href;
  });
}

if (navToggle && navMenu) {
  const setMenuOpen = (isOpen) => {
    navMenu.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Menyuni yopish" : "Menyuni ochish");
  };

  navToggle.addEventListener("click", () => {
    setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });

  navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) setMenuOpen(false);
  });
}

const assistantToggle = document.getElementById("assistantToggle");
const assistantPanel = document.getElementById("staticAssistantPanel");
const assistantClose = document.getElementById("assistantClose");
const assistantForm = document.getElementById("assistantForm");
const assistantInput = document.getElementById("assistantInput");
const assistantMessages = document.getElementById("assistantMessages");

function setAssistantOpen(isOpen) {
  if (!assistantPanel || !assistantToggle) return;
  assistantPanel.hidden = !isOpen;
  assistantToggle.setAttribute("aria-expanded", String(isOpen));
  assistantToggle.setAttribute("aria-label", isOpen ? "Yordamchini yopish" : (document.documentElement.lang === "en" ? englishCopy["assistant.open"] : "24/7 yordam chatini ochish"));
  if (isOpen) assistantInput?.focus();
}

function appendAssistantMessage(role, text, mode) {
  if (!assistantMessages) return;
  const article = document.createElement("article");
  article.className = `static-assistant-message ${role}`;
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  article.append(paragraph);
  if (mode === "faq") {
    const note = document.createElement("small");
    note.textContent = document.documentElement.lang === "en" ? "Quick answer" : "Tezkor javob";
    article.append(note);
  }
  assistantMessages.append(article);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

async function askAssistant(message) {
  const text = message.trim();
  if (!text || !assistantMessages || !assistantInput) return;
  appendAssistantMessage("user", text);
  assistantInput.value = "";
  const pending = document.createElement("p");
  pending.className = "assistant-pending";
  pending.textContent = document.documentElement.lang === "en" ? "Preparing a reply…" : "Javob tayyorlanmoqda…";
  assistantMessages.append(pending);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
  const sendButton = assistantForm?.querySelector("button[type='submit']");
  if (sendButton) sendButton.disabled = true;
  try {
    const response = await fetch(new URL("/api/assistant", appOrigin), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Yordamchi javob bera olmadi.");
    pending.remove();
    appendAssistantMessage("assistant", payload.reply, payload.mode);
  } catch {
    pending.remove();
    appendAssistantMessage("assistant", document.documentElement.lang === "en" ? "Support could not connect. Please try again or open the help centre." : "Yordamchi bilan ulanib bo‘lmadi. Qayta urinib ko‘ring yoki yordam markaziga yozing.");
  } finally {
    if (sendButton) sendButton.disabled = false;
    assistantInput.focus();
  }
}

assistantToggle?.addEventListener("click", () => setAssistantOpen(assistantToggle.getAttribute("aria-expanded") !== "true"));
assistantClose?.addEventListener("click", () => setAssistantOpen(false));
assistantForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  askAssistant(assistantInput.value);
});
assistantMessages?.querySelectorAll("[data-assistant-prompt]").forEach((button) => button.addEventListener("click", () => askAssistant(button.textContent)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && assistantPanel && !assistantPanel.hidden) setAssistantOpen(false);
});
