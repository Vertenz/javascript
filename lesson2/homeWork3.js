/*
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом
*/
alert('задание 3');
let firstNumber = +prompt('Введите число', 0);
let secondNumber = +prompt('Введите второе число', 0);

if (firstNumber >= 0 && secondNumber >= 0) {
    alert('Разнича чисел равна ' + Math.abs(firstNumber - secondNumber));
} else if (firstNumber < 0 && secondNumber < 0) {
    alert('Произведение чисел равно ' + (firstNumber * secondNumber));
} else {
    alert('Сумма чисел равно ' + (firstNumber + secondNumber))
}