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


  // Ten multiple-choice questions for structured exit feedback.
  form.addMultipleChoiceItem()
    .setTitle("1. Which FSWD topic did you work on today?")
    .setChoiceValues(["HTML/CSS", "JavaScript or Fetch API", "React.js", "Node.js or Express.js", "MongoDB or MERN integration", "Deployment"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("2. How well did you understand today's learning objective?")
    .setChoiceValues(["I understand it very well", "I understand most of it", "I understand some parts", "I am still confused", "I need the topic explained again"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("3. Which statement best describes what you can do after today's lab?")
    .setChoiceValues(["I can complete a similar task independently", "I can complete it with a little help", "I need step-by-step guidance", "I need the instructor to demonstrate it again"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("4. How confident are you about applying today's concept in a new task?")
    .setChoiceValues(["5 - Very confident", "4 - Confident", "3 - Somewhat confident", "2 - Not very confident", "1 - Not confident yet"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("5. Which activity helped you learn the most?")
    .setChoiceValues(["Live instructor demonstration", "Hands-on coding practice", "Worked example or sample code", "Official documentation or learning resources", "Peer discussion", "AI-assisted explanation or debugging hint"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("6. What do you still need help with?")
    .setChoiceValues(["Understanding the concept", "Writing or structuring code", "Debugging errors", "Testing and validating the output", "Setting up tools or deployment", "Nothing at the moment"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("7. How was the pace of today's lab?")
    .setChoiceValues(["Too fast", "A little fast", "About right", "A little slow", "Too slow"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("8. Which support resource would help you most next?")
    .setChoiceValues(["Step-by-step written notes", "Short video demonstration", "More worked code examples", "Extra practice exercises", "One-to-one doubt-clearing session", "Debugging checklist"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("9. Did you use an AI tool while learning or completing today's lab?")
    .setChoiceValues(["No", "Yes, to explain a concept", "Yes, to get debugging hints", "Yes, to review or improve my code", "Yes, to generate code that I then checked", "Prefer not to say"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("10. What would you like the instructor to do next?")
    .setChoiceValues(["Provide more examples", "Re-teach a difficult concept", "Give another hands-on practice task", "Review common errors and debugging", "Share additional resources", "Continue to the next topic"])
    .setRequired(true);

  const responseSheet = SpreadsheetApp.create("FSWD Lab Exit Ticket Responses");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, responseSheet.getId());

  Logger.log("FORM RESPONDER URL: " + form.getPublishedUrl());
  Logger.log("FORM EDIT URL: " + form.getEditUrl());
  Logger.log("RESPONSE SPREADSHEET URL: " + responseSheet.getUrl());
  Logger.log("Copy the RESPONDER URL into EXIT_TICKET_FORM_URL in script.js, then commit the change.");
  return {responderUrl: form.getPublishedUrl(), editUrl: form.getEditUrl(), responseSheetUrl: responseSheet.getUrl()};
}
