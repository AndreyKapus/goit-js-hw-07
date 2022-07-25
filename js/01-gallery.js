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

galleryRef.addEventListener("click", onCardClick);

function onCardClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const image = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${image}" width="800" height="600">
`);

  instance.show();
}
