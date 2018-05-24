/*the three variable types*/

//var is the oldest variable
//javascripts looks for var declarations and pulls it up to the top and brings it to the outter scope
var;

//let statement declares a block scope local variable, optionally initializing it to a value, cannot be Redeclaring but can be RSedefined
//let variable are not pulled up
let

//const are block-scoped much like variables defined using the let statement, cannot be Redeclaring or Redefined
//const variable are not pulled up
const

var myName = "Joshua";

let myAge = 18;

const myGoal = "do something idk";

console.log(myName,myAge,myGoal)
//
//strings is a value that is in quotes
// var string1 = "anything in quotes";
//number is the numeric value of javascripts
var number1 = 7;
//boolean is a true or false value also a 0 or 1 value
var boolean1 = true;
//undefined is a value that is not defined yet // not defined is a error
var undefined1;
//null is a value of nothing
var null1 = null;

//Creates a JavaScript Date instance that represents a single moment in time.
var birthday = new Date('4/30/2000');

console.log(birthday);

// Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.
// Math.cail rounds up
var example1 = Math.ceil(8.2);
console.log(example1);
//Math.floor rounds down
var example2 = Math.floor(8.2);
console.log(example2);

//the difrents between string primitive and object //don't confuse primitives with their JS object counter-parts!
//object
var str1 = new String("object");
//primitive
var str2 = "primitive"
//
console.log(str1);
console.log(str2);
//length gives you the length
console.log(str1. length, str2. length);
//typeof gives you what the declarations is
console.log(typeof str1);
console.log(typeof str2);

// prompt Presents the user with a question and returns the user's input
// confirm Presents the user with a choice and returns a Boolean
// alert Simply gives the user a message
var name = prompt("");
confirm(name);
alert("your name is" +" "+ name);

// in class exersize
let movie = "Revenge of the sith";
let food = "Mac and cheese"

const movieYear = new Date('5/19/2005');
const foodInner = ['pasta', 'lot of cheese']

alert(food +" "+ foodInner)
confirm(movie +" "+ movieYear)
