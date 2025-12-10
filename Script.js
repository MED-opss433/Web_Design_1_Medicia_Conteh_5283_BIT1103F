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

// script.js - Updated for Football Agency Sierra Leone

// ===== Mobile Navigation Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// ===== Form Validation =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    let valid = true;
    let errorMsg = "";

    if (!name.value.trim()) {
      valid = false;
      errorMsg += "Name is required.\n";
    }

    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
      valid = false;
      errorMsg += "Valid email is required.\n";
    }

    if (!message.value.trim()) {
      valid = false;
      errorMsg += "Message cannot be empty.\n";
    }

    if (!valid) {
      e.preventDefault();
      alert(errorMsg);
    }
  });
}

// ===== Video Placeholder (Optional Enhancement) =====
// If you want to replace placeholders with real videos later,
// this script can handle play buttons or embedded video toggles.
const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert("This is a placeholder. Replace with a real <video> or <iframe> embed.");
  });
});
