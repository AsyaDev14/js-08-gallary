
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGallery(items) {
  return items.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
  }).join('');
}
galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

