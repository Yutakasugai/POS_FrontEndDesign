const modalAppear = document.getElementById('misoModal');

modalAppear.addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'block';
});

document.querySelector('.close_button').addEventListener('click', () => {
  document.querySelector('.modal_bg').style.display = 'none';
})
