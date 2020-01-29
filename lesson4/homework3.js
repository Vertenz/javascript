/**. создать рекурсивную функцию сравнения всего - цифры (готово), строчки (готово), объекта, массива, булеана(готово) и тд
 * 
function comparison (a, b) {
     let result = false;
     if (a === b) return true //тут пройдет проверка текста/цифры, НО не отработает сравнеие массивов, надо ниже написать сравнение их внутренностей

    // ваша логика ? result = comparison(a, b) : выход  / нужно использовать рекурсию

    // return result
}*/

function comparison (a, b) {
    let result = false;
    if (a.length !== b.length) return false //сравнение длины, если разные, то уже отличаются
    if (a === b) return true //тут пройдет проверка текста/цифры, НО не отработает сравнеие массивов, надо ниже написать сравнение их жидких внутренностей из жепы
    if (typeof a == 'object' && typeof b == 'object') {
        for (j = 0; j < a.length; j++) {
            result = comparison(a[j], b[j])
        }
        for (let prop in a) {
            result = comparison(a[prop], b[prop]);
        }
    } 
   return result
} 


let a = {
    1: 'one',
    2: 'two'
}        
let b = {
    1: 'one',
    2: 'two'
}      

let x = comparison (a, b);
console.log(x);

