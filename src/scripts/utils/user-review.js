/* eslint-disable no-unused-vars */
import API_ENDPOINT from '../globals/api-endpoint';

const UserReview = {
  add(id) {
    const saveButtonReview = document.querySelector('.review-wrapper button');
    saveButtonReview.addEventListener('click', async () => {
      const inputName = document.querySelector('.review-wrapper input#username');
      const inputReview = document.querySelector('.review-wrapper textarea#review');
      const review = {
        id,
        name: inputName.value,
        review: inputReview.value,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      };
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
      const responseJson = await response.json();
      if (responseJson.error) {
        alert(responseJson.message);
      } else {
        alert('Review berhasil ditambah');
        inputName.value = '';
        inputReview.value = '';
      }
    });
  },
};

export default UserReview;
