// ------------------------
//     Задание 4

/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.

  1) сделать проверку что введно, строка или нет
  2) если строка , пробуем обрезат текст, оставив цифры Number.parseFloat
  3) если не строка - null
*/

function getPx(str) {
    if (isNaN(str) === NaN) {
        return str.Number.parseFloat()
    }

}


// Вызовы функции для проверки
console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null



// ------------------------
//     Задание 3

/*
  Напишите функцию checkForSpam(str)

  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale

  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false

  PS: слова могут быть в произвольном регистре
*/
//
// function checkForSpam (str) {
//     if (str.toLowerCase().indexOf('sale') > 0) {
//         return 'true'
//     } else if (str.toLowerCase().indexOf('spam') > 0) {
//         return 'true'
//     } else {
//         return 'false'
//     }
// }
//
//
// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false
//
// console.log( checkForSpam('JavaScript weekly newsletter') ); // false
//
// console.log( checkForSpam('Get best sale offers now!') ); // true
//
// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true



// ------------------------
//     Задание 2

/*
  Напишите функцию formatString(str)

  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее.
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего
    возвращает укороченную версию.
*/

// function formatString (str) {
//     if (str.length < 40 ) {
//         return (str)
//     } else {
//         return (str.slice(0,39) + '...')
//     }
// }
//
// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка
//
// console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка
//
// console.log(
//     formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка
//
// console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка


// ------------------------
//     Задание 1

/*
  Напишите функцию checkNumberType(num)

  Функция получает число num как аргумент и возвращает
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// function checkNumberType (num) {
//     if (num % 2 === 0) {
//         return 'Even'
//     }else {
//         return 'Odd'
//     }
// }
//
// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'
//
// console.log( checkNumberType(46) ); // 'Even'
//
// console.log( checkNumberType(3) ); // 'Odd'
//
// console.log( checkNumberType(17) ); // 'Odd'
