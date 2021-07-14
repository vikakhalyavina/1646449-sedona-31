const buttonSearch = document.querySelector(".button-search");
const popup = document.querySelector(".modal-form");
const arrivalDate = popup.querySelector(".arrival-date-input");
const dateDeparture = popup.querySelector(".date-departure-input");
const adult = popup.querySelector(".adult-input");
const child = popup.querySelector(".child-input");

buttonSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-show");
  popup.classList.toggle("visually-hidden");
});

popup.addEventListener("submit", function (evt) {
  if (
    !arrivalDate.value ||
    !dateDeparture.value ||
    !adult.value ||
    !child.value
  ) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
