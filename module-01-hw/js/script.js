const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const messageCanceled = 'Отменено пользователем!';
const messageAccessDenied = 'Доступ запрещен!';

let enterLogin = prompt('Введите логин', '').toLowerCase();
// toLowerCase(enterLogin);

if (enterLogin === adminLogin) {
    let enterPass = prompt('Введите пароль', '');
    if (enterPass === adminPassword){
        alert('Добро пожаловать!');
    } else  if (enterPass === null) {
        alert(messageCanceled);
    } else {
        alert(messageAccessDenied);
    }
} else if (enterLogin === null) {
    alert(messageCanceled);
} else {
    alert(messageAccessDenied);
}
