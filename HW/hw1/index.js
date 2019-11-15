const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const a = prompt("enter, your login:");
console.log(a);
if (a === null) {
    alert('Отменено пользователем!');
}
if (adminLogin === a) {
    const b = prompt("enter your password:");
    if (b === null) {
        alert('Отменено пользователем!');
    }
    if (adminPassword === b) {
        alert ('Добро пожаловать!');
    }
    else{
        alert ("Доступ запрещен, неверный пароль!");}
    } 
else{
    alert ("Доступ запрещен, неверный пароль!");
}



    



    



















