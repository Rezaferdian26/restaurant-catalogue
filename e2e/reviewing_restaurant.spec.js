Feature('Reviewing Restaurants');

Scenario('review a restaurant', ({ I }) => {
  I.amOnPage('/');
  I.see('Explore Restaurant', 'h2#maincontent');
  I.click(locate('.description a').first());

  I.seeElement('.restaurant__title');
  I.fillField('#username', 'anonymous');
  I.fillField('#review', 'tes');
  I.click('.save');
});
