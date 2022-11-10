import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source';
import UserReview from '../../utils/user-review';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import {
  createRestaurantDetailTemplate,
  createRestaurantMenuFoods,
  createRestaurantMenuDrinks,
  createRestaurantCategories,
  createCustomerReviewsBox,
} from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const DetailRestaurant = {
  async render() {
    return `
          <section></section>
          <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    try {
      const restaurantContainer = document.querySelector('section');
      document.querySelector('#search-bar input').value = '';
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantApiSource.detail(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          address: restaurant.address,
          rating: restaurant.rating,
        },
      });
      createRestaurantMenuFoods(restaurant);
      createRestaurantMenuDrinks(restaurant);
      createRestaurantCategories(restaurant);
      createCustomerReviewsBox(restaurant);
      UserReview.add(url.id);
    } catch {
      const section = document.querySelector('section');
      section.innerHTML = `
      <div tabindex="0" id="error-page">
        <h3 class="text-center">Koneksi internetmu terganggu</h3>
        <p class="text-center">Pastikan internetmu lancar dengan cek ulang paket data, WIFI, atau jaringan di tempatmu</p>
        <button class="refresh">Coba lagi</button>
      </div>
      `;
      const button = document.querySelector('button.refresh');
      button.addEventListener('click', () => {
        window.location.reload();
      });
    }
  },
};

export default DetailRestaurant;
