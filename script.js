const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle?.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

const search = document.querySelector("#experimentSearch");
search?.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  document.querySelectorAll(".experiment").forEach(card => {
    card.hidden = !(`${card.dataset.search} ${card.textContent}`.toLowerCase().includes(q));
  });
});

const simFeedback = document.querySelector("#simFeedback");
document.querySelectorAll(".sim-option").forEach(button => {
  button.addEventListener("click", () => {
    const correct = button.dataset.answer === "a";
    simFeedback.textContent = correct
      ? "Correct. Handle rejected requests, check response.ok, update an error state and reset loading in finally. If this code is in React, also review effect dependencies and cleanup."
      : "Not quite. A visual change or removing state does not resolve the asynchronous failure. The loading state must be reset on both success and failure.";
    simFeedback.style.borderLeft = correct ? "4px solid #14a891" : "4px solid #c77d19";
  });
});
document.querySelector("#nextScenario")?.addEventListener("click", () => {
  document.querySelector(".sim-question h3").textContent = "Your Express route returns a 500 error after deployment.";
  document.querySelector(".sim-question p").textContent = "The route works locally but the deployed app cannot connect to the database. Consider configuration, network access and secrets.";
  document.querySelector(".sim-question pre code").textContent = "mongoose.connect(process.env.MONGODB_URI)";
  document.querySelectorAll(".sim-option")[0].textContent = "A. Check deployment environment variables, Atlas network access, credentials and server logs.";
  document.querySelectorAll(".sim-option")[1].textContent = "B. Put the database password directly in the public frontend.";
  document.querySelectorAll(".sim-option")[2].textContent = "C. Disable all error handling.";
  document.querySelectorAll(".sim-option")[0].dataset.answer = "a";
  document.querySelectorAll(".sim-option")[1].dataset.answer = "b";
  document.querySelectorAll(".sim-option")[2].dataset.answer = "c";
  simFeedback.textContent = "New scenario loaded. Select a diagnosis.";
  simFeedback.style.borderLeft = "0";
});
document.querySelector("#checkQuiz")?.addEventListener("click", () => {
  const answer = document.querySelector("#quizAnswer").value;
  const feedback = document.querySelector("#quizFeedback");
  feedback.textContent = answer === "mongo" ? "Correct — MongoDB stores BSON documents in collections." : answer ? "Try again. Think of the database layer in the MERN stack." : "Choose an answer first.";
});

/* Course management FAQ prototype — fixed approved responses; no external AI calls. */
const agentResponses = {
  setup: 'Start with the experiment objective and expected output. Build the smallest working version, test it, record observations, and commit your own work. Follow your instructor lab sheet if it provides different instructions.',
  react: 'Use the official React learning resource: https://react.dev/learn. Focus on components, props, state and effects, then apply them to the React lab experiment.',
  api: 'Inspect the browser Network panel and console. Check the request URL, HTTP status, response.ok, JSON parsing and error handling. For deployed apps, check environment variables and server logs without exposing credentials.',
  deadline: 'Use the instructor-approved course calendar or LMS as the source of truth. This demo does not store assignment dates or send reminders; an approved calendar or LMS integration is needed.',
  ai: 'Use AI only within your instructor and institutional policy. Disclose assistance, verify every suggestion, understand and test submitted code, and do not submit generated work as independent work when that violates the rules.',
  other: 'This prototype answers predefined FAQs only. Contact the course coordinator for questions not covered here. Production deployment should provide authenticated human escalation.'
};
document.querySelector('#agentForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const key = document.querySelector('#agentQuestion')?.value;
  const response = document.querySelector('#agentResponse');
  if (response) response.textContent = agentResponses[key] || 'Select a question first.';
});


/* User-owned AI evidence panel. This code does not fabricate a response or call an AI API. */
const EXIT_TICKET_FORM_URL = ""; // Paste the actual full responder URL here after creating the form.
const promptBox = document.querySelector("#courseAiPrompt");
const responseBox = document.querySelector("#courseAiResponse");
const aiEvidenceStatus = document.querySelector("#aiEvidenceStatus");

document.querySelector("#copyAiPrompt")?.addEventListener("click", async () => {
  if (!promptBox) return;
  try {
    await navigator.clipboard.writeText(promptBox.value);
    if (aiEvidenceStatus) aiEvidenceStatus.textContent = "Prompt copied. Open the AI tool, submit it, and paste its genuine response below.";
  } catch (error) {
    promptBox.focus(); promptBox.select();
    const copied = document.execCommand("copy");
    if (aiEvidenceStatus) aiEvidenceStatus.textContent = copied ? "Prompt copied. Open the AI tool and paste its genuine response below." : "Clipboard access was blocked. Select the prompt text and copy it manually.";
  }
});

document.querySelector("#downloadAiEvidence")?.addEventListener("click", () => {
  const prompt = promptBox?.value.trim() || "";
  const response = responseBox?.value.trim() || "";
  if (!response) {
    if (aiEvidenceStatus) aiEvidenceStatus.textContent = "Paste the actual AI response first. This project does not create a response for evidence.";
    responseBox?.focus(); return;
  }
  const evidence = [
    "FSWD FDP CAPSTONE — AI USE EVIDENCE",
    "Project: An AI-Enabled Framework for Outcome-Based Smart Course Design, Automated CO-PO Mapping & Adaptive Content Generation",
    "Course: U23CS7L1 Full Stack Web Development Lab, Academic Year 2026–27",
    "", "PROMPT USED", prompt, "", "ACTUAL RESPONSE COPIED FROM THE AI TOOL", response, "",
    "Attach genuine screenshots from the AI tool showing the original prompt and response."
  ].join("\n");
  const blob = new Blob([evidence], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const download = document.createElement("a"); download.href = url; download.download = "FSWD_AI_Prompt_Response_Evidence.txt";
  document.body.appendChild(download); download.click(); download.remove(); URL.revokeObjectURL(url);
  if (aiEvidenceStatus) aiEvidenceStatus.textContent = "Evidence transcript downloaded. Save genuine screenshots from the AI tool separately.";
});

const exitTicketLink = document.querySelector("#exitTicketLink");
const exitTicketStatus = document.querySelector("#exitTicketStatus");
const exitTicketEmbedWrap = document.querySelector("#exitTicketEmbedWrap");
const exitTicketEmbed = document.querySelector("#exitTicketEmbed");
if (EXIT_TICKET_FORM_URL.trim()) {
  exitTicketLink.href = EXIT_TICKET_FORM_URL;
  exitTicketLink.textContent = "Open FSWD Lab exit ticket ↗";
  if (exitTicketStatus) exitTicketStatus.textContent = "The course feedback form is linked. Students can submit responses using this form.";
  if (exitTicketEmbed && exitTicketEmbedWrap) {
    try {
      const embedUrl = new URL(EXIT_TICKET_FORM_URL);
      embedUrl.searchParams.set("embedded", "true");
      exitTicketEmbed.src = embedUrl.toString(); exitTicketEmbedWrap.hidden = false;
    } catch (error) {
      if (exitTicketStatus) exitTicketStatus.textContent = "The form link is configured, but its URL could not be embedded. The button above still links to the form; check the responder URL.";
    }
  }
} else {
  exitTicketLink.href = "https://forms.google.com/";
  exitTicketLink.textContent = "Create or open Google Form ↗";
}
