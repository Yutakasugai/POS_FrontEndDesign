// Table Modal
const tableBtn = document.getElementById('table-btn'); 
const tableModal = document.getElementById('table-modal'); 
const closeBtn = document.querySelector('.close-btn'); 

// CloseBtn Modal
const finishBtn = document.getElementById('close-btn'); 
const closeBtnModal = document.getElementById('closeBtn-modal');
const closeBtn_2 = document.querySelector('.close-btn-2'); 

// Two Box Button
const boxBtn = document.getElementById('box-btn'); 
const boxBtnModal = document.getElementById('boxBtn-modal'); 
const closeBtn_3 = document.querySelector('.close-btn-boxBtn'); 

// HistoryBtn Modal
const historyBtn = document.getElementById('history-btn'); 
const historyBtnModal = document.getElementById('historyBtn-modal'); 
const closeBtn_4 = document.querySelector('.close-btn-historyBtn'); 

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

// boxBtn function
boxBtn.addEventListener('click', () => {
    boxBtnModal.style.display = 'block'; 
})
closeBtn_3.addEventListener('click', () => {
    boxBtnModal.style.display = 'none'; 
})

// historyBtn function
historyBtn.addEventListener('click', () => {
    historyBtnModal.style.display = 'block'; 
})
closeBtn_4.addEventListener('click', () => {
    historyBtnModal.style.display = 'none'; 
})

// btn to close modal
window.addEventListener('click', (e) => {
    if(e.target === tableModal){
        tableModal.style.display = 'none';
    } else if (e.target === closeBtnModal){
        closeBtnModal.style.display = 'none';
    } else if (e.target === boxBtnModal) {
        boxBtnModal.style.display = 'none'; 
    } else if (e.target === historyBtnModal) {
        historyBtnModal.style.display = 'none'; 
    }
})
