import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    if (!response.ok) this.renderError(response);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return (responseJson);
  }

  static renderError(response) {
    const restaurantsContainer = document.querySelector('#content');
    restaurantsContainer.innerHTML = `${response.status} ${response.statusText}`;
  }
}

export default RestaurantApiSource;
