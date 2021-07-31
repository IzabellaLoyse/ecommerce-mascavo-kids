const buttonSizeP = document.querySelector(".js-btn-size-p");
const buttonSizeM = document.querySelector(".js-btn-size-m");
const buttonSizeG = document.querySelector(".js-btn-size-g");

const cards = document.querySelectorAll(".js-card");


const clothesSizeP = (size) => {
  cards.forEach((size) => {
    const attributeP = size.getAttribute("data-size-p")

    if (attributeP !== "p") {
      size.classList.add("is-disabled")
    } else {
      size.classList.remove("is-disabled")
    }
  })
}


const clothesSizeM = (size) => {
  cards.forEach((size) => {
    const attributeM = size.getAttribute("data-size-m")

    if (attributeM !== "m") {
      size.classList.add("is-disabled")
    } else {
      size.classList.remove("is-disabled")
    }
  })
}


const clothesSizeG = (size) => {
  cards.forEach((size) => {
    const attributeG = size.getAttribute("data-size-g")

    if (attributeG !== "g") {
      size.classList.add("is-disabled")
    } else {
      size.classList.remove("is-disabled")
    }
  })
}



buttonSizeP.addEventListener("click", clothesSizeP);

buttonSizeM.addEventListener("click", clothesSizeM);

buttonSizeG.addEventListener("click", clothesSizeG);
