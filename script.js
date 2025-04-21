$(document).ready(function () {
  $("#myForm").submit(function (event) {
    event.preventDefault();

    $("#errorMessages").html("");
    $("#successMessage").html("");

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let password = $("#password").val();
    let confirmPassword = $("#confirmPassword").val();

    let errors = [];

    if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
      errors.push("Please enter a valid name (letters only).");
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.push("Please enter a valid email.");
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
      errors.push("Please enter a 10-digit phone number.");
    }

    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.push("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
    }

    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
      let errorHtml = "<ul>";
      errors.forEach(function (error) {
        errorHtml += "<li>" + error + "</li>";
      });
      errorHtml += "</ul>";
      $("#errorMessages").html(errorHtml);
    } else {
      $("#successMessage").html("Form submitted successfully!");
      $("#myForm")[0].reset();
    }
  });
});