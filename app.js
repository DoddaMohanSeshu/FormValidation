const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Validation functions using arrow functions
const validateName = () => {
    if (nameInput.value === "") {
        nameError.textContent = "Please enter your name.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
};

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
};

const validatePassword = () => {
    if (passwordInput.value === "") {
        passwordError.textContent = "Please enter your password.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
};

const validateConfirmPassword = () => {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordError.textContent = "";
        return true;
    }
};

// Event listener for form submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword()) {
        // Form is valid, submit it or perform other actions
        console.log("Form submitted successfully!");
    }
});