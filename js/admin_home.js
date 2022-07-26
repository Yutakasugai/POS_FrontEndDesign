// Table Modal
const tableBtn = document.getElementById('table-btn'); 
const tableModal = document.getElementById('table-modal'); 
const closeBtn = document.querySelector('.close-btn'); 
// CloseBtn Modal
const finishBtn = document.getElementById('close-btn'); 
const closeBtnModal = document.getElementById('closeBtn-modal');
const closeBtn_2 = document.querySelector('.close-btn-2'); 

// Table Modal Set
tableBtn.addEventListener('click', () => {
    tableModal.style.display = 'block'; 
})
closeBtn.addEventListener('click', () => {
    tableModal.style.display = 'none'; 
})

// CloseBtn Modal Set
finishBtn.addEventListener('click', () => {
    closeBtnModal.style.display = 'block'; 
})
closeBtn_2.addEventListener('click', () => {
    closeBtnModal.style.display = 'none'; 
})

// btn to close modal
window.addEventListener('click', (e) => {
    if(e.target === tableModal){
        tableModal.style.display = 'none';
    } else if (e.target === closeBtnModal){
        closeBtnModal.style.display = 'none';
    }
})
