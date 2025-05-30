// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".sign-up");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", function (e) {
    if (passwordInput.value !== confirmPasswordInput.value) {
      e.preventDefault(); // Stop form from submitting
      errorMessage.textContent = "Passwords do not match.";
    } else {
      errorMessage.textContent = ""; // Clear error message
    }
  });
});

document.querySelector('.signup-btn').addEventListener('click', function() {
  window.location.href = '../Login Page/profilecreation.html';
});
