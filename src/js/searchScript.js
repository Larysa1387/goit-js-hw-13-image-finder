import SearchService from './api-function'
import cardMarkupTpl from '../templates/card-markup.hbs';
import * as basicLightbox from 'basiclightbox';

const searchService = new SearchService();

const refs = {
  searchForm: document.getElementById('search-form'),
  btnLoadMore: document.querySelector('[data-action="load"]'),
  cardsList: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', onSearchClick);
refs.btnLoadMore.addEventListener('click', onLoadMoreBtnClick);

function onSearchClick(e) {
  e.preventDefault();
  searchService.query = e.currentTarget.elements.query.value;
  searchService.resetPage();
  clearCardsContainer();

  if (searchService.query.trim() !== '') {
    searchService.fetchQueryItems().then(creatPageMarkup);
    refs.btnLoadMore.classList.remove('is-hidden');
  }
}

function onLoadMoreBtnClick() {
  console.log('load more');

  if (searchService.query.trim() !== '') {
    searchService.fetchQueryItems().then(creatPageMarkup);
  }
}

function creatPageMarkup(hits) {
  const cards = cardMarkupTpl(hits);
  refs.cardsList.insertAdjacentHTML('beforeend', cards);
  refs.cardsList.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function clearCardsContainer() {
  refs.cardsList.innerHTML = '';
}

refs.cardsList.addEventListener('click', onPopUpImageClick);

function onPopUpImageClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const imgPopUp = e.target.dataset.load;
  const instance = basicLightbox.create(`<img src='${imgPopUp}' alt='${1}'>`);
  instance.show()
}
