let emailInput = document.forms.login.email;
let passWord = document.forms.login.password;
let btn = document.forms.login.submitbtn;
let myPTag = document.querySelector('#data_binding');

emailInput.addEventListener('keyup', e => {
  myPTag.textContent = e.target.value;
});

btn.addEventListener('click', e => {
    if(passWord.value === '' || emailInput.value === '') {
      e.preventDefault();
    };
});
// //you dont no js
// let user = {
//   name: 'Henny',
//   password: 12345,
//   status: "active"
// };
//
// let guest = {
//   name: 'Guest',
//   password: undefined,
//   status: "inactive"
// };
//
// let newScope = {
//   name: 'peter piper',
//   password: "bag o pipe",
//   instr: "pipes",
//   context: logMyName
// };
//
// newScope.context("fly away");
//
// function logMyName(greeting) {
//   console.log(this.name, this);
//   alert(`${greeting}, ${this.name}!`)
// };
//
// logMyName.call(user, 'hello');
// logMyName.call(guest, 'sign up');
//
// let classS = 90;
//
// {
//   let classS = 75;
//   console.log(classS, 'one');
// {
//     let classS = 50;
//     console.log(classS, 'two');
//   }
// };
//
// console.log(classS, 'global');
