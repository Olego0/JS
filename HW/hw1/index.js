const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const a = prompt("enter, your login:");
console.log(a);
if (adminLogin === a) {
    const b = prompt("enter your password:");

    if (adminPassword === b) {
        alert ('Добро пожаловать!');}
    else if(adminPassword != b){
        alert ("Доступ запрещен, неверный пароль!");}
    else(adminPassword === null){
        alert('Отменено пользователем!');}
    }
else if(adminLogin != a){
    alert ("Доступ запрещен, неверный пароль!");
}
else if(adminLogin === null){
    alert('Отменено пользователем!');
}
    



    

    

















