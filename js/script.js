"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let i;

for (i = 1; i <=numberOfFilms; i++) {
    const filmName = prompt("Один из последних просмотренных фильмов", ""),
        filmRate = +prompt("На сколько его оцените?", "");
    personalMovieDB.movies[filmName] = filmRate;
};

console.log(personalMovieDB);