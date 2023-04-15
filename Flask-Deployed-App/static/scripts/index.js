// adding the chosen file name
const actualBtn = document.getElementById("actual-btn");
const fileChosen = document.getElementById("file-chosen");
actualBtn.addEventListener("change", function () {
  fileChosen.textContent = this.files[0].name;
});

// disabling the submit button if ther is no input
// Get file input element and button element
const fileInput = document.getElementById("actual-btn");
const uploadBtn = document.getElementById("uploadBtn");
// Add event listener to file input element
fileInput.addEventListener("change", (event) => {
  // Check if a file is selected
  if (event.target.files.length > 0) {
    // Enable the upload button
    uploadBtn.removeAttribute("disabled");
  } else {
    // Disable the upload button
    uploadBtn.setAttribute("disabled", true);
  }
});
