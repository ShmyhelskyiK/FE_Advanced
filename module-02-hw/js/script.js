/*
  Написать следующий скрипт:
    - При загрузке страницы пользователю предлагается ввести через prompt число.
      Число введенное пользователем записывается в массив чисел.

    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте
      цикл while или do...while.

    - Делать проверку того, что пользователь ввел именно число, а не произвольный
      набор символов, не обязательно, но желательно. В случае некорректного ввода
      просто выдайте alert с текстом 'Было введено не число, попробуйте еще раз',
      при этом результат prompt записывать в массив чисел не нужно, после чего
      снова пользователю предлагается ввести число в prompt.

    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять
      массив введенных чисел, сложить общую сумму всех элементов массива и
      записать ее в переменную. Используйте цикл for или for...of.

    - Вывести alert с текстом `Общая сумма чисел равна ${сумма}`
*/

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Введите число...");

  if (userInput === null) {
    alert("Вы закончили ввод данных.");
    break;
  }
  if (isNaN(userInput)) {
    alert("Было введено не число, попробуйте еще раз!!!!");
    continue;
  }
  if ((userInput = parseFloat(userInput))) {
    numbers.push(userInput);
  }
} while (true);

// while (true) {
//   userInput = prompt("Введите число...");
//   //
//   if (userInput === null) {
//     alert("Вы закончили ввод данных.");
//     break;
//   }
//   if (isNaN(userInput)) {
//     alert("Было введено не число, попробуйте еще раз!!!!");
//     // continue;
//   }
//   if ((userInput = parseFloat(userInput))) {
//     numbers.push(userInput);
//   }
// }
//
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

alert(`Сумма чисел равна ${total}`);
