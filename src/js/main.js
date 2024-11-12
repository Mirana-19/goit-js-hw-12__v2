import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getData } from './pixabay-api';
import { render, renderMarkup } from './render-fuctions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');

const galleryLB = new SimpleLightbox('.gallery a');

form.addEventListener('submit', handleSearch);

function handleSearch(e) {
  e.preventDefault();
  const query = e.target.elements.input.value;

  if (!query.trim()) {
    return iziToast.error({
      position: 'topRight',
      message: 'Please, type a query!',
    });
  }

  getData(query)
    .then(res => res.data.hits)
    .then(images => {
      const markup = renderMarkup(images);
      render(gallery, markup);
      galleryLB.refresh();
    });

  e.target.reset();
}
