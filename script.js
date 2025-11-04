$(document).ready(function () {
  $("#regForm").on("submit", function (e) {
    e.preventDefault();

    // Get the email value
    const email = $("input[name='email']").val().trim();

    // Gmail validation regex
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Validate email
    if (!gmailPattern.test(email)) {
      $("#response")
        .html("<p style='color:red;'><strong>Error:</strong> Please enter a valid Gmail address (must end with @gmail.com).</p>")
        .slideDown();
      return; // Stop form submission
    }

    // Disable button during submission
    $("#submitBtn").prop("disabled", true).text("Submitting...");

    // AJAX submission
    $.ajax({
      type: "POST",
      url: "process.php",
      data: $(this).serialize(),
      success: function (response) {
        $("#response").html(response).slideDown();
        $("#regForm")[0].reset();
      },
      error: function () {
        $("#response")
          .html("<p style='color:red;'>Error: Could not submit form.</p>")
          .slideDown();
      },
      complete: function () {
        $("#submitBtn").prop("disabled", false).text("Register Now");
      },
    });
  });
});
