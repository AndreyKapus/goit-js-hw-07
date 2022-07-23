import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const galleryArray = galleryItems
  .map(({ preview, original, description }) => {
    return `<ul><li class="gallery__link"><img src="${preview}" alt="${description}" class ="gallery__image"/></li></ul>`;
  })
  .join(" ");
galleryRef.insertAdjacentHTML("beforeend", galleryArray);
console.log(galleryItems);

galleryRef.addEventListener("click", onCardClick);

function onCardClick(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(e.target);
}
