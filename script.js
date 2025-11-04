$(document).ready(function () {
  $("#regForm").on("submit", function (e) {
    e.preventDefault();

    $("#submitBtn").prop("disabled", true).text("Submitting...");

    $.ajax({
      type: "POST",
      url: "process.php",
      data: $(this).serialize(),
      success: function (response) {
        $("#response").html(response).slideDown();
        $("#regForm")[0].reset();
      },
      error: function () {
        $("#response").html("<p style='color:red;'>Error: Could not submit form.</p>").slideDown();
      },
      complete: function () {
        $("#submitBtn").prop("disabled", false).text("Register Now");
      }
    });
  });
});
