import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");
// console.log(galleryContainer);
const galleryCardsSet = createGallery(galleryItems);
function createGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `<li class="gallery__item">
        <a class="gallery__link" href="${original}"
        <img src="${preview}"
         alt="${description}"
         data-source="${original}"/>
         </a>
      </li>`;
        }).join('')
}
galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);
galleryContainer.addEventListener('click', selectGalleryEl);

function selectGalleryEl(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}"`,
          {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
    },
  );
      // instance.show();

  const onKeydownEsc = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      instance.close();
    }
  };
  // window.addEventListener('keydown', onKeydownEsc);
  // window.removeEventListener('keydown', onKeydownEsc);

  instance.show();
}