const itemsSlide=document.querySelectorAll('.container-slides img');
const nbSlide=itemsSlide.length;
const next=document.querySelector('.right');
const prev=document.querySelector('.left');

let compteur=0;

next.addEventListener('click',()=>{
    itemsSlide[compteur].classList.remove('active');
    if(compteur<nbSlide-1){
        compteur++;
    }else{
        compteur=0;
    }
    itemsSlide[compteur].classList.add('active');
}
)

prev.addEventListener('click',()=>{
    itemsSlide[compteur].classList.remove('active');
    if(compteur>0){
        compteur--;
    }else{
        compteur=nbSlide-1;
    }
    itemsSlide[compteur].classList.add('active');
}
)