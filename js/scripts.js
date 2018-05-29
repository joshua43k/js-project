let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let name = prompt('your name');
let favColor = prompt('Out of these colors type your favorite: red, orange, yellow, green, blue, pink, purple, black, white, and grey')

switch(favColor.toLowerCase()){
  case 'red':
    alert(`"Red five standing by"quote form ${name.toUpperCase()} ${month}/${day}/${year}`);
    break;
  case 'orange':
    alert(`"Its a food, drink and color whats more to love about it"quote form ${name.toUpperCase()} ${month}/${day}/${year}`);
    break;
  case 'yellow':
    alert(`"What's wrong, dude, you yellow?! That's what I think you, yellow belly"quote form ${name.toUpperCase()} ${month}/${day}/${year}`);
    break;
  case 'green':
    alert(`"My favorite character in star wars was yoda"quote form ${name.toUpperCase()} ${month}/${day}/${year}`);
    break;
  case 'blue':
    alert(`"It's over Anakin! I have the high ground!"quote form ${name.toUpperCase()} ${month}/${day}/${year}`);
    break;
  case 'pink':
    alert(`"The dark side of the force is a pathway to many abilities, some considered to be unnatural"quote form ${name.toUpperCase()} ${month}/${day}/${year}`);
    break;
  case 'purple':
    alert(`"In the name of the Galactic Senate of the Republic, you're under arrest, Chancellor."quote form ${newName.toUpperCase()} ${month}/${day}/${year}`);
    break;
  case 'black':
    alert(`"Did you ever hear the tragedy of Darth Plagueis The Wise"quote form ${name.toUpperCase()} ${month}/${day}/${year}`);
    break;
  case 'white':
    alert(`"Only a sith deals in absolutes"quote form ${name.toUpperCase()} ${month}/${day}/${year}`);
    break;
  case 'grey':
    alert(`"Unlimited Power!"quote form ${name.toUpperCase()} ${month}/${day}/${year}`);
    break;
  default :
    alert(`Your color ${favColor} was not listed`);
    break;
}
