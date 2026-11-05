function showRegister() {

document.getElementById("loginForm").style.display = "none";

document.getElementById("registerForm").style.display = "block";

}

function showLogin() {

document.getElementById("registerForm").style.display = "none";

document.getElementById("loginForm").style.display = "block";

}


document.getElementById("registerForm").addEventListener("submit", function(e) {

e.preventDefault();

alert("Registration Successful!");

showLogin();

});


document.getElementById("loginForm").addEventListener("submit", function(e) {

e.preventDefault();

document.getElementById("loginPage").style.display = "none";

document.getElementById("mainWebsite").style.display = "block";

window.scrollTo(0, 0);

});


document.getElementById("bookingForm").addEventListener("submit", function(e) {

e.preventDefault();

alert("Your Appointment Request Submitted Successfully!");

this.reset();
});