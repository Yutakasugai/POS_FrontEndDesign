//swiper js
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});



//modal
const checkModal = document.getElementById('openModal');

checkModal.addEventListener('click', () => {
  document.querySelector('.modal-bg').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', () => {
  document.querySelector('.modal-bg').style.display = 'none';
});