const click = document.querySelectorAll(".got__hover");
click.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.toggle("open");
    link.querySelector("h1").classList.toggle("open");
  })
}) 

const down = document.querySelectorAll(".got__hover");
down.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("open");
    link.querySelector("i").classList.toggle("open");
  });
});

const drop = document.querySelectorAll(".footer__item h4");
drop.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("open");
    link.querySelector("i").classList.toggle("open");
  });
});

const toggleBtn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const dim = document.querySelector(".dim");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  headerNav.classList.toggle("open");
  dim.classList.toggle("open");
});
