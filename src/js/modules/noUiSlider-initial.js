const priceSlider = document.querySelector(".sidebar-filter__price-range");
const minPriceInput = document.querySelector(
  ".sidebar-filter__price-number--min"
);
const maxPriceInput = document.querySelector(
  ".sidebar-filter__price-number--max"
);

if (priceSlider) {
  noUiSlider.create(priceSlider, {
    start: [0, 1000],
    connect: true,
    range: {
      min: 0,
      max: 2000,
    },
    step: 100,
  });

  priceSlider.noUiSlider.on("update", function (values, handle) {
    const value = values[handle];
    if (handle) {
      maxPriceInput.value = Math.round(value);
    } else {
      minPriceInput.value = Math.round(value);
    }
  });

  minPriceInput.addEventListener("change", function () {
    priceSlider.noUiSlider.set([this.value, null]);
  });

  maxPriceInput.addEventListener("change", function () {
    priceSlider.noUiSlider.set([null, this.value]);
  });
}
