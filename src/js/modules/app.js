// action berger menu
const btnBurger = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".header__navigation");

btnBurger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

const allLiInBurgerMenu = burgerMenu.querySelectorAll("ul li");

allLiInBurgerMenu.forEach((el) => {
  el.addEventListener("click", (e) => {
    const element = e.currentTarget;
    if (element.querySelector("ul")) {
      element.querySelector("ul").classList.toggle("active");
    } else {
      console.log("no");
    }
  });
});
