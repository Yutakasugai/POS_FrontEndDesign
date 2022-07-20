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