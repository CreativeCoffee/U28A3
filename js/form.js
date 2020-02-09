const contactForm = document.getElementById("contactForm");
const name = document.getElementById('fullName');
const email = document.getElementById('email');
const message = document.getElementById('message');

function validate() {
    if (name.value === "" || name.value === null) {
        alert("Please Enter your Name!!");
    }
    if (email.value === "" || email.value === null) {
        alert("Please Enter your E-Mail Address!!");
    }
    if(message.value === "" || message.value === null) {
        alert("Please enter a message");
    }
    else {
        alert("Thank you. Your message has been sent");
    }
    
    
}