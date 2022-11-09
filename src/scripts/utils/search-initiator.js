import RestaurantApiSource from '../data/restaurant-api-source';
import { createRestaurantItemTemplate } from '../views/templates/template-creator';

class SearchInitiator {
  constructor() {
    this._queryElement = document.querySelector('#search-bar input');
    this._queryElement.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this._search = this._queryElement.value.trim();
        this._init();
      }
    });
  }

  async _init() {
    const section = document.querySelector('section');
    try {
      const restaurantsContainer = document.createElement('div');
      restaurantsContainer.setAttribute('id', 'content');
      const result = await RestaurantApiSource.searchRestaurant(this._search);
      // ketika user mencari input kosong
      if (result.error) {
        window.location.reload();
      } else {
        section.innerHTML = `
            <h3 class="text-center p-2">Hasil Pencarian ${this._search}</h3>
            <p class='text-center mb-2'>${result.founded} hasil.</p>
          `;
        result.restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      }
      section.append(restaurantsContainer);
      document.querySelector('#search-bar input').value = '';
    } catch {
      section.innerHTML = `
          <div tabindex="0" id="error-page">
            <h3 class="text-center">Koneksi internetmu terganggu</h3>
            <p class="text-center">Pastikan internetmu lancar dengan cek ulang paket data, WIFI, atau jaringan di tempatmu</p>
            <button class="refresh">Coba lagi</button>
          </div>
          `;
      document.querySelector('#search-bar input').value = '';
      const button = document.querySelector('#error-page button');
      button.addEventListener('click', () => {
        window.location.reload();
      });
    }
  }
}

export default SearchInitiator;
