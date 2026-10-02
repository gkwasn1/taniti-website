let joinForm = document.querySelector("#join-form-id");
joinForm.addEventListener("submit", validateEmail);

function validateEmail(event) {
    let emailAddress = document.querySelector("#emailAddress").value.trim();
    let confirmEmailAddress = document.querySelector("#confirmEmailAddress").value.trim();

    if (emailAddress !== confirmEmailAddress) {
        alert("The email addresses entered do not match. Please verify your email address.");
        event.preventDefault();
    }
}
