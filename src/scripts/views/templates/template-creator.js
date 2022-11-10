import CONFIG from '../../globals/config';

const createRestaurantMenuFoods = (restaurant) => {
  const foods = document.querySelector('.foods');
  foods.innerHTML = '<h4 class="text-center">Makanan</h4>';
  restaurant.menus.foods.forEach((element) => {
    foods.innerHTML += `<p>${element.name}</p>`;
  });
};

const createRestaurantMenuDrinks = (restaurant) => {
  const drinks = document.querySelector('.drinks');
  drinks.innerHTML = '<h4 class="text-center">Minuman</h4>';
  restaurant.menus.drinks.forEach((element) => {
    drinks.innerHTML += `<p>${element.name}</p>`;
  });
};

const createRestaurantCategories = (restaurant) => {
  const information = document.querySelector('.information');
  const paragraph = document.createElement('p');
  restaurant.categories.forEach((element) => {
    paragraph.innerText += `"${element.name}" `;
  });
  information.append(paragraph);
};

const createCustomerReviewsBox = (restaurant) => {
  const customerReviews = document.getElementById('customer-reviews');
  restaurant.customerReviews.forEach((element) => {
    customerReviews.innerHTML += `
        <img src="images/assets/profile.jpg" alt="foto profil ${element.name}">
        <div class="reviews mb-2">
            <p>${element.name}</p>
            <p>${element.review}</p>
            <p>${element.date}</p>
        </div>
    `;
  });
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="suka restoran ini" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="batal suka restoran ini" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestaurantDetailTemplate = (restaurant) => `
        <h2 class="text-center restaurant__title" tabindex="0">${restaurant.name}</h2>
        <div id="content-detail">
             <article tabindex="0" class="mb-2">
                <div class="wrapper-information">
                    <picture>
                      <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}">
                      <img src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}">
                    </picture>
                    <div class="information">
                        <h4>Rating</h4>
                        <p>⭐ ${restaurant.rating}</p>
                        <h4>Kota</h4>
                        <p>${restaurant.city}</p>
                        <h4>Alamat</h4>
                        <p>${restaurant.address}.</p>
                        <h4>Kategori</h4>
                    </div>
                </div>
            </article>
            <article tabindex="0" class="p-2 mb-2">
                <h3>Deskripsi Restoran</h3>
                <p>${restaurant.description}</p>
            </article>
            <article tabindex="0" class="p-2 mb-2">
                <h3 class="text-center">Menu</h3>
                <div id="menu-restaurant">
                    <div class="menus foods"></div>
                    <div class="menus drinks"></div>
                </div>
            </article>
            <article tabindex="0" class="p-2 mb-2">
                <h3 class="mb-2">Ulasan Pelanggan</h3>
                <div id="customer-reviews">
                </div>
            </article>
            <article tabindex="0" class="p-2 mb-2">
                <h3 class="mb-2">Tambahkan Ulasan</h3>
                <div class="review-wrapper">
                    <form>
                        <label for="username">Nama</label>
                        <input aria-label="input username" type="text" id="username" class="mb-2" required>
                        <label for="review">Ulasan</label>
                        <textarea aria-label="input review" id="review" rows="4" class="mb-2" required></textarea>
                        <button aria-label="simpan review" type="submit" class="save">Simpan</button>
                    </form>
                </div>
            </article>
        </div>
    `;

const createRestaurantItemTemplate = (restaurant) => `
        <article tabindex="0" class="mb-2 restaurant-item">
            <picture>
              <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}">
              <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}">
            </picture>
            <div class="city">${restaurant.city}</div>
            <div class="description">
                <p class="rating"><b>⭐ ${restaurant.rating}</b></p>
                <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
                <div class="text">
                    <p class="hide">${restaurant.description}</p>
                </div>
            </div>
        </article>
    `;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createRestaurantMenuFoods,
  createRestaurantCategories,
  createRestaurantMenuDrinks,
  createCustomerReviewsBox,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
