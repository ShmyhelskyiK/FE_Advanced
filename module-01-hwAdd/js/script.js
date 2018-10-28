const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const cancelUser = 'Отменено пользователем!';
const accessDenied = 'Доступ запрещен!';

let enterLogin = prompt('Введите логин', '');

if (enterLogin === adminLogin) {
    let enterPass = prompt('Введите пароль', '');
    if (enterPass === adminPassword){
        alert('Добро пожаловать!');
    } else  if (enterPass === null) {
        alert(cancelUser);
    } else {
        alert(accessDenied);
    }
} else if (enterLogin === null) {
    alert(cancelUser);
} else {
    alert(accessDenied);
}
