const buttonSizeP = document.querySelector(".js-btn-size-p");
const buttonSizeM = document.querySelector(".js-btn-size-m");
const buttonSizeG = document.querySelector(".js-btn-size-g");

const cards = document.querySelectorAll(".js-card");


const clothesSize = (item) => {
  cards.forEach((size) => {
    const attribute = size.getAttribute(`data-size-${item}`)

    if (attribute !== item) {
      size.classList.add("is-disabled")
    } else {
      size.classList.remove("is-disabled")
    }
  })
}





buttonSizeP.addEventListener("click", () => {
  clothesSize('p')
});

buttonSizeM.addEventListener("click", () => {
  clothesSize('m')
});


buttonSizeG.addEventListener("click", () => {
  clothesSize('g')
});