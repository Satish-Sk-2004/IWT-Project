"use strict";

const containerEl = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const signUpButton = document.querySelector('.sign-up .signbutton');
const signInButton = document.querySelector('.sign-in .signbutton');

registerBtn.addEventListener("click", () => {
  containerEl.classList.add("active");
});
loginBtn.addEventListener("click", () => {
  containerEl.classList.remove("active");
});

signUpButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.querySelector('.sign-up input[placeholder="Name"]').value.trim();
  const email = document.querySelector('.sign-up input[placeholder="Email"]').value.trim();
  const password = document.querySelector('.sign-up input[placeholder="Password"]').value.trim();

  if (!name || !email || !password) {
    alert("All fields must be filled out!");
  } else {
    window.location.href = "homepage.html"; // proceed with form submission
  }
});

signInButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector('.sign-in input[placeholder="Email"]').value.trim();
  const password = document.querySelector('.sign-in input[placeholder="Password"]').value.trim();

  if (!email || !password) {
    alert("All fields must be filled out!");
  } else {
    window.location.href = "homepage.html"; // proceed with sign-in logic
  }
});
