// main.js

document.addEventListener("DOMContentLoaded", function () {
  // 1) Simple welcome alert only on home page
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "") {
    alert("Welcome to UrbanRoots! Explore properties to buy or rent.");
  }

  // 2) Search button click on index.html
  const searchInput = document.querySelector(".search-section input");
  const searchButton = document.querySelector(".search-section button");

  if (searchInput && searchButton) {
    searchButton.addEventListener("click", function () {
      const query = searchInput.value;
      if (query === "") {
        alert("Please type a location, property type, or keyword to search.");
      } else {
        alert("You searched for: " + query);
      }
    });
  }

  // 3) Very basic validation for signup form (no trim)
  if (window.location.pathname.includes("signup.html")) {
    const signupForm = document.querySelector("form");
    if (signupForm) {
      signupForm.addEventListener("submit", function (event) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
          alert("Please fill all fields before submitting the form.");
          event.preventDefault();
        } else {
          alert("Sign up successful! (Demo only, no data is saved.)");
        }
      });
    }
  }

  // 4) Very basic validation for contact form (no trim)
  if (window.location.pathname.includes("contact.html")) {
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
          alert("Please fill your name, email, and message.");
          event.preventDefault();
        } else {
          alert("Thank you for contacting UrbanRoots! (Demo only.)");
        }
      });
    }
  }
});
