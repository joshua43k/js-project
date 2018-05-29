/* DAY 3 */
//There are two ways to create strings out of static code and variables
//ES5 alert('string' + var + 'string');
//ES6 alert(`string ${var} string`);

// THE LOGICAL OPERATORS
// Logical AND ( && ) // Both have to be ture
//   let name = "joshua";
//   let age = 18;
//
//   if(name && age){
//     alert('both exist');
//   }
//
// Logical OR ( || ) // One or the other must be true //js will stop on the the first true one
//   let name = "joshua";
//   // let age = 18;
//
//   if(name || age){
//     alert('both exist');
//   }
// Logical NOT ( ! ) //Checks if it is false if so its true
//   let name = "";
//   let age = 18;
//
//   if(!name){
//     alert('one exist');
//   }
//
//   if(!name && age){
//     alert('both exist');
//   }
// Truthy https://developer.mozilla.org/en-US/docs/Glossary/truthy //In JavaScript, a truthy value is a value that is considered  true when evaluated in a Boolean context
// Falsy https://developer.mozilla.org/en-US/docs/Glossary/falsy //A falsy value is a value that translates to false when evaluated in a Boolean context.
//   let name = ""; //Falsy
//   let age = 18; //Truthy
//
//   if(name || age){  //Truthy
//      alert('both exist');
//    }
//
//    if(nickname || birth){ //Falsy
//       alert('both exist');
//     }

// comparison operators
//Loose checks for value //checks for value and type
//Loose equal ( == ) //Strict equal ( === )
//Loose not equal ( != ) ///Strict not equal ( !== )
  // const age = 18;//number
  // const stringAge = '18';//string
  //
  // if(age !== stringAge) {
  //   alert('they\'re the same!');
  // }
  //
//Greater than ( > )
//Less than ( < )
//Less than or equal ( <= )
//Greater than or equal ( >= )
  // const age = 18;
  // const stringAge = '18';
  //
  // // if(age > stringAge) {
  // //   alert('waaaaaat?');
  // // }
  //
  // if(age <= stringAge.length) {
  //   alert('waaaaaat?');
  // }
  //
//
//loose and strict with obj //every obj are save diffrent places in memory so they will never be equal
  // let obj1 = {
  //  name: 'joshua'
  // };
  // let obj2 = {
  //  name: 'joshua'
  // };
  //
  // alert(obj1 == obj2);

/* in class test */
// let myString = "hello there";
// let objString = new String("hello there");
//
// if(myString == objString) {
//   alert("general kanobi")
// }
//
// if(myString === objString) {
//   alert("general kanobi")
// }
//
// if(myString <= objString) {
//   alert("general kanobi")
// }

//MATH operators
//Remainder (%) //The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
// let limit = 12;
// console.log(limit);
// limit++; //same thing as this limit = limit + 1
// console.log(limit);
// limit--; //same thing as this limit = limit - 1
// console.log(limit);
// limi += 7; //same thing as this limit = limit + 7
// console.log(limit);
//
// let upperLimit = 3;
//
//NaN
// let myNumber = "ted";
//
// console.log(!isNaN(myNumber));
//IN CLASS TEST
// let numValue1 = prompt("First number", '10');
// let numValue2 = prompt("Second number", '10');
//
// numValue1 = parseInt(numValue1);
// numValue2 = parseInt(numValue2);
//
// alert(numValue1 + numValue2);
//CONTROL FLOW
// let numValue1 = prompt("First number", '10');
// let numValue2 = prompt("Second number", '10');
//
// if(numValue1 > numValue2) {
//   alert('hello there');
// }else if (numValue1 < numValue2) {
//   alert('general kanobi');
// } else {
//   alert('you are a bold one')
// }

let firstName = prompt('what is your name?', "john")

switch(firstName.toLowerCase()) { //toUpperCase
  case 'john':
    alert('hello john!');
    break;
  case 'tom':
  case 'josh':
  case 'tim':
    alert('hello tom!');
    break;
  default:
    alert('no name');
    break;
}
