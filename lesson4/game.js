function question(placeText) {
    alert(placeText);
    chose = +prompt('1.Пойти в ' + place2 + '\n' +  '2.Пойти к ' + place3 + '\n' +'3.Подождать' + '\n' + '4.Спать' + '\n' + 'Ответ напишите числом', 0);
    return chose
}
let player = prompt('Имя игрока');
let chose;
let playerStats = {
    name: player,
    progres: 0
}

let place = 'откуда начали'
let place2 = 'лес';
let place3 = 'реке';

let place1Text = 'Вы долго ждали, но теперь надо что-то предпринять';
let place2Text = 'Вы подошли к лесу';
let place3Text = 'Вы подошли к реке';

function game() {
    switch (playerStats.progres) {
        case 0: 
            chose =  question(place1Text);
            break;
        case 1: 
            chose =  question(place2Text);
            break;
        case 2:
            chose =  question(place3Text);
            break;
        case 4:
            return    
    }
    if (chose == 1) playerStats.progres = 1;
    if (chose == 2) playerStats.progres = 2;
    if (chose == 4) playerStats.progres = 4;
    game();
}

game();
