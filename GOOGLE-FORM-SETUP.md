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

## Questions created
- **Our lesson today was:** fun, confusing, exciting, interesting (checkboxes).
- **How do you feel about what you learned today?** required 1–5 scale labelled “I don't get it” to “I got it! I could teach a friend!”
- **What did you understand from today's FSWD lab?** required paragraph.
- **What remains unclear or confusing?** optional paragraph.
- **How confident are you that you can complete a similar lab task independently?** required 1–5 scale.
- **Questions, feedback or a lab milestone? (optional)** paragraph.

No name or email field is created by default. Check institutional privacy requirements before collecting student information.

## Capture genuine evidence
After creation, capture screenshots of the actual form edit view and respondent view. Submit a clearly labelled test response and capture the response spreadsheet showing that it arrived. Remove identifying information before placing evidence in a public portfolio. Do not use mock-ups as proof of form creation.

## Responsible AI evidence
In the website's Responsible AI panel, copy the course-planning prompt and open ChatGPT (or the AI tool you actually used). Run the prompt, paste the actual response into the panel, and download the transcript. Capture genuine screenshots from the AI tool showing the prompt and response. The website does not fake AI responses.
