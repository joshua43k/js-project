let movie1 = ["Revenge of the sith", "Ewan McGregor"];
let movie2 = ["A new hope", "Mark Hamill"];
let movie3 = ["Empier striks back", "Mark Hamill"];
let movie4 = ["Reture of the jedi", "Mark Hamill"];
let movie5 = ["Hot fuzz", " Simon Pegg"];
let favMovies = [];
let topAndLeastFavMovie = [];

favMovies.push(movie1, movie2, movie3, movie4, movie5);
topAndLeastFavMovie.push(`${favMovies[0]} : ${favMovies[4]}`);


alert(`${favMovies[0][0]}, ${favMovies[1][0]}, ${favMovies[2][0]}, ${favMovies[3][0]}, ${favMovies[4][0]}.`);
alert(topAndLeastFavMovie);
alert(favMovies.length);
