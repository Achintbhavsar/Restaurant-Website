document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", function () {
        alert("Welcome to Delicious Bites! Explore our menu.");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Menu Page Loaded!");
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents actual form submission
        alert("Thank you for reaching out! We'll get back to you soon.");
        contactForm.reset();
    });
});
