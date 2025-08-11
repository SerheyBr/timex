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

document.addEventListener("DOMContentLoaded", function () {
  new SlimSelect({
    select: ".my-form .wpcf7-select",
    settings: {
      showSearch: false,
      placeholderText: "Выберите услугу",
    },
  });
});

const swiper = new Swiper(".my-slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".my-slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".my-slider__button-next",
    prevEl: ".my-slider__button-prev",
  },
});

const swiper1 = new Swiper(".slider-hero", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".slider-hero__button-next",
    prevEl: ".slider-hero__button-prev",
  },
});

const swiper2 = new Swiper(".slider-demo-category", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 30,
  pagination: {
    el: ".slider-demo-category__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-demo-category__button-next",
    prevEl: ".slider-demo-category__button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    840: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
    },
  },
});

// 11111111111111111111111111111111111111111111111111111111111111111111111111
/**
 * Инициализация Swiper слайдера
 *
 * Базовые настройки:
 */
// const swiper = new Swiper(".swiper", {
//   // Основные параметры
//   direction: "horizontal", // Ориентация слайдера ('horizontal' или 'vertical')
//   loop: true, // Бесконечная прокрутка
//   slidesPerView: "auto", // Количество видимых слайдов ('auto' или число)
//   spaceBetween: 20, // Отступ между слайдами (в px)
//   centeredSlides: true, // Центрирование активного слайда
//   speed: 500, // Скорость анимации перехода (мс)

//   // Настройки пагинации (точки)
//   pagination: {
//     el: ".swiper-pagination", // Селектор контейнера для пагинации
//     clickable: true, // Кликабельность точек
//     dynamicBullets: false, // Динамические точки (меняют размер)
//     type: "bullets", // Тип пагинации ('bullets', 'fraction', 'progressbar')
//   },

//   // Настройки навигации (стрелки)
//   navigation: {
//     nextEl: ".swiper-button-next", // Селектор кнопки "Вперед"
//     prevEl: ".swiper-button-prev", // Селектор кнопки "Назад"
//     disabledClass: "swiper-button-disabled", // Класс для неактивных кнопок
//   },

//   // Адаптивность
//   breakpoints: {
//     // Настройки для экранов >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     // Настройки для экранов >= 768px
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // Настройки для экранов >= 1024px
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },

// Дополнительные эффекты
//   effect: "slide", // 'slide', 'fade', 'cube', 'coverflow', 'flip'
//   autoplay: {
//     // Автопрокрутка
//     delay: 3000, // Интервал между слайдами (мс)
//     disableOnInteraction: false, // Продолжать после взаимодействия
//   },
// });

/**
 * ИНСТРУКЦИЯ ПО ИСПОЛЬЗОВАНИЮ:
 *
 * 1. HTML-структура:
 *    <div class="swiper">
 *      <div class="swiper-wrapper">
 *        <div class="swiper-slide">Слайд 1</div>
 *        <div class="swiper-slide">Слайд 2</div>
 *      </div>
 *      <!-- Пагинация -->
 *      <div class="swiper-pagination"></div>
 *      <!-- Навигация -->
 *      <div class="swiper-button-prev"></div>
 *      <div class="swiper-button-next"></div>
 *    </div>
 *
 * 2. CSS-рекомендации:
 *    - Для .swiper задать фиксированную высоту
 *    - Для .swiper-slide указать width (фиксированный или процентный)
 *    - Для стрелок/пагинации использовать position: absolute
 *
 * 3. Частые проблемы:
 *    - Обрезание стрелок: добавить padding к .swiper
 *    - Конфликты стилей: повысить специфичность селекторов
 *    - Не работает loop: проверить количество слайдов (нужно минимум 2 дубликата)
 *
 * 4. Документация:
 *    https://swiperjs.com/swiper-api
 */
