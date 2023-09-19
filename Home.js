// JavaScript functionality goes here
document.getElementById("home").addEventListener("click", function() {
    // Implement code to display home content
});

document.getElementById("contact").addEventListener("click", function() {
    // Implement code to display contact content
});

document.getElementById("cart").addEventListener("click", function() {
    // Implement code to add items to the cart
});

document.getElementById("out").addEventListener("click", function() {
    // Implement code to log the user out
});
document.getElementById("shop").addEventListener("click", function() {
    // Implement code to log the user out
});
document.querySelector(".hop").addEventListener("click", function() {
    // Implement code to navigate to the shop page
    window.location.href = "shop.html"; // Replace "shop.html" with the actual URL you want to navigate to
});
document.querySelector(".con").addEventListener("click", function() {
    // Redirect to the contact.html page
    window.location.href = "Contact.html";
});
const signElement = document.querySelector(".sign");
signElement.addEventListener("click", function() {
    // Redirect to the "signout.html" page when the element is clicked.
    window.location.href = "LogIn.html";
});
