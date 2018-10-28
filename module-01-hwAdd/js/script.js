let taba = 6;
let sharm = 15;
let hurgada = 25;
let userMember = prompt("Введите число участников: ", 1);

if (userMember <= 0 && userMember%2 === 0) {
    alert("Ошибка ввода");
}

else if (userMember % 1 !== 0) {
    alert("Ошибка ввода!!!");
}

else if (userMember <= taba) {

    if (confirm("Есть место в Taba. Согласны?")===true) {
        alert('Приятного путешествия в группе Taba');
        alert('Осталось  ' + (6 - userMember) +' свободных мест');
    } else if (confirm("Есть место в Sharm. Согласны?")===true) {
        alert('Приятного путешествия в группе Sharm');
        alert('Осталось  ' + (15 - userMember) + ' свободных мест');
    } else if (confirm("Есть место в Hurgada. Согласны?")===true) {
        alert('Приятного путешествия в группе Hurgada');
        alert('Осталось  ' + (25 - userMember) + ' свободных мест');
    } else
        alert('Нам очень жаль, приходите еще!');
}

else if (userMember <= sharm) {

    if (confirm("Есть место в Sharm. Согласны?")===true) {
        alert('Приятного путешествия в группе Sharm');
        alert('Осталось  ' + (15 - userMember) + ' свободных мест');
    } else if (confirm("Есть место в Hurgada. Согласны?")===true) {
        alert('Приятного путешествия в группе Hurgada');
        alert('Осталось  ' + (25 - userMember) + ' свободных мест');
    } else
        alert('Нам очень жаль, приходите еще!');
}

else if (userMember <= hurgada) {

    if (confirm("Есть место в Hurgada. Согласны?")===true) {
        alert('Приятного путешествия в группе Hurgada');
        alert('Осталось  ' + (25 - userMember) + ' свободных мест');
    } else
        alert('Нам очень жаль, приходите еще!');
}

else {
    alert("Мест нету!")
}