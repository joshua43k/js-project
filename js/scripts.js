// let user = prompt(`Enter you're number`, 1);
// let userNum = findRoot(parseInt(user));
//
// function findRoot(num){
//   if(!isNaN(num)){
//     return(num * num);
//   } else {
//     alert('NaN');
//     user = prompt(`Enter you're number`, 1);
//     return findRoot(parseInt(user));
//   }
// };
//
// alert(userNum);
//
// let answer = powOfTwo(parseInt(prompt(`Enter you're number`, 1)));
//
// function powOfTwo(num) {
//   if(!isNaN(num)){
//     return(num * num);
//   } else {
//     alert(NaN)
//     let answer = powOfTwo(parseInt(prompt(`Enter you're number`, 1)));
//     alert(answer)
//   }
// };
//
// alert(answer);

// let userString = prompt(`enter you're name`, `john`);
// let capString = capLetter(userString);

// function capLetter(string) {
//   let words = string.split(' ');
//   let capWord = [];
//   words.forEach(word => {
//     let letters = word.split('');
//     let capped = letters[0].toUpperCase();
//     capWord.push(letters.join(''));
//     letters.splice(0, 1, capped);
//   });
//     return capWord.join(' ');
// };
//
// alert(capString);



// function perString(string){
//   let parseLetter = string.charAt(0).toUpperCase();
//   let stringArr = string.split('');
//   stringArr.splice(0, 1, parseLetter);
//   string = stringArr.join('');
//   if(string.charAt(string.length - 1) !== '.') string = string + `.`;
//   return string;
// }
//
// let answer = perString(parseInt(prompt(`Enter you're string`, 'string')));
// alert(answer)

// function reversehalves(string){
//   let halfIndex = string.length / 2;
//   let firstHalf = string.substring(0, halfIndex);
//   let secondHalf = string.substring(halfIndex + 1, string.length);
//   alert(`${secondHalf}${firstHalf}`);
// }
//
// reversehalves(prompt("give me a sentence", "hello world!"));

function isPalindrome(string) {
  let reversed = string.split('').reversed().join('');
  if(string === reversed) return true
  return false
}
