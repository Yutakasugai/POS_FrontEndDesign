const controller_1 = document.querySelector('.ex1');
const controller_2 = document.querySelector('.ex2');
const controller_3 = document.querySelector('.ex3');
const controller_4 = document.querySelector('.ex4');

const controller_5and6 = document.querySelector('.ex5');
const controller_7and8 = document.querySelector('.ex7');


// From nothing to displaying 1st box
let phoneBtn = document.getElementById('phone-button');
let click_count = 1;
var hide = true;
phoneBtn.addEventListener("click", function(){
    console.log(click_count);
    switch(click_count){
        case 1:
            var order = document.getElementById("ex_table1");
            if(hide == true){
                controller_1.style.width = "49%";
                order.style.display = "block";
                click_count++;
                order.style.marginBottom = "10px";
            }
            break;
        case 2:
            var order = document.getElementById("ex_table2"); 
            if(hide == true){
                order.style.display = "block";
                controller_2.style.width = "49%";
                click_count++;
                order.style.marginBottom = "10px";
    
            }
            break;
        case 3:
            var order = document.getElementById("ex_table3");
            if(hide == true){
                order.style.display = "block";
                controller_3.style.width = "49%";
                click_count++;
                order.style.marginBottom = "10px";
            }
            break;
        case 4:
            var order = document.getElementById("ex_table4");
            if(hide == true){
                order.style.display = "block";
                controller_4.style.width = "49%";
                click_count++;
                order.style.marginBottom = "10px";

            }
            break;            
    }
}
);

let takeoutBtn = document.getElementById('takeout-button');
let take_count = 1;
var take_hide = true;
takeoutBtn.addEventListener("click", function(){
    switch(take_count){
        case 1:
            var order = document.getElementById("ex_table5");
            if(take_hide == true){
                order.style.display = "block";
                controller_5and6.style.width = "49%";
                take_count++;
            }
            break;
        case 2:
            var order = document.getElementById("ex_table6");
            if(take_hide == true){
                order.style.display = "block";
                controller_5and6.style.width = "100%";
                take_count++;
            }
            break;
        case 3:
            var order = document.getElementById("ex_table7");
            if(take_hide == true){
                order.style.display = "block";
                controller_7and8.style.width = "49%";
                take_count++;
            }
            break;
        case 4:
            var order = document.getElementById("ex_table8");
            if(take_hide == true){
                order.style.display = "block";
                controller_7and8.style.width = "100%";
                take_count++;
            }
            break;            
    }
}
);

doneBtn1.addEventListener("click", function(){
    console.log("DONE1" + click_count);
    var order = document.getElementById("ex_table1");
    if(order.style.display === "block"){
        order.style.display = "none";
        click_count = 1;
        controller_1and2.style.width = "49%";
        document.getElementById("ex_table2").style.marginLeft = "20px";
    }
    if(order.style.display === "none"){
        document.getElementById("ex_table2").style.marginLeft = "0px";
    }
}
);

doneBtn2.addEventListener("click", function(){
    console.log("DONE2" + click_count);
    var order = document.getElementById("ex_table2");
    if(order.style.display === "block"){
        order.style.display = "none";
        click_count = 1;
        controller_1and2.style.width = "49%";
    }
          
}
);

doneBtn3.addEventListener("click", function(){
    console.log("DONE3" + click_count);
    var order = document.getElementById("ex_table3");
    if(order.style.display === "block"){
        order.style.display = "none";
        click_count = 1;
        controller_3and4.style.width = "49%";
        document.getElementById("ex_table4").style.marginLeft = "20px";
    }
    if(order.style.display === "none"){
        document.getElementById("ex_table4").style.marginLeft = "0px";
    }

}            
);

doneBtn4.addEventListener("click", function(){
    console.log("DONE4" + click_count);
    var order = document.getElementById("ex_table4");
    if(order.style.display === "block"){
        order.style.display = "none";
        click_count = 1;
        document.getElementById("ex_table3").style.width = "49%";
        controller_3and4.style.width = "49%";
    }
           
}
);


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



