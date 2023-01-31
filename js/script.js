//NAVIGATION TOGGLE
let menuToggle = document.querySelector ("#menuToggle");
let header = document.querySelector ("header");

menuToggle.onclick = function(){
    header.classList.toggle ('active');
}

document.onclick = function(clickEvent){
    if (clickEvent.target.id !== 'menuToggle'){
        header.classList.remove ('active');
    }
}