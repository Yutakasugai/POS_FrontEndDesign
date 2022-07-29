let decreaseBtn = document.getElementById('button_decrease');
let increaseBtn = document.getElementById('button_increase'); 
let counter = document.getElementById('counter');
let count = 0;

// - btn: Customer Number
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
// + btn: Customer Number
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