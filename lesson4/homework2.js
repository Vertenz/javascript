/*
создать функцию конструтор для фруктов Fruit
let apple = new Fruit('зеленое', 'круглое')
console.log(apple) // { ... }
let banan = new Fruit('желтый', 'длинный')
+
задайте метод, showFruit, который будет у созданных объектов  apple и banan, который выводит цвет и форму через пробел

при вызове
apple.showFruit() 
покажет в консоли: 'зеленое круглое'

*/
/*function Fruit(color, form) {
    this.color = color;
    this.form = form;
}

let apple = new Fruit('зеленое', 'круглое');
console.log(apple);

class showFruit */

function Fruit(color, form) {
    this.color = color;
    this.form = form;
  
    this.showFruits = function() {
      console.log( this.color + ' ' + this.form);
    };
  }
  
  let banan = new Fruit('желтый', 'длинный');
  
  banan.showFruits();