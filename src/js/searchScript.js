const refs = {
  searchForm: document.getElementById('search-form'),
  btnSearch: document.querySelector('btn-search'),
  btnLoadMore: document.querySelector('btn-load'),
};

refs.searchForm.addEventListener('submit', onSearchClick);
refs.btnLoadMore.addEventListener('click', onLoadMoreBtnClick);
// refs.btnLoadMore.addEventListener('submit', onLoadMoreBtnClick);

function onSearchClick(e) {
  e.preventDefault();

  const KEY = '21781686-06f0d55f145dff9dbbb393fb1';
  const searchQuery = e.currentTarget.elements.query.value;
  const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&key=${KEY}`;
  fetch(BASE_URL)
    .then(response => response.json())
    .then(console.log());
}
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
// key: '21781686-06f0d55f145dff9dbbb393fb1'

function onLoadMoreBtnClick() {
console.log('hello');
}
