
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();

        
        const username = document.getElementById("username").value;
        const password = document.getElementById("login-password").value;

       
        document.getElementById("username-error").innerText = "";
        document.getElementById("password-error").innerText = "";

       
        function callback(isLoggedIn) {
            if (isLoggedIn) {
                
                window.location.href = "index.html"; 
            } else {
                
                alert("Invalid username or password. Please try again.");

                
                document.getElementById("username-error").innerText = "Enter a valid username";
                document.getElementById("password-error").innerText = "Enter a valid password";
            }
        }

       
        if (username === "admin" && password === "12345") {
         
            callback(true);
        } else {
            
            callback(false);
        }
    });
});
