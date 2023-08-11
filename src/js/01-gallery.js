// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const container = document.querySelector(".gallery");


function createMarkup(galleryItems){
    return  galleryItems.map((img ) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      alt="${img.description}"
    />
  </a>
  </li>`).join("")
}

 container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

 const lightbox= new SimpleLightbox('.gallery li a', { captionType: 'attr', captionsData: 'alt', captionDelay: 250 });


