// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav ul");
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "☰ Menu";
  toggleBtn.classList.add("nav-toggle");

  // Insert toggle button before nav
  nav.parentNode.insertBefore(toggleBtn, nav);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before sending.");
        e.preventDefault();
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }
    });
  }
});
