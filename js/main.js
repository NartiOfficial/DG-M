const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav-mobile a");

const handleNav = () => {
  navBtn.classList.toggle("is-active");
  navMobile.classList.toggle("nav-mobile--active");
  body.classList.toggle("no-scroll");
};

const closeNavOnClick = () => {
  navMobile.classList.remove("nav-mobile--active");
  navBtn.classList.remove("is-active");
  body.classList.remove("no-scroll");
};

navLinks.forEach((link) => {
  link.addEventListener("click", closeNavOnClick);
});

navBtn.addEventListener("click", handleNav);

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};
handleCurrentYear();
