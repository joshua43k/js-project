let todoArr = [];

let todo1 = [prompt("What is your first todo", "work")];
let todo2 = [prompt("What is your second todo", "nothing")];
let todo3 = [prompt("What is your third todo", "clean")];

todoArr.push(todo1,todo2,todo3);


// console.log(todoArr[0][0])
for (let i = 0; i < todoArr.length; i++) {
    let timeline = prompt(`how many days will it take to get ${todoArr[i][0]} done?`, "2");

    timeline = !isNaN(parseInt(timeline)) ? parseInt(timeline) : 2;

    todoArr[i].unshift(timeline);
}

// console.log(todoArr, 'after adding time it will take');
todoArr.sort();

let longest = todoArr[0];
let j = 0;

while(j < todoArr.length) {
  if(todoArr[j][0] > longest[0]) longest = todoArr[j];
  j++;
}

longest.push('this');

let z = 0;

do {
  if(todoArr[z][todoArr[z].length - 1] !== 'this') {
    todoArr[z].push("done");
  }
  z++
} while(z < todoArr.length);
