const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileElem");
const fileSelect = document.getElementById("fileSelect");

fileSelect.addEventListener("click", () => fileInput.click());


document.querySelectorAll('.breadcrumb-link').forEach(item => {
  item.style.cursor = 'pointer'; 

  item.addEventListener('click', () => {
    const step = item.getAttribute('data-step');
    
    alert(`Navigate to: ${step}`);
  });
});


["dragenter", "dragover"].forEach(eventName => {
  dropArea.addEventListener(eventName, e => {
    e.preventDefault();
    dropArea.classList.add("highlight");
  });
});

["dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, e => {
    e.preventDefault();
    dropArea.classList.remove("highlight");
  });
});

dropArea.addEventListener("drop", e => {
  const files = e.dataTransfer.files;
  handleFiles(files);
});

function handleFiles(files) {
  console.log("Files uploaded:", files);
  // You can preview files or send them to a server here
}
