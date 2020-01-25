/* С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
    Товары в корзине хранятся в массиве. Задачи:

a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */
function countBasketPrice(arr) {
    let totalPrise = 0;
    for (j = 0; j <= arr.length - 1; j++) {
        totalPrise += arr[j];
    }
    return totalPrise;
}

let cart = [456, 789, 45, 156, 1325];
let totalPrice = countBasketPrice(cart);
console.log(totalPrice);
