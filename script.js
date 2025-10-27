
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed.");

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
        event.preventDefault();//prevent submission

        //Retrieve User Inputs
        let usernameInput = document.getElementById("username");
        let passwordInput = document.getElementById("password");
        let emailInput = document.getElementById("email");

        //remove any leading or trailing spaces
        const usernameInputClean = usernameInput.value.trim();
        const passwordInputClean = passwordInput.value.trim();
        const emailInputClean = emailInput.value.trim();

        //validation variables
        let isValid = true;

        //a message variable that store any validation error message
        let messageArray = [];
        
        //validating each input
        if(usernameInputClean.length < 3){
            isValid = false;
            messageArray.push("Your username should have at least 3 characters. Please try again!");
        }

        //validate password
        
        if(passwordInputClean.length< 6) {
            isValid = false;
            messageArray.push("Your password should have at least 6 characters!");
        }

        //validate email
        
        if(!/^[\w-]+(\.[w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
            isValid = false;
            messageArray.push("Please enter a valid email");
        }

        //feedbackDiv.style.display = "block";

        if(isValid){
            //feedbackDiv.textContent = "Registration Successful!";
            //feedbackDiv.style.color = "#28a745";

            setTimeout(() => {
                window.location.href = "success.html";
            }, 1500);
        }
        else {
            feedbackDiv.innerHTML = messageArray.join("<br>");
            //feedbackDiv.style.color = "#dc3545";
        }

    })


})