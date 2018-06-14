// //older methods
// let body = document.getElementsByTagName('body');
//
let classes = document.getElementsByClassName('my-header');
//
// let id = document.getElementById('my-p');
//
// //newer methods
// let tag = document.querySelector('body');
//
// let myClass = document.querySelector('.my-header');
//
// let myId = document.querySelector('#my-p');
//
// let tags =document.querySelectorAll('body');



// function queryTheDom(methodsName, element){
//   switch (methodName.toLowerCase()) {
//     case 'getelementsbytagname':
//       document.getElementsByTagName(element);
//       break;
//     case 'querySelector':
//         document.querySelector(`.${element}`);
//         break;
//     default:
//       break;
//   }
// };
//


classes.addEventListener('click', e => {
  alert('click on my')
});
