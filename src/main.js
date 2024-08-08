import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesFromPixabay } from './js/pixabay-api';
import { render } from './js/render-functions';

const loader = document.querySelector('.loader');

let gallery = document.querySelector('.gallery');

let searchInput = document.querySelector('.search');
let loadMoreButton = document.querySelector('.load-more-button');

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

let page = 1;
let query = null;
let images = [];

const renderImages = async (query, page) => {
  try {
    const response = await getImagesFromPixabay(query, page);
    const { data } = response;
    images = [...images, ...data.hits];
    console.log(images);

    if (images.length === 0) {
      notifyError();
      return;
    }

    searchInput.value = '';

    gallery.innerHTML = render(images);

    lightbox.refresh();
  } catch (e) {
    notifyError(e.message);
    throw e;
  } finally {
    loader.style.display = 'none';
  }
};

document.querySelector('#search-form').addEventListener('submit', async e => {
  e.preventDefault();
  loader.style.display = 'block';
  query = searchInput.value;
  images = [];

  try {
    await renderImages(query, page);
    loadMoreButton.classList.remove('default-load-more');
    loadMoreButton.classList.add('button-center');
  } catch (e) {
    console.error(e);
  }
});

loadMoreButton.addEventListener('click', async e => {
  page++;
  await renderImages(query, page);
});

const notifyError = (
  m = 'Sorry, there are no images matching your search query. Please try again!'
) => {
  iziToast.error({
    message: m,
    position: 'topRight',
  });
};
