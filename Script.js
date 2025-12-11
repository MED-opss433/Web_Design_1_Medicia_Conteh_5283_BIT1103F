// ===============================
// MOBILE NAVIGATION TOGGLE
// ===============================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// ===============================
// OPTIONAL: FORM VALIDATION (Contact Page)
// ===============================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const message = contactForm.querySelector('textarea[name="message"]');

        let errors = [];

        if (!name.value.trim()) {
            errors.push("Name is required.");
        }

        if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
            errors.push("A valid email is required.");
        }

        if (!message.value.trim()) {
            errors.push("Message cannot be empty.");
        }

        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });
}

function sendWhatsAppMessage() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const phoneNumber = "23277442602"; // Your WhatsApp number (no + sign)

    const text = `New message from your website:
Name: ${name}
Email: ${email}
Message: ${message}`;

    const url = `https://wa.me/${23277492602}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}
