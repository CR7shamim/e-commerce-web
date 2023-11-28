const bar = document.getElementById('bar');
const nev = document.getElementById('navbar');
const close = document.getElementById('close');


if(bar){
    bar.addEventListener('click',() => {
       nev.classList.add('active'); 
    })
}


if(close){
    close.addEventListener('click',() => {
       nev.classList.remove('active'); 
    })
}



