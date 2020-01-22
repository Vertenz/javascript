/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/

function mathOperation(arg1, arg2, operation) {
    let num;
    switch (operation){
        case 'sum':
            num = arg1 + arg2;
            console.log(num);
            break;
        case 'mult':
            num = arg1 * arg2;
            console.log(num);
            break;
        case 'div':
            num = arg1 / arg2;
            console.log(num);
            break;
        case 'sub':
            num = arg1 - arg2;
            console.log(num);
            break;
    }
    return num;
}
alert('Задание 6');
let arg1 = +prompt('Укажите первое число', 0);
let arg2 = +prompt('Укажите второе число', 0);
let operation = prompt('Укажите назавание математической операции. sum - суммирование, mult - умножение, div - деление, sub - вычитание', 'sum');
let num = mathOperation(arg1, arg2, operation);
alert('ответ ' + num);