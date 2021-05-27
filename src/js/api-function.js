export default class SearchService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchQueryItems() {
    console.log(this);
    const KEY = '21781686-06f0d55f145dff9dbbb393fb1';
    const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&key=${KEY}&per_page=12&page=${this.page}`;
    // console.log(this.searchQuery.trim());
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  // https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ



}
