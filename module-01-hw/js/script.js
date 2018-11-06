const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const canceledByUser = 'Отменено пользователем!';
const warningAccessDenied = 'Доступ запрещен!';

let enterLogin = prompt('Введите логин', '');

if (enterLogin === adminLogin) {
    let enterPass = prompt('Введите пароль', '');
    if (enterPass === adminPassword){
        alert('Добро пожаловать!');
    } else  if (enterPass === null) {
        alert(canceledByUser);
    } else {
        alert(warningAccessDenied);
    }
} else if (enterLogin === null) {
    alert(canceledByUser);
} else {
    alert(warningAccessDenied);
}
