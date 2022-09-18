import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const markupGallery = createMarkup(galleryItems);

function createMarkup(set) {
    const newGalleryList = set.map(img => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${img.original}">
                        <img
                        class="gallery__image"
                        src="${img.preview}"
                        data-source="${img.original}"
                        alt="${img.description}"
                        />
                    </a>
                </div>`
    }).join('');

    galleryRef.insertAdjacentHTML('beforeend', newGalleryList);
}



galleryRef.addEventListener('click', openModalClick);

function openModalClick(evt) {
    evt.preventDefault();

    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`,
        {
            onShow: () => {
            document.addEventListener("keydown", OnEscClose);
            },
            onClose: () => {
            document.removeEventListener("keydown", OnEscClose);
            },
        })
    
    instance.show();

    function OnEscClose(e) {
        if (e.code === 'Escape') {
            instance.close();
        }
    }
}



