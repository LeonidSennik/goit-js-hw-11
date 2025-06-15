
import 'izitoast/dist/css/iziToast.min.css';

import 'simplelightbox/dist/simple-lightbox.min.css';

import 'loaders.css/loaders.min.css';

import './js/pixabay-api.js';
import './js/render-functions.js';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = form.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Увага',
      message: 'Введіть ключове слово для пошуку',
      position: 'topRight'
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const images = await getImagesByQuery(query);
    if (images.length === 0) {
      iziToast.error({
        title: 'Нічого не знайдено',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
      });
    } else {
      createGallery(images);
    }
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Щось пішло не так. Спробуйте ще раз!',
      position: 'topRight'
    });
  } finally {
    hideLoader();
  }
});
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  if (loader) loader.style.display = 'none';
});