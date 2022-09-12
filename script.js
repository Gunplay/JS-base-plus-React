"use strict"

// const hamburger = 5;
// const fries = null; // null
// // const cola = true;

// // false = 0, ' ', null, undefind, NaN; ВСЁ ОСТАЛЬНОЕ TRUE!
// if (hamburger && fries) {
//     console.log('Я сыт!');
// } else if ( fries == 0 || fries == null) {
//     console.log('Товар закончился!');
// }
// else {
//     console.log('Я голоден!')
// } 

// console.log((hamburger && fries));


const hamburger = 3;
const fries = 1;
const cola = 0;
const bigTasty = 2;
const bigMag = 3;

// // Возвращает первый ложный ответ! 0! false
// console.log(hamburger === 3 && cola === 1 && fries);

// console.log( 1 )

// if ( hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Mы уходим!');
// }



// Exercise NEW
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// // возвращает 1 истенное!
// if ( hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все Довольны!');
// } else {
//     console.log('Mы уходим!');
// }
// // если всё ложно || возвращает последнее ложное 0! null!
// // console.log( hamburger || cola || fries) ;

// // console.log(hamburger === 3 && cola === 2);

// console.log( hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

// // New TASK

// let johnReport, alexReport = 'done', samReport, mariaReport = 'done';

// // console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0); //true




// HOME WORK

// Что выведет в консоль код?

 
//console.log( NaN || 2 || undefined ); // 2
 
// console.log( NaN && 2 && undefined ); //NaN
 
// console.log( 1 && 2 && 3 ); // 3
 
//console.log( 1 && 2 || !3 ); // false !1
//console.log( 25 || null && !3 ); //25
 
// console.log( NaN || null || !3 || undefined || 5); //5
 
// console.log( NaN || null && !3 && undefined || 5); //5
 
// console.log( 5 === 5 && 3 > 1 || 5); //true



// Выполняется ли условие?

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// Выполняется ли условие?

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }


//Выполняется ли условие?

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
