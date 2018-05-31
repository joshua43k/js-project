/* DAY 3.5 */
//Ternary //is like a if else but on one line of code //// condition ? exp1 : exp2
  // let exp2 = inside/*condition*/ ? "i am inside"/*expr1*/ : 'i am not inside'/*expr2*/
  // console.log(exp2);
  //
  // let number = 10
  // let exp1 = (number > 20)/*condition*/ ? "number bigger"/*expr1*/ : "number smaller" /*expr2*/
  // console.log(exp1);
  //
  // let name = false;
  // let email = true;
  // let exp3 = name/*condition*/ ? "i have name"/*expr1*/ : emai/*condition2*/l ? "i have email"/*expr2*/ : "i have none"/*default expr*/
  // console.log(exp3);
  //
  // let hungery = true;
  // let money = 5;
  // let exp4 = hungery/*condition1*/ ? ((money > 10)/*condition2*/ ? "hungery and have 10 money"/*expr1 of 2*/ : "hungery and have 5 money"/*expr2 of 2*/) : ((money > 10)/*condition3*/ ? "not hungery and have 10 money"/*expr1 of 3*/ : "not hungery and have 5 money"/*expr2 of 3*/);
  // console.log(exp4);
/* DAY 4 */

//Arrays
// hige level list type obj //has acsess to length //has a index //values inside can be any data type //each value is separated by a comma //denoted by square brackets( [] ) //Have access to methods, much like Strings do.
  // let arrValue = ["index 0"/*this is a index//arrays start at index 0*/, "index 1", 2, {}, [], true];
  // console.log(arrValue[6]);
  let arr = ["dunkirk", 4, true, "dunkirk", 2018];
  // console.log(arr, arr[arr.length - 1], arr[arr.length - 2]);

  // //IsArray: Is this an array?
  // Array.isArray(arr);
  // console.log(arr);
  // //Push: Add elements to the end of the array
  // arr.push("mac and cheese")
  // console.log(arr);
  // //Unshift: Add elements to the beginning of an array
  // arr.unshift("2018");
  // console.log(arr);
  // //Pop: Remove the last element in an array and return it
  // const food = arr.pop();
  // console.log(arr, food);
  // //Shift: Remove the first element in an array and return it
  // const year = arr.shift();
  // console.log(arr, year);
  // //Splice: Remove elements and optionally add others. Returns the removed elements in a new array
  // arr.splice(2/*index*/);
  // arr.splice(2/*index*/, 1/*deleteCount*/);
  // arr.splice(2, 1, false)
  // console.log(arr);
  // //Slice: make a copy of the original indexes but don't modify the original array
  // let copy = products.slice();
  // console.log(arr);
  // //IndexOf: get the index of a member of your array
  // console.log(arr.indexOf("dunkirk"));
  // //lastIndexOf: Get the last index of a member of your array
  // console.log(arr.lastIndexOf("dunkirk"));
  // //Reverse the order of your array
  // console.log(arr.reverse());
  // //Sort your array
  // console.log(arr.sort());
  //How to acsess a array in a array
    // let movie = [['Star Wars VI', '1983'], ['Return of the King', '2003'], ['Equilibrium', '2002']];
    // movie[0][1];
    //
    // var favoriteMovie = ['Star Wars VI', '1983'];
    // var secondFavorite = ['Return of the King', '2003'];
    // var thirdFavorite = ['Equilibrium', '2002'];
    // var myFavoriteMovies = [];
    // myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);
    // //Result:
    // [['Star Wars VI', '1983'], ['Return of the King', '2003'], ['Equilibrium', '2002']];
    //
  //try it out
    let favMovies = [["Revenge of the sith", "Ewan McGregor"], ["A new hope", "Mark Hamill"], ["Empier striks back", "Mark Hamill"], ["Reture of the jedi", "Mark Hamill"], ["Hot fuzz", " Simon Pegg"]]
    let titles = [];
    titles.push(favMovies[0][0],favMovies[1][0],favMovies[2][0],favMovies[3][0],favMovies[4][0])
    alert(titles);
