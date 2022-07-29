const misoModal = document.getElementById('misoModal');
const shoyuModal = document.getElementById('shoyuModal');
const shioModal = document.getElementById('shioModal');
const shrimpModal = document.getElementById('shrimpModal');
const hotMisoModal = document.getElementById('hotMisoModal');
const curryModal = document.getElementById('curryModal');
const vegeModal = document.getElementById('vegeModal');
const tomatoModal = document.getElementById('tomatoModal');

const misoSA_Modal = document.getElementById('misoSA_Modal');
const shoyuSA_Modal = document.getElementById('shoyuSA_Modal');
const shioSA_Modal = document.getElementById('shioSA_Modal');
const shrimpSA_Modal = document.getElementById('shrimpSA_Modal');
const hotMisoSA_Modal = document.getElementById('hotMisoSA_Modal');
const currySA_Modal = document.getElementById('currySA_Modal');
const vegeSA_Modal = document.getElementById('vegeSA_Modal');
const tomatoSA_Modal = document.getElementById('tomatoSA_Modal');

const misoSB_Modal = document.getElementById('misoSB_Modal');
const shoyuSB_Modal = document.getElementById('shoyuSB_Modal');
const shioSB_Modal = document.getElementById('shioSB_Modal');
const shrimpSB_Modal = document.getElementById('shrimpSB_Modal');
const hotMisoSB_Modal = document.getElementById('hotMisoSB_Modal');
const currySB_Modal = document.getElementById('currySB_Modal');
const vegeSB_Modal = document.getElementById('vegeSB_Modal');
const tomatoSB_Modal = document.getElementById('tomatoSB_Modal');



document.querySelector('.close_button').addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'none';
});

//miso
misoModal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//shoyu
shoyuModal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//shio
shioModal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//shrimp
shrimpModal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//Hot Miso
hotMisoModal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//curry
curryModal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//Vegetable
vegeModal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//tomato
tomatoModal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});


// SET A

//miso A
misoSA_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//shoyu A
shoyuSA_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//shio A
shioSA_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//shrimp A
shrimpSA_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//Hot Miso A
hotMisoSA_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//curry A
currySA_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//Vegetable A
vegeSA_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//tomato A
tomatoSA_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

// SET B

//miso B
misoSB_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//shoyu B
shoyuSB_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//shio B
shioSB_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//shrimp B
shrimpSB_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//Hot Miso B
hotMisoSB_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//curry B
currySB_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//Vegetable B
vegeSB_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});

//tomato B
tomatoSB_Modal.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
  document.querySelector('.modal_bg').classList.add('bg-active');
});



// Topping counter button
let decreaseBtn = document.getElementById('button_decrease');
let increaseBtn = document.getElementById('button_increase'); 
let counter = document.getElementById('counter');
let count = 0;

// - btn: Increase num of topping 
decreaseBtn.addEventListener('click', () => {
  count --; 
  counter.innerHTML = count; 
  if(count < 0) {
      count = 0;
      counter.innerHTML = count; 
  } else {
      counter.innerHTML = count; 
  }
})
// + btn: Decrease num of topping
increaseBtn.addEventListener('click', () => {
  count ++; 
  counter.innerHTML = count;
  if(count >= 11) {
      count = 0;
      counter.innerHTML = count; 
  } else {
      counter.innerHTML = count; 
  }
})