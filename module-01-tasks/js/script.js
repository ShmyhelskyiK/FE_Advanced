// Задание 10
let question = prompt('Введите от 1 до 5');
console.log(question);

switch (question) {
    case null:
        alert('очень жаль, приходите еще!');
        break;
    case "1":
        alert("Каталог хостелов");
        break;
    case "2":
        alert("Каталог бюджетных отелей");
        break;
    case "3":
        alert("Каталог отелей ***");
        break;
    case "4":
        alert("Каталог отелей ****");
        break;
    case "5":
        alert("Каталог лучших отелей");
        break;
    default:
        alert('Неверный ввод, возможные варианты 1-5!');
    }

// Задание 9 ?????
// let hours = 7;
// let minutes = 3;
// let seconds = 42;
//
// const time = `${hours}:${minutes}:${seconds}`;
//
// console.log('Time is: ', time);

// Задание 8
// const num = Number.parseInt(Math.random() * 100);
// let type;
// if (num % 2 === 0) {
//     type = 'even'
// } else {
//     type = 'odd'
// }
// console.log(`${num} is ${type}`);

// Задание 7
// let question = prompt('Введите произвольное целое число');
// if (question === null){
//    alert('Приходите еще!');
// } else if (Number(question)) {
//     alert('Спасибо!');
// } else {
//     alert('Необходимо было ввести целое число!');
// }

// Задание 6
// let year = 2018;
// let question = prompt('Какой сейчас год?');
// if ( year == question) {
//     alert('Все верно!');
// } else {
//     alert('Но ведь на вдоре 2018!')
// }

//
// Задание 5
// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";
//
// let totalWidth = Number.parseInt(padding) + Number.parseInt(border )+ Number.parseInt(contentWidth)+ 'px';
//
// console.log(totalWidth); // '125px'

// Задание 4
// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';
//
// const message = `${name} прибывает на отдых ${date} в ${roomType}.`;
//
// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.

// Задание 3
// let question = prompt('Как Вас зовут?');
// alert("Добро пожаловать, " + question);

// Задание 2
// const day = 02;
// const month = 10;
// const year = 2017;
//
// const date = "\/\/ " + day + "\\" + month + "\\" + year;
//
// console.log(date); // 02\10\2017


// Задание 1
// let name = 'Mango';
// let guest = name;
// console.log(guest);