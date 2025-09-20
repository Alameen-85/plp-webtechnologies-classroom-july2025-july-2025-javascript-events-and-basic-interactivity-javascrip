alert("JS file is working! 🚀");
// ========================
// Part 1: Event Handling
// ========================
const toggleMessageBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleMessageBtn.addEventListener("click", () => {
    message.classList.toggle("hidden"); // Show/hide message
});

// ========================
// Part 2: Interactive Features
// ========================

// 1. Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
});

// ========================
// Part 3: Form Validation
// ========================
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual submission

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("formSuccess").textContent = "";

    // Validate name
    const name = document.getElementById("name").value.trim();
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Validate email with regex
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Validate password (min 6 chars, one number)
    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters and contain a number.";
        isValid = false;
    }

    // Success Message
    if (isValid) {
        document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
        form.reset();
    }
});
