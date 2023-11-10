// const box1 = document.getElementById('box1');
// box1.addEventListener('click', function(){
//    const body = document.querySelector('body');
//    body.style.backgroundColor = 'aqua'; 
// })
// const box2 = document.getElementById('box2');
// box2.addEventListener('click', function(){
//    const body = document.querySelector('body');
//    body.style.backgroundColor = 'red'; 
// })
// const box3 = document.getElementById('box3');
// box3.addEventListener('click', function(){
//    const body = document.querySelector('body');
//    body.style.backgroundColor = 'greenyellow'; 
// })
// const box4 = document.getElementById('box4');
// box4.addEventListener('click', function(){
//    const body = document.querySelector('body');
//    body.style.backgroundColor = 'blue'; 
// })
const but = document.querySelectorAll('.container')

const body = document.querySelector('body')
but.forEach(function(button){
button.addEventListener('click', function(e){
   if(e.target.id === 'box1'){
      body.style.backgroundColor = 'aqua';
   }
   else if(e.target.id === 'box2'){
      body.style.backgroundColor = 'red';
   }
   else if(e.target.id === 'box3'){
      body.style.backgroundColor = 'greenyellow';
   }
   else if(e.target.id === 'box4'){
      body.style.backgroundColor = 'blue';
   }
   


})
});
