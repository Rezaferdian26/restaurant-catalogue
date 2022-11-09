import RestaurantApiSource from '../../data/restaurant-api-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
        <section>
            <h2 tabindex="0" id="maincontent" class="text-center">Explore Restaurant</h2>
            <div id="content"></div>
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#content');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

  renderError() {
    const restaurantsContainer = document.querySelector('#content');
    restaurantsContainer.innerHTML = '<h4>Error saat memuat halaman.</h4>';
  },
};

export default ListRestaurant;
