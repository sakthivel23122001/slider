const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 2;
nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide(){
  container.animate([{opacity:'0.1'},{opacity:"1.0"}],{duration:1000,fill:"forwards"});
  if(counter === 6){
    counter = 1;
  }
  counter++;


  container.style.backgroundImage = "url(img/"+counter+".jpg)";
}
function prevSlide(){
  container.animate([{opacity:'0.1'},{opacity:"1.0"}],{duration:10000,fill:"forwards"});

  if(counter === 2){
    counter = 7;
  }
  counter--;


  container.style.backgroundImage = "url(img/"+counter+".jpg)";
}
