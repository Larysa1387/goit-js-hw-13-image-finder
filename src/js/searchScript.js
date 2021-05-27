import SearchService from './api-function'
import cardMarkupTpl from '../templates/card-markup.hbs';

const searchService = new SearchService();

const refs = {
  searchForm: document.getElementById('search-form'),
  btnLoadMore: document.querySelector('[data-action="load"]'),
  cardsList: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', onSearchClick);
refs.btnLoadMore.addEventListener('click', onLoadMoreBtnClick);
// refs.btnLoadMore.addEventListener('submit', onLoadMoreBtnClick);

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
  refs.btnLoadMore.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
  console.log('load more');
  if (searchService.query.trim() !== '') {
    searchService.fetchQueryItems().then(creatPageMarkup);
  }
}

function creatPageMarkup(hits) {
  const cards = cardMarkupTpl(hits);
  refs.cardsList.insertAdjacentHTML('beforeend', cards);
}

function clearCardsContainer() {
  refs.cardsList.innerHTML = '';
}
