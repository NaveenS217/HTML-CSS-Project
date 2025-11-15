function showError(message) {
    const errorBox = document.getElementById("error_msg_container");
    errorBox.style.display = "block";
    errorBox.innerHTML = message;
}

function validation() {
    let userName = document.getElementById("user_name");
    let password = document.getElementById("user_pwd");

    let errors = [];

    // Reset borders
    userName.style.border = "1px solid #000";
    password.style.border = "1px solid #000";

    // Username validation (only letters)
    const namePattern = /^[A-Za-z]+$/;

    if (userName.value.trim() === "") {
        errors.push("User Name is required");
        userName.style.border = "2px solid red";
    } else if (!namePattern.test(userName.value.trim())) {
        errors.push("User Name must contain only alphabet characters");
        userName.style.border = "2px solid red";
    } else if (userName.value.trim().length < 3) {
        errors.push("User Name must be at least 3 characters");
        userName.style.border = "2px solid red";
    }

    // Password validation
    const pwd = password.value.trim();
    const uppercase = /[A-Z]/;
    const number = /[0-9]/;
    const special = /[!@#$%^&*]/;

    if (pwd === "") {
        errors.push("Password is required");
        password.style.border = "2px solid red";
    } else if (pwd.length < 6) {
        errors.push("Password must be at least 6 characters");
        password.style.border = "2px solid red";
    } else {
        if (!uppercase.test(pwd)) {
            errors.push("Password must contain at least 1 uppercase letter");
            password.style.border = "2px solid red";
        }
        if (!number.test(pwd)) {
            errors.push("Password must contain at least 1 number");
            password.style.border = "2px solid red";
        }
        if (!special.test(pwd)) {
            errors.push("Password must contain at least 1 special character (! @ # $ % ^ & *)");
            password.style.border = "2px solid red";
        }
    }

    // Display errors
    if (errors.length > 0) {
        showError(errors.join("<br>"));
        return false;
    }

    // Success
    document.getElementById("error_msg_container").style.display = "none";
    alert("Login Successful!");
    return true;
}
