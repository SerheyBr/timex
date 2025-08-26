// action berger menu
const btnBurger = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".header__navigation");

btnBurger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  if (burgerMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});

// action droprown for burger menu
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

// action sidebar open/closse

const sidebarMobil = document.querySelector(".sidebar");
const btnClose = document.querySelector(".sidebar__btn-close");
const btnOpenSidebarMobil = document.querySelector(
  ".catalog__button-triger-mobil-menu"
);

if (sidebarMobil) {
  document.addEventListener("click", (e) => {
    if (e.target === sidebarMobil) {
      sidebarMobil.classList.remove("mobil-active");
      document.body.style.overflow = "visible";
    }
  });
}

if (btnClose) {
  btnClose.addEventListener("click", (e) => {
    if (e.currentTarget) {
      sidebarMobil.classList.remove("mobil-active");
      document.body.style.overflow = "visible";
    }
  });
}
if (btnOpenSidebarMobil) {
  btnOpenSidebarMobil.addEventListener("click", (e) => {
    if (e.currentTarget) {
      sidebarMobil.classList.add("mobil-active");
      document.body.style.overflow = "hidden";
    }
  });
}

// active tabs for full page
const tab = document.querySelector(".tab-for-full-card");

if (tab) {
  const tabsBtns = tab.querySelectorAll(".tab-for-full-card__item");
  const tabsContent = tab.querySelectorAll(".tab-for-full-card__body");

  tabsBtns[0].classList.add("active");
  tabsContent[0].classList.add("active");

  tabsBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tabId = e.currentTarget.dataset.tab;

      tabsBtns.forEach((el) => {
        el.classList.remove("active");
      });

      tabsContent.forEach((el) => {
        el.classList.remove("active");
      });

      e.currentTarget.classList.add("active");
      const selectedContentTab = document
        .querySelector(`.tab-for-full-card__body[data-tab="${tabId}"]`)
        .classList.add("active");
    });
  });
}

// active accordion for full page

const faq = document.querySelector(".tab-for-full-card-fac");
if (faq) {
  const facTriggers = faq.querySelectorAll(".tab-for-full-card-fac__trigger");
  const facBodys = faq.querySelectorAll(".tab-for-full-card-fac__body");

  facTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const body = btn.nextElementSibling;

      // if (btn.classList.contains("active")) {
      //   btn.classList.remove("active");
      //   body.classList.remove("active");
      //   return;
      // }

      // facTriggers.forEach((el) => el.classList.remove("active"));
      // facBodys.forEach((el) => el.classList.remove("active"));

      btn.classList.toggle("active");
      body.classList.toggle("active");
    });
  });
}

// active tabs for account page
const tabAccount = document.querySelector(".account");

if (tabAccount) {
  const tabsBtns = tabAccount.querySelectorAll(".account-sidebar__item");
  const tabsContent = tabAccount.querySelectorAll(".account-content");

  tabsBtns[0].classList.add("active");
  tabsContent[0].classList.add("active");

  tabsBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tabId = e.currentTarget.dataset.account;

      tabsBtns.forEach((el) => {
        el.classList.remove("active");
      });

      tabsContent.forEach((el) => {
        el.classList.remove("active");
      });

      e.currentTarget.classList.add("active");
      const selectedContentTab = document
        .querySelector(`.account-content[data-account="${tabId}"]`)
        .classList.add("active");
    });
  });
}
