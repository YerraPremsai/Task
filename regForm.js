function clearForm() {
    document.getElementById("registrationForm").reset();
    document.querySelectorAll(".error").forEach(el => el.innerHTML = "");
}

document.getElementById("toggleTerms").addEventListener("click", function(e) {
    e.preventDefault();
    const moreTerms = document.getElementById("moreTerms");
    const partialTerms = document.getElementById("partialTerms");
    if (moreTerms.style.display === "none") {
        moreTerms.style.display = "inline";
        partialTerms.style.display = "none";
        this.innerText = "Show less";
    } else {
        moreTerms.style.display = "none";
        partialTerms.style.display = "inline";
        this.innerText = "Read more";
    }
});

document.getElementById("firstName").addEventListener("blur", validateFirstName);
document.getElementById("lastName").addEventListener("blur", validateLastName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("contactNumber").addEventListener("blur", validateContactNumber);
document.getElementById("password").addEventListener("blur", validatePassword);
document.getElementById("confirmPassword").addEventListener("blur", validateConfirmPassword);
document.getElementById("terms").addEventListener("change", validateTerms);

function validateFirstName() {
    const firstName = document.getElementById("firstName").value;
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(firstName)) {
        document.getElementById("firstNameError").innerHTML = "First name should contain only letters.";
        return false;
    }
    document.getElementById("firstNameError").innerHTML = "";
    return true;
}

function validateLastName() {
    const lastName = document.getElementById("lastName").value;
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(lastName)) {
        document.getElementById("lastNameError").innerHTML = "Last name should contain only letters.";
        return false;
    }
    document.getElementById("lastNameError").innerHTML = "";
    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        return false;
    }
    document.getElementById("emailError").innerHTML = "";
    return true;
}

function validateContactNumber() {
    const contactNumber = document.getElementById("contactNumber").value;
    const regex = /^[0-9]+$/;
    if (!regex.test(contactNumber)) {
        document.getElementById(" ").innerHTML = "Contact number should contain only numbers.";
        return false;
    }
    document.getElementById("contactNumberError").innerHTML = "";
    return true;
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value.toLowerCase();
    const lastName = document.getElementById("lastName").value.toLowerCase();
    const regexUppercase = /[A-Z]/;
    const regexSpecialChar = /[^\w\s!%^~]/;

    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long.";
        return false;
    }

    if (!regexUppercase.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must contain at least one uppercase letter.";
        return false;
    }

    if (!regexSpecialChar.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must contain at least one special character.";
        return false;
    }

    if (password.toLowerCase().includes(firstName) || password.toLowerCase().includes(lastName)) {
        document.getElementById("passwordError").innerHTML = "Password must not include your first or last name.";
        return false;
    }

    document.getElementById("passwordError").innerHTML = "";
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
        return false;
    }
    document.getElementById("confirmPasswordError").innerHTML = "";
    return true;
}

function validateTerms() {
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        document.getElementById("termsError").innerHTML = "You must accept the terms and conditions.";
        return false;
    }
    document.getElementById("termsError").innerHTML = "";
    return true;
}


document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isContactNumberValid = validateContactNumber();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isTermsValid = validateTerms();

    if (isFirstNameValid && isLastNameValid && isEmailValid && isContactNumberValid && isPasswordValid && isConfirmPasswordValid && isTermsValid) {
 
        window.location.href = "exam.html";

    } else {
        alert("Please correct the errors in the form.");
    }
});