const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__menu");


btnSub.addEventListener("click", () => {
    body.classList.toggle("fixed");
    header.classList.toggle("responsive");

})

navLinks.addEventListener("click", () => {
    body.classList.remove("fixed");
    header.classList.remove("responsive");

})
window.addEventListener("resize", function() {
    if (window.innerWidth > 991) header.classList.remove("responsive") ;
    body.classList.remove("fixed");
  });

