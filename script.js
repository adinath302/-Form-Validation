const form = document.querySelector("form"),
    emailfield = form.querySelector(".email-field"),
    emailinput = emailfield.querySelector(".email"),
    passfield = form.querySelector(".create-password"),
    passinput = passfield.querySelector(".password"),
    cpassfield = form.querySelector(".confirm-password"),
    cpassinput = cpassfield.querySelector(".cpassword");
function checkemail() {
    const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailinput.value.match(emailpattern)) {
        return emailfield.classList.add("invalid");
    }
    emailfield.classList.remove("invalid");
}
const eyeicons = document.querySelectorAll(".show-hide");
eyeicons.forEach((eyeicon) => {
    eyeicon.addEventListener("click", () => {
        const pinput = eyeicon.parentElement.querySelector("input");
        if (pinput.type === "password") {
            eyeicon.classList.replace("bx-hide", "bx-show");
            return pinput.type = "text";
        };
        eyeicon.classList.replace("bx-show", "bx-hide");
        pinput.type = "password";
    });
});
function createpass() {
    const passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passinput.value.match(passpattern)) {
        return passfield.classList.add("invalid");
    };
    return passfield.classList.remove("invalid");
};

function confirmpass() {
    if (passinput.value !== cpassinput.value || cpassinput.value === "") {
        return cpassfield.classList.add("invalid");
    }
    cpassfield.classList.remove("invalid");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkemail();
    createpass();
    confirmpass();
    emailinput.addEventListener("keyup", checkemail);
    passinput.addEventListener("keyup", createpass);
    cpassinput.addEventListener("keyup", confirmpass);

    if (
        !emailfield.classList.contains("invalid") &&
        !passfield.classList.contains("invalid") &&
        !cpassfield.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});