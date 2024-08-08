import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesFromPixabay } from './js/pixabay-api';
import { render } from './js/render-functions';

const loader = document.querySelector('.loader');

let gallery = document.querySelector('.gallery');

let searchInput = document.querySelector('.search');
let loadMoreButton = document.querySelector('#load-more-button');

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

let page = 1;
let query = null;
let images = [];

const renderImages = async (query, page) => {
  try {
    loader.style.display = 'block';
    const response = await getImagesFromPixabay(query, page);
    const { data } = response;
    const { totalHits, hits } = data;
    images = [...images, ...hits];

    if (images.length === 0) {
      notifyError();
      return;
    }

    searchInput.value = '';

    gallery.innerHTML = render(images);

    if (images.length >= totalHits) {
      loadMoreButton.classList.add('load-more-button');
      loadMoreButton.classList.remove('button-center');

      notifyInfo("We're sorry, but you've reached the end of search results.");
    } else {
      if (loadMoreButton.classList.contains('load-more-button')) {
        loadMoreButton.classList.remove('load-more-button');
        loadMoreButton.classList.add('button-center');
      }
    }

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

  query = searchInput.value;
  images = [];

  try {
    await renderImages(query, page);
  } catch (e) {
    console.error(e);
  }
});

loadMoreButton.addEventListener('click', async e => {
  page++;
  await renderImages(query, page);
  const boundingClientRect = document
    .querySelector('.gallery-item-wrap')
    .getBoundingClientRect();

  console.log(boundingClientRect);
  const imgBlockWidth = boundingClientRect.width;

  window.scrollBy({
    top: imgBlockWidth * 2,
    behavior: 'smooth',
  });
});

const notifyError = (
  m = 'Sorry, there are no images matching your search query. Please try again!'
) => {
  iziToast.error({
    message: m,
    position: 'topRight',
  });
};

const notifyInfo = m => {
  iziToast.info({
    message: m,
    position: 'topRight',
  });
};
