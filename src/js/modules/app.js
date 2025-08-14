// action berger menu
const btnBurger = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".header__navigation");

btnBurger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

// action droprown for berger menu
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

// action dropdown for footer
const dropdownFooter = document.querySelectorAll(".footer__dropdown");

dropdownFooter.forEach((el) => {
  el.addEventListener("click", (e) => {
    const element = e.currentTarget;
    dropdownFooter.forEach((item) => {
      if (item === element) {
        item.classList.toggle("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});

// action dropdown for sidebar
const filterBox = document.querySelectorAll(".sidebar__filter");

filterBox.forEach((el) => {
  const trigger = el.querySelector(".sidebar-filter__header");

  trigger.addEventListener("click", (e) => {
    el.classList.toggle("active");
  });
});
