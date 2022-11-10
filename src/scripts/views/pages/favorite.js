import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section>
        <h2 tabindex="0" id="maincontent" class="text-center">Favorite Restaurant</h2>
        <div id="content">TES</div>  
      </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length === 0) {
      const section = document.querySelector('section');
      section.innerHTML = `
      <div tabindex="0">
        <h3 class="text-center restaurant-item__not__found" style="margin-top:40px">Favorite kosong</h3>
        <p class="text-center">Silahkan tambahkan restaurant ke favorite!</p>
        <button class="refresh">Kembali</button>
      </div>
      `;
      const button = document.querySelector('button.refresh');
      button.addEventListener('click', () => {
        window.location = '#';
      });
    } else {
      const restaurantsContainer = document.querySelector('#content');
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
