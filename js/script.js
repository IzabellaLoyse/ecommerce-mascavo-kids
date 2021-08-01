const buttonSizeP = document.querySelector(".js-btn-size-p");
const buttonSizeM = document.querySelector(".js-btn-size-m");
const buttonSizeG = document.querySelector(".js-btn-size-g");

const cards = document.querySelectorAll(".js-card");

let sizeFilter = [];

const addClothesSize = (item) => {
  sizeFilter.push(item)

  cards.forEach((size) => {
    const attribute = size.getAttribute(`data-size-${item}`);

    if (!sizeFilter.includes(attribute)) {
      size.classList.add("is-disabled")
    }
  })
}


buttonSizeP.addEventListener("click", () => {
  if (buttonSizeP) {
    addClothesSize("p")
    buttonSizeP.classList.toggle("is-active")
  }
});


buttonSizeM.addEventListener("click", () => {
  if (buttonSizeM) {
    addClothesSize("m")
    buttonSizeM.classList.toggle("is-active")
  }
});


buttonSizeG.addEventListener("click", () => {
  if (buttonSizeG) {
    addClothesSize("g")
    buttonSizeG.classList.toggle("is-active")
  }
});
