const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", function() {
  // Toggle the class on the body
  body.classList.toggle("dark");
  body.classList.toggle("light");

  // Change button text depending on mode
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
