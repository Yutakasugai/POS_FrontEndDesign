const phoneBtn = document.getElementById('phone-button');
const takeoutBtn = document.getElementById('takeout-button');
const extraBox_1 = document.getElementById('colunm-1'); 
const extraBox_2 = document.getElementById('colunm-2');
const controller_1and2 = document.querySelector('.togo-phone'); 

const doneBtn_1 = document.getElementById('doneBtn_1'); 
const doneBtn_2 = document.getElementById('doneBtn_2'); 

// From nothing to displaying 1st box
phoneBtn.onclick = () => {
    if (extraBox_1.style.display === 'block'){
        console.log("Now box1 displayed"); 
        extraBox_2.style.display = 'block'; 
        extraBox_2.style.marginLeft = '10px'; 
        controller_1and2.style.width = '100%'; 

    } else {
        extraBox_1.style.display = 'block'; 
        controller_1and2.style.width = '49%'; 
    }
}

doneBtn_1.onclick = () => {
    if (extraBox_2.style.display === 'block') {
        extraBox_1.style.display = 'none';
        extraBox_2.style.marginLeft = '0px'; 
        controller_1and2.style.width = '49%'; 
    } else {
        extraBox_1.style.display = 'none'; 
    }
}

doneBtn_2.onclick = () => {
    if (extraBox_1.style.display === 'block') {
        extraBox_2.style.display = 'none';
        extraBox_2.style.marginLeft = '0px'; 
        controller_1and2.style.width = '49%'; 
    } else {
        extraBox_2.style.display = 'none'; 
    }
}

// UpdateBtn Modal Set 
const updateBtnModal = document.getElementById('updateBtn-modal'); 
const closeBtn_update = document.querySelector('.close-btn-updateBtn'); 

// Import jquery function 
$('button.update-button').click(function() {
    updateBtnModal.style.display = 'block'; 
})
closeBtn_update.addEventListener('click', () => {
    updateBtnModal.style.display = 'none'; 
})
// Cancel btn inside of update modal
$('button#cancel-btn').click(function() {
    updateBtnModal.style.display = 'none'; 
})
// btn to close modal
window.addEventListener('click', (e) => {
    if(e.target === updateBtnModal){
        updateBtnModal.style.display = 'none';
    } else if (e.target === addBtnModal){
        addBtnModal.style.display = 'none'; 
    } else if (e.target === closeBtnModal) {
        closeBtnModal.style.display = 'none'; 
    }
})

// UpdateBtn Modal - Increment + and - buttons
let decreaseBtn = document.getElementById('button_decrease');
let increaseBtn = document.getElementById('button_increase'); 
let decreaseBtn_switch = document.getElementById('s-button_decrease');
let increaseBtn_switch = document.getElementById('s-button_increase'); 
let decreaseBtn_addBtn = document.getElementById('add_button_decrease');
let increaseBtn_addBtn = document.getElementById('add_button_increase');
let counter = document.getElementById('counter'); 
let counter_switch = document.getElementById('s-counter'); 
let counter_addBtn = document.getElementById('add_counter'); 
let count = 0;
let count_switch = 0; 
let count_addBtn = 0; 

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

// - btn: switch table
decreaseBtn_switch.addEventListener('click', () => {
    count_switch --; 
    counter_switch.style.display = 'block'; 
    if(count_switch <= 0) {
        count_switch = 0;
        counter_switch.style.display = 'none'; 
    } else {
        counter_switch.innerHTML = count_switch; 
    }
})
// + btn: switch table
increaseBtn_switch.addEventListener('click', () => {
    count_switch ++; 
    counter_switch.style.display = 'block'; 
    if(count_switch > 10) {
        count_switch = 0;
        counter_switch.style.display = 'none'; 
    } else {
        counter_switch.innerHTML = count_switch; 
    }
})

// - btn: addBtn modal table
decreaseBtn_addBtn.addEventListener('click', () => {
    count_addBtn --; 
    counter_addBtn.style.display = 'block'; 
    if(count_addBtn < 0) {
        count_addBtn = 0;
        counter_addBtn.innerHTML = count_addBtn; 
    } else {
        counter_addBtn.innerHTML = count_addBtn; 
    }
})
// + btn: addBtn modal table
increaseBtn_addBtn.addEventListener('click', () => {
    count_addBtn ++; 
    counter_addBtn.style.display = 'block'; 
    if(count_addBtn >= 11) {
        count_addBtn = 0;
        counter_addBtn.innerHTML = count_addBtn; 
    } else {
        counter_addBtn.innerHTML = count_addBtn; 
    }
})


// Add Button Modal 
const addBtnModal = document.getElementById('addBtn-modal'); 
const closeBtn_add = document.querySelector('.close-btn-addBtn'); 

$('button.add-button').click(function() {
    addBtnModal.style.display = 'block'; 
})
closeBtn_add.addEventListener('click', () => {
    addBtnModal.style.display = 'none'; 
})
// back btn inside of addBtn modal
$('button#back-btn').click(function() {
    addBtnModal.style.display = 'none'; 
})

// Close Btn Modal 
const closeBtn = document.getElementById('close-btn');
const closeBtnModal = document.getElementById('closeBtn-modal'); 
const closeBtn_close = document.querySelector('.close-btn-closeBtn'); 
const noBtn_close = document.getElementById('no-btn'); 

closeBtn.addEventListener('click', () => {
    closeBtnModal.style.display = 'block'; 
})
closeBtn_close.addEventListener('click', () => {
    closeBtnModal.style.display = 'none'; 
})
noBtn_close.addEventListener('click', () => {
    closeBtnModal.style.display = 'none'; 
})



