import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesFromPixabay } from './js/pixabay-api';
import { render } from './js/render-functions';

const loader = document.querySelector('.loader');

let gallery = document.querySelector('.gallery');

let searchInput = document.querySelector('.search');

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

document.querySelector('#search-form').addEventListener('submit', e => {
  e.preventDefault();
  loader.style.display = 'block';
  let query = searchInput.value;

  getImagesFromPixabay(query)
    .then(response => {
      const images = response.hits;

      if (images.length === 0) {
        notifyError();
        return;
      }

      searchInput.value = '';

      gallery.innerHTML = render(images);
      lightbox.refresh();
    })
    .catch(e => notifyError(e.message))
    .finally(() => (loader.style.display = 'none'));
});

const notifyError = (
  m = 'Sorry, there are no images matching your search query. Please try again!'
) => {
  iziToast.error({
    message: m,
    position: 'topRight',
  });
};
