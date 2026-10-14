/**
 * FSWD Lab Exit Ticket & Feedback form.
 * Run createFswExitTicketForm() once from script.google.com.
 * Creates a Google Form and linked response spreadsheet in your account.
 * Does not collect names or email addresses by default.
 */
function createFswExitTicketForm() {
  const form = FormApp.create("FSWD Lab Exit Ticket & Feedback");
  form.setDescription(
    "Course: Full Stack Web Development Lab (U23CS7L1), Academic Year 2026–27. " +
    "Share what you understood, what remains unclear, and how confident you feel. " +
    "Responses help the instructor improve lab teaching. Do not include passwords or sensitive personal information."
  );
  form.setConfirmationMessage("Thank you. Your feedback has been recorded and will help improve the FSWD lab.");
  form.setCollectEmail(false);

  form.addCheckboxItem()
    .setTitle("Our lesson today was:")
    .setChoiceValues(["fun", "confusing", "exciting", "interesting"])
    .setRequired(false);

  form.addScaleItem()
    .setTitle("How do you feel about what you learned today?")
    .setHelpText("Choose 1 if you don't get it yet and 5 if you could teach a friend.")
    .setBounds(1, 5)
    .setLabels("I don't get it", "I got it! I could teach a friend!")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("What did you understand from today's FSWD lab?")
    .setHelpText("Mention a concept, technique, error or task you can now explain or perform.")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("What remains unclear or confusing?")
    .setHelpText("Describe the concept, code, tool or instruction where you need more support.")
    .setRequired(false);

  form.addScaleItem()
    .setTitle("How confident are you that you can complete a similar lab task independently?")
    .setBounds(1, 5)
    .setLabels("Not confident yet", "Very confident")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Questions, feedback or a lab milestone? (optional)")
    .setHelpText("Share a question, feedback for the instructor or a milestone you completed.")
    .setRequired(false);

  const responseSheet = SpreadsheetApp.create("FSWD Lab Exit Ticket Responses");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responseSheet.getId());

  Logger.log("FORM RESPONDER URL: " + form.getPublishedUrl());
  Logger.log("FORM EDIT URL: " + form.getEditUrl());
  Logger.log("RESPONSE SPREADSHEET URL: " + responseSheet.getUrl());
  Logger.log("Copy the RESPONDER URL into EXIT_TICKET_FORM_URL in script.js, then commit the change.");
  return {responderUrl: form.getPublishedUrl(), editUrl: form.getEditUrl(), responseSheetUrl: responseSheet.getUrl()};
}
