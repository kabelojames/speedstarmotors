document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ratingInput = document.getElementById("rating");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const ratingError = document.getElementById("ratingError");
    const messageError = document.getElementById("messageError");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Full Name is required.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Validate Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!emailInput.value.match(emailPattern)) {
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Validate Rating
        if (ratingInput.value === "") {
            ratingError.textContent = "Please select a rating.";
            isValid = false;
        } else {
            ratingError.textContent = "";
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Feedback message cannot be empty.";
            isValid = false;
        } else {
            messageError.textContent = "";
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Feedback submitted successfully! Thank you.");
        }
    });
});
