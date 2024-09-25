// Get the form and input elements
const signupForm = document.getElementById("signupForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const educationInput = document.getElementById("education");
const companyInput = document.getElementById("company");
const phoneInput = document.getElementById("phone");


// Submit event listener
signupForm.addEventListener("submit", (event) => {
    // Check if all fields are valid, if not, prevent form submission
    if (!validateForm()) {
        event.preventDefault(); // Prevent default form submission
        alert("Please fill out all fields correctly."); // Display an error message
    }
});


// Individual Validation Functions
function validateForm() {
    return validateFirstName() && validateLastName() && validateEducation() && validateCompany() && validatePhoneNumber();
}

function validateFirstName() {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(firstNameInput.value.trim())) {
        alert("Please enter a valid first name (only letters and spaces).");
        return false;
    }
    return true;
}

function validateLastName() {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(lastNameInput.value.trim())) {
        alert("Please enter a valid last name (only letters and spaces).");
        return false;
    }
    return true;
}

function validateEducation() {
    const educationRegex = /^[A-Za-z\s]+$/;
    if (!educationRegex.test(educationInput.value.trim())) {
        alert("Please enter a valid education (only letters and spaces).");
        return false;
    }
    return true;
}

function validateCompany() {
    const companyRegex = /^[A-Za-z0-9\s]+$/; // Allow alphanumeric characters and spaces
    if (!companyRegex.test(companyInput.value.trim())) {
        alert("Please enter a valid company name.");
        return false;
    }
    return true;
}

function validatePhoneNumber() {
    const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Remove non-digit characters
    const isValid = /^\d{10}$/.test(phoneNumber);
    
    if (phoneNumber.length > 10) {
        phoneError.textContent = "Phone number must be exactly 10 digits.";
        return false;
    } else if (!isValid) {
        phoneError.textContent = "Please enter only numeric values.";
        return false;
    }
    
    phoneError.textContent = ""; // Clear any previous error message
    return true;
}


  


// Add event listeners for input validation
firstNameInput.addEventListener("input", validateFirstName);
lastNameInput.addEventListener("input", validateLastName);
educationInput.addEventListener("input", validateEducation);
companyInput.addEventListener("input", validateCompany);
phoneInput.addEventListener("input", validatePhoneNumber);

// ... your existing validation functions ...

// Submit event listener
signupForm.addEventListener("submit", (event) => {
    if (validateForm()) {
        // (Replace this with your actual signup logic)

        // Simulate successful signup (remove this in your real implementation)
        setTimeout(() => {
            alert("Signup successful! Redirecting to login...");
            // Remove the preventDefault line here
            window.location.href = "login.html"; 
        }, 1000); // Simulate a 1-second delay before redirecting
    } else {
        event.preventDefault();
        alert("Please correct the errors in the form.");
    }
});



