# Google Form Exit Ticket Setup — FSWD Lab

This Apps Script creates the actual form and linked response spreadsheet inside the course coordinator's Google account.

## Create the form
1. Open https://script.google.com/ and sign in to the account that should own the form.
2. Click **New project**.
3. Copy the complete code from [CreateFswExitTicketForm.gs](https://github.com/salauddingajala/Full-Stack-Web-Development-/blob/main/google-apps-script/CreateFswExitTicketForm.gs) into the Apps Script editor and save.
4. Select `createFswExitTicketForm` from the function dropdown and click **Run**.
5. Review and approve the Google permissions. The script creates a form and linked response spreadsheet.
6. Open the **Execution log** and copy **FORM RESPONDER URL**. Keep **FORM EDIT URL** private for the coordinator; use the response spreadsheet URL to review submissions.
7. Open the respondent link in another account or private window to verify access. Adjust Google Forms sharing/publishing settings if prompted.

## Map it to the website
1. Open [script.js](https://github.com/salauddingajala/Full-Stack-Web-Development-/blob/main/script.js).
2. Replace `const EXIT_TICKET_FORM_URL = "";` with the actual full respondent URL from the log. Example format only: `const EXIT_TICKET_FORM_URL = "https://docs.google.com/forms/d/e/ACTUAL_FORM_ID/viewform";`. Paste your actual link, not the example ID.
3. Commit the change to `main`. The contact section will link to the actual form and display an embedded form after GitHub Pages republishes.

## Ten multiple-choice feedback questions

The form generator creates these ten required multiple-choice items:

1. **Which FSWD topic did you work on today?** HTML/CSS; JavaScript or Fetch API; React.js; Node.js or Express.js; MongoDB or MERN integration; Deployment.
2. **How well did you understand today's learning objective?** Very well; most of it; some parts; still confused; explain again.
3. **Which statement best describes what you can do after today's lab?** Independently; with a little help; step-by-step guidance; instructor demonstration needed.
4. **How confident are you about applying today's concept in a new task?** Rating from 1 (not confident yet) to 5 (very confident).
5. **Which activity helped you learn the most?** Instructor demonstration; hands-on practice; worked example; official resources; peer discussion; AI-assisted hint.
6. **What do you still need help with?** Concept; code structure; debugging; testing; tools/deployment; nothing at present.
7. **How was the pace of today's lab?** Too fast; a little fast; about right; a little slow; too slow.
8. **Which support resource would help you most next?** Written notes; video; code examples; extra practice; doubt-clearing session; debugging checklist.
9. **Did you use an AI tool while learning or completing today's lab?** No; concept explanation; debugging hints; code review; code generation followed by checking; prefer not to say.
10. **What would you like the instructor to do next?** More examples; re-teach a difficult concept; more practice; common errors/debugging review; additional resources; next topic.

The form also keeps the lesson-mood checkbox, understanding and unclear-topic text responses, confidence scale, and the optional “Questions, feedback or a lab milestone?” field.

## Capture genuine evidence
After creation, capture screenshots of the actual form edit view and respondent view. Submit a clearly labelled test response and capture the response spreadsheet showing that it arrived. Remove identifying information before placing evidence in a public portfolio. Do not use mock-ups as proof of form creation.

## Responsible AI evidence
In the website's Responsible AI panel, copy the course-planning prompt and open ChatGPT (or the AI tool you actually used). Run the prompt, paste the actual response into the panel, and download the transcript. Capture genuine screenshots from the AI tool showing the prompt and response. The website does not fake AI responses.
