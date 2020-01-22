function math (a, b) {
    let sum = a + b;
    console.log('сумма чисел равна: ' + sum);
    let mult = a * b;
    console.log('произведение числе равно: ' + mult);
    let div = a / b;
    console.log('отношение чисел: ' + div);
    let sub = a - b;
    console.log('разница чисел: ' + sub);
}

alert('задание 5');
let x = +prompt('введите число', 0);
let y = +prompt('введите второе число', 0);
math(x, y);