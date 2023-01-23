let initia = document.getElementById("initial");
let store = document.getElementById("store");
let count = 0;
function increment(){
    count +=1;
    initia.textContent= count;
}
function save(){
    let countstr = count + " - ";
    store.textContent += countstr;
    count = 0;
    initia.textContent = count;
}
function cler(){
    store.textContent = "Previous entry: ";
    count = 0;
    initia.textContent = count;
}
