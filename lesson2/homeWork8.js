alert('задание 8');
function power(val, pow){
    if (pow <= 1){
        return val;
    } else {
        pow--;
       return val * power(val, pow);
    }

}
let ch = +prompt('какое число будем возводить в степень?', 1);
let up = +prompt('в какую степенеь будем возводить', 1);

let resolt = power(ch, up);
alert(resolt);
