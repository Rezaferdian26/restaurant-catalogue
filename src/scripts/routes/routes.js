import DetailRestaurant from '../views/pages/detail-restaurant';
import ListRestaurant from '../views/pages/list-restaurant';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ListRestaurant, // default page
  '/list-restaurant': ListRestaurant,
  '/favorite': Favorite,
  '/detail/:id': DetailRestaurant,
};

export default routes;
