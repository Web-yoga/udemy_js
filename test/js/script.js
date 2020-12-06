"use strict";
/* Урок 8 */
//Вывод переменной в строке
let x = "переменная";
let res = `${x} вставляется в строку методом интерполяции`;
console.log(res);

/* Урок 12 */
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const   a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", ""),
        c = prompt("Один из последних просмотренных фильмов?", ""),
        d = prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);