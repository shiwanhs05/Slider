const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index){
  slide.style.left = `${index*100}%`;
});
// console.log('positive' , slides[slides.length+1]);
// console.log('negative' , slides[-1]);
let counter = 0;
nextBtn.addEventListener('click', function(){
  counter++;
  carousel();
})
prevBtn.addEventListener('click', function(){
  counter--;
  console.log(counter);
  carousel();

}) 

function carousel(){ 
  // if(counter < 0) counter = slides.length - 1;
  // else if(counter === slides.length) counter = 0;

  // working with buttons
  if(counter<slides.length-1) nextBtn.style.display = 'block';
  else nextBtn.style.display = 'none';
  if(counter>0) prevBtn.style.display = 'block';
  else  prevBtn.style.display = 'none';  
  slides.forEach(function(slide){
    const transform =  (slide.style.transform = `translateX(-${counter * 100}%)`);
    console.log(transform);
  })
}
prevBtn.style.display = 'none';

