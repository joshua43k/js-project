/*DAY 4.5*/
  //Loops
  // let food = [["apples", 4.99], ["banana", 3.99], ["food", 1.99]];
    //while loop
    // let i = 0
    // while (i < 2 /*arr.length*/) { //parameters
    //   // console.log(arr[i]);
    //   // console.log(i);
    //   // i++; //incrementor
    // }

    //for loop
    // for (let i = 0; i < food.length; i++) {
    //   console.log(food[i]);
    // }

    //Do while loop
    // let i = 0;
    // let newFood = ["cheese", 5.99];
    // do {
    //   if(i === 1) food[i].push(newFood);
    //   i++;
    // } while(i < food.length);
    // console.log(food);

    //For Each loop
    // food.forEach((f) => {
    //   console.log(f);
    // });

    //try it our
    // for(let i = food.length - 1; i >= 0; i--) {
    //   console.log(food[i]);
    // }

/*DAY 5*/
  //Funciton
  /*what a funciton allows you to take a pice of code and reuse it later on in the code//the arrgument in a fuction definition has no value untill you call it//simuler to class
  why to group stuff and pase it around*/
    // function capitalCase(string) {//fuction definition
    //   let words = string.split(' ');
    //   words.forEach(word => {
    //     let letters = word.split('');
    //     let capped = letters[0].toUpperCase();
    //     letters.splice(0, 1, capped);
    //   });
    //   return words.join(' ');
    // };
    // let newString = capitalCase("peter piper");
    // console.log(newString);

    // funciton(stuff) {
    //   console.log(stuff);
    // }

    //Arrow function
    // let coolFun = (stuff) => {// if your arrgument is one then you dont need ()
    //   console.log(stuff);
    // }


    //try
    // function dogYears(num) {
    //   if (isNaN(num)) {
    //     return NaN;
    //   }
    //   return num * 7;
    // }
    //
    // let newNum = dogYears(prompt("enter a number to see how old it is in dog years", 1))
    // alert(newNum)

    //try 2
    function lifetimeCalculator(age, dailyUse) {
      if(!isNaN(age) && !isNaN(dailyUse)) {
        const death = 80;
        return (death - age) * (dailyUse * 365);
      } else {
        userAge = prompt('how old are you?', '30');
        userUse = prompt("How much do you use every day?");
        lifetimeCalculator(parseInt(userAge), parseInt(userUse));
      }
    };

    let userAge = prompt('how old are you?', '30');
    let userUse = prompt("How much do you use every day?", '1');
    let usage = lifetimeCalculator(parseInt(userAge), parseInt(userUse));

    alert(`You will need ${usage} to last until you're 80.`);
