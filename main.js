'use-strict'

const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const toggleIcon = document.querySelector(".toggle-icon");
const navigation = document.querySelector(".navigation")

mobileNavToggle.addEventListener("click", function(){
   toggleIcon.classList.toggle("toggle-close");
   navigation.classList.toggle("is-open")
})