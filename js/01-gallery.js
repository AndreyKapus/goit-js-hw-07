import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const galleryArray = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a></div>`;
  })
  .join(" ");

galleryRef.insertAdjacentHTML("beforeend", galleryArray);
console.log(galleryItems);

galleryRef.addEventListener("click", onCardClick);

function onCardClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(e.target);
}
// /div><ul><li class="gallery__link"><img src="${preview}" alt="${description}" class ="gallery__image"/></li></ul>
