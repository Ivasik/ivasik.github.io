
function login() {
var login=prompt("Введите ваш логин: ");
var passpr=prompt("Введите пароль: ");
var pass=prompt("Подтвердите пароль: ");
if  (pass == passpr)
	alert("Все верно! С возвращением, " + login + "!")

else alert("Пароли не совпадают!");
}
