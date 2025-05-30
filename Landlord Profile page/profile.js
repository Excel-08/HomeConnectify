// Get DOM elements
const uploadBtn = document.querySelector(".button1");
const deleteBtn = document.querySelector(".button2");
const fileInput = document.createElement("input");
const profileImage = document.querySelector(".pimg");

// Configure file input (hidden by default)
fileInput.type = "file";
fileInput.accept = "image/*";
fileInput.style.display = "none";
document.body.appendChild(fileInput);

// Handle upload button click
uploadBtn.addEventListener("click", function () {
  uploadBtn.classList.add("active-upload");
  fileInput.click();
});

// When file is selected
fileInput.addEventListener("change", function () {
  uploadBtn.classList.remove("active-upload");
  const file = this.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please upload a valid image file.");
  }
});

// ✅ Handle delete button click
deleteBtn.addEventListener("click", function () {
  profileImage.src = "images/profile.svg"; // Reset to default
});
const rentBtn = document.getElementById('rentBtn');
const saleBtn = document.getElementById('saleBtn');

rentBtn.addEventListener('click', () => {
  rentBtn.classList.add('active');
  saleBtn.classList.remove('active');
});

saleBtn.addEventListener('click', () => {
  saleBtn.classList.add('active');
  rentBtn.classList.remove('active');
});
document.querySelector(".form1").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload
    alert("Form submitted successfully!");
    // Here, you can collect form data or perform other actions
});

document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("document");
  const fileInput = document.getElementById("actualFile");

  // When text input is clicked, open file picker
  textInput.addEventListener("click", function () {
    fileInput.click();
  });

  // When file is selected, update text input value
  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      textInput.value = fileInput.files[0].name;
    }
  });
});

document.querySelector('.submit-button').addEventListener('click', function() {
  // Redirect to the homepage
  window.location.href = '../homepage/index.html';
})
