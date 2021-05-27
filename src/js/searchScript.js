import SearchService from './api-function'


const searchService = new SearchService();

const refs = {
  searchForm: document.getElementById('search-form'),
  btnSearch: document.querySelector('btn-search'),
  btnLoadMore: document.querySelector('[data-action="load"]'),
};

refs.searchForm.addEventListener('submit', onSearchClick);
refs.btnLoadMore.addEventListener('click', onLoadMoreBtnClick);
// refs.btnLoadMore.addEventListener('submit', onLoadMoreBtnClick);

function onSearchClick(e) {
  e.preventDefault();
  searchService.query = e.currentTarget.elements.query.value;
  searchService.resetPage();
  if (searchService.query.trim() !== '') {
    searchService.fetchQueryItems();
  }
  // const KEY = '21781686-06f0d55f145dff9dbbb393fb1';
  // const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&key=${KEY}`;
  // fetch(BASE_URL)
  //   .then(response => response.json())
  //   .then(console.log());
}

function onLoadMoreBtnClick() {
  console.log('load more');
  if (searchService.query.trim() !== '') {
    searchService.fetchQueryItems();
  }
}
