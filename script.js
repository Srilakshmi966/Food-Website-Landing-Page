// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Background color changer for the landing page
const changeBackgroundButton = document.getElementById("change-background-btn");
if (changeBackgroundButton) {
    changeBackgroundButton.addEventListener("click", () => {
        const body = document.body;
        const colors = ["#F0F0F0", "#FFEBEE", "#FFE0B2", "#C8E6C9", "#BBDEFB"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        body.style.backgroundColor = randomColor;
    });
}

// Form validation for sign up and sign in
const validateForm = (form) => {
    const email = form.querySelector("input[type='email']");
    const password = form.querySelector("input[type='password']");
    let valid = true;

    // Validate email format
    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    // Validate password length
    if (password.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        valid = false;
    }

    return valid;
};

// Add event listener to the Sign In and Sign Up forms
const signinForm = document.querySelector("form[action='signin_action.php']");
const signupForm = document.querySelector("form[action='signup_action.php']");

if (signinForm) {
    signinForm.addEventListener("submit", function (e) {
        if (!validateForm(this)) {
            e.preventDefault();
        }
    });
}

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        if (!validateForm(this)) {
            e.preventDefault();
        }
    });
}

// Handle Contact Form Submission (Demo purposes)
const contactForm = document.querySelector("form[action='submit_form.php']");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = this.querySelector("#name").value;
        const email = this.querySelector("#email").value;
        const message = this.querySelector("#message").value;

        // Simulate form submission (You can replace this with actual AJAX call)
        alert(`Message sent! \nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    });
}
