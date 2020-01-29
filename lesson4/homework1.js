/*Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
 Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
 соответствующее сообщение с помощью console.log и вернуть пустой объект.*/
 function numderInObjekt() {
     let number = prompt('Введите число от 0 до 999', '0');
     let objeck = {};
     if (number > 999 || number < 0) {
         console.log('Недопустимое число');
         console.log(typeof(number));
         return objeck;
     }
     switch (number.length){
         case 1:
            objeck.единицы = number[number.length - 1];
            break
        case 2:
            objeck.единицы = number[number.length - 1];
            objeck.десятки = number[0];
            break
        case 3:
            objeck.единицы = number[number.length - 1];
            objeck.десятки = number[number.length - 2];
            objeck.сотни = number[0];
            break
     }
        console.log(objeck);
        return objeck;
 }

 numderInObjekt();