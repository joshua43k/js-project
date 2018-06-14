
// let myClass = document.querySelector('.my-header')
//
// myClass.addEventListener('click', e => {
//   console.log(e, 'this is a event');
//   alert('clicked');
// })
//
// console.log('hello world');

let button = document.querySelector('#js-button');
let div = document.querySelector('.back-div');
let h1 = document.querySelector('.div-text');
const body = document.querySelector('body');

button.addEventListener('click', e => {
  // alert('clicked');
  h1.classList.toggle('text-2');
  div.classList.replace('back-div', "green-back");
});


// div.addEventListener('mouseenter', e => {
//   e.target.style.backgroundColor = "#e40007";
//   console.log(e);
// })

// h1.addEventListener('mouseleave', e => {
//   e.target.style.color = "#000";
// })

button.addEventListener('click', e =>{
  e.target.textContent = 'goodbye'
})

// div.innerHTML = `<p>Lorem ipsum dolor sit!!!</p>`//don't use

let newH1 = document.createElement('h1');
newH1.textContent = 'hello there';
// body.appendChild(newH1)

// newH1.className = 'text-center'

body.insertBefore(newH1, div);

div.id = "red-text";

newH1.classList.add('text-center')
//
// div.addEventListener('click', e => {
//   div.classList.remove('text-center');
// })

let myImg = document.createElement('img');

myImg.setAttribute('src',`https://vignette.wikia.nocookie.net/disney/images/a/a8/ImpStarDestroyer-SWI125.jpg/revision/latest?cb=20121223231202`);
div.appendChild(myImg);
console.log(myImg);
