const sliderPortfolio=document.querySelector('.slider-portfolio');
const srcEnCoursSlider=document.querySelector('.img-visible-slider');
const allPicsPortfolio=Array.from(document.querySelectorAll('.grid-item img'));
const rightPortfolio=document.querySelector('.btn-right');
const leftPortfolio=document.querySelector('.btn-left');
const fermerSlider=document.querySelector('.btn-fermer-slider');

let indexEnCours;
let photoEnCours;

allPicsPortfolio.forEach((pic)=>{
    pic.addEventListener('click',(e)=>{
       sliderPortfolio.style.display="block";
       srcEnCoursSlider.src=e.target.src;
       photoEnCours=e.target;
       indexEnCours=allPicsPortfolio.indexOf(photoEnCours);

       
    })
    
}
)

rightPortfolio.addEventListener('click',()=>{
    if(indexEnCours===allPicsPortfolio.length){
        indexEnCours=0;
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
        photoEnCours = allPicsPortfolio[indexEnCours];

    }
    else{
        indexEnCours=indexEnCours+1;
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
        photoEnCours = allPicsPortfolio[indexEnCours];
        indexEnCours = allPicsPortfolio.indexOf(photoEnCours);  
    }
    
})

leftPortfolio.addEventListener('click',()=>{
    if (indexEnCours ===0) {
       indexEnCours = allPicsPortfolio.length;
       srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
       photoEnCours = allPicsPortfolio[indexEnCours];
     }
    else{
        indexEnCours=indexEnCours-1;
        photoEnCours = allPicsPortfolio[indexEnCours];
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
        indexEnCours = allPicsPortfolio.indexOf(photoEnCours);  
    }
    
})

fermerSlider.addEventListener('click',()=>{
    sliderPortfolio.style.display = "none";
})