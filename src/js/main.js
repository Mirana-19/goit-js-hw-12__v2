import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getData } from './pixabay-api';
import { render, renderMarkup } from './render-fuctions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.button__load-more');

const galleryLB = new SimpleLightbox('.gallery a');

let page = 1;
let query = '';

form.addEventListener('submit', handleSearch);
loadMoreBtn.addEventListener('click', loadMoreImages);

function handleSearch(e) {
  e.preventDefault();
  query = e.target.elements.input.value.trim();
  page = 1;
  if (!query) {
    return iziToast.error({
      position: 'topRight',
      message: 'Please, type a query!',
    });
  }

  getData(query)
    .then(res => res.data.hits)
    .then(images => {
      gallery.innerHTML = '';
      const markup = renderMarkup(images);
      render(gallery, markup);
      galleryLB.refresh();
    });

  e.target.reset();
}

function loadMoreImages() {
  page += 1;

  getData(query, page)
    .then(res => res.data.hits)
    .then(images => {
      const markup = renderMarkup(images);
      render(gallery, markup);
      galleryLB.refresh();
    });
}


