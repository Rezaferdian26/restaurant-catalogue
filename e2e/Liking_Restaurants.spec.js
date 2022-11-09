const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Favorite kosong', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Favorite kosong', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('.description a', 30);
  I.seeElement('.description a');
  const firstRestaurant = locate('.description a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.waitForElement('#likeButton', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 30);
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.description a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('searching restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Favorite kosong', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.description a', 30);
  I.seeElement('.description a');

  const titles = [];

  countRestaurant = await I.grabNumberOfVisibleElements('.restaurant-item');

  for (let i = 1; i <= countRestaurant; i++) {
    I.click(locate('.description a').at(i));
    I.waitForElement('#likeButton', 30);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    titles.push(await I.grabTextFrom('.restaurant__title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');
  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurant = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleRestaurant = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurant.length, visibleRestaurant);

  matchingRestaurant.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.description a').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
