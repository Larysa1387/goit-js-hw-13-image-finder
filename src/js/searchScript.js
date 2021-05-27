const refs = {
  searchForm: document.getElementById('search-form'),
  btnSearch: document.querySelector('btn-search'),
  btnLoadMore: document.querySelector('btn-load'),
};

refs.searchForm.addEventListener('submit', onSearchClick);

function onSearchClick(e) {
  e.preventDefault();
  options = {
    headers: {

    }
  }

}
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
