const adult = confirm('Are you 18+ years old?');
console.log('Is this user adult? ', adult);

let userReview = prompt('Can you share your experience with us? From 0 to 10');
userReview = Number(userReview);
console.log(typeof userReview);
console.log('Users review: ', userReview);

