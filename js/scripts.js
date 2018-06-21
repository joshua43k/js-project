// let obj1 = {
//
// }
//
// let obj2 = new Object()
//
// let person = {
//   firstName: "Joshua",
//   lastName: "Gonzalez",
//   age: 18,
//   favs: ["stuff","thing","misc"],
//   desc: {
//     stuff: "is Stuff"
//   }
// }
//
// obj1.food = "pizza";
//
// obj1['color'] = "blue";
// //
// // console.log(obj1);
// // console.log(obj1.age);
// //
// //
// // console.log(person.firstName);
// // // for in
// // for(let key in person){
// //   console.log('key', key);
// //   console.log(person[key]);
// // }
// //
//
// //for of
// // for(let [key, value] of Object.entries(person)){
// //   console.log(key, value);
// // }
//
// let newObj = Object.create(obj1);
//
// newObj.magic = true;
//
// newObj.color = 'red';
// console.log(newObj);
// console.log(obj1);
// let recipe = {
//   flower: '20 oz',
//   eggs: 3,
//   venilla: true,
//   rum: 'hella'
// };
//
// console.log(recipe);
// let clone = Object.create(recipe);
// console.log(Object.getPrototypeOf(clone));

// let vehicle = {
//   wheels: 4,
//   windows: null,
//   engineSize: 'yep',
//   doors: 4
// };

// let motercycle = Object.create(vehicle);
// motercycle.wheels = 2;
//
// let newString = new String('joshau');
// let newArr = new Array([1,'yep',true]);
// let newObj = new Object({
//   star: 5,
//   space: 'big',
//   flat: true
// });
// let newBoolean = new Boolean(false);
// let newNumber = new Number(25);
//
// console.log(newString,newArr,newObj,newBoolean,newNumber);

// function Spaceship(rockets, flux, pilot, blasters, shield, landingGear) {
//   this.rockets = rockets;
//   this.flux = flux;
//   this.pilot = pilot;
//   this.blasters = blasters;
//   this.shield = shield;
//   this.landingGear = landingGear;
// };
//
// let firefly = new Spaceship(4, false, 'Mal Reynolds', Infinity, false, 'broken')
// console.log(firefly.blasters);

// function Todo(name, dueDate, done, timeElapsed, dueByTime, peopleWith, priority, tags, list) {
//   this.name = name;
// }
//singaltin

// let button = document.querySelector('.btn');
//
// function User(name, pw) {
//   this.name = name;
//   this.pw = pw;
// };
//
// button.addEventListener('click', e => {
//   e.preventDefault();
  // let userName = document.newUserForm.username.value;
  // let password = document.forms.newUserForm.password.value;
//   let newUser = new User(username, password);
//   console.log(username,password);
// });
//
//
// let ad = 'yep';
//
// setTimeout(() => {
//   alert(ad);
// },5000);
// 
// let cart = [];
//
// function Product(name, price, desc) {
//   this.name = name;
//   this.price = price;
//   this.desc = desc;
// }
//
// let soapBtn = document.forms.cart.soap;
//
// soapBtn.addEventListener('click', e => {
//   let soap = new Product("soap", 2.99, "make you clean!");
//   cart.push(soap);
//   localStorage.setItem('soap', JSON.stringify(soap));
// });
//
// function getSoap() {
//   let storedItem = localStorage.getItem('soap')
//   console.log(JSON.parse(storedItem));
// }
//
// getSoap();

//
