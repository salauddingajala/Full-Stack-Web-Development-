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
