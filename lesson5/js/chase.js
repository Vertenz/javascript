function create(classDiv, cellNumber) {
    let cell = document.createElement("div");
    cell.className = classDiv;
    cell.classList.add(classDiv + '_' + cellNumber);
    return cell
} // функция создания дива с классом черной или белой клетки
/*TODO переименовать no в исключение*/
function textLetterCell(name, inner, i, no, no2) {
    if (i !== no && i !== no2) {
        name.innerHTML = inner;
    } else return true;
    return true;
}
function textNumberCell(name, inner, i, from, to) {
    if (i == from || i == to) {
        name.innerHTML = inner;
    } else return true;
    return true;
}


/*TODO доделать цифры сбоку*/

function chaseBord(line, cellNumber) {
    let lineBord = line; //проверяем какая линия создается
    let cellName = cellNumber; //номер клетки, для создания класса с ее номером, для дольнейшего обращения именно к ней
    let letters = [ null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let bord = document.querySelector('.chase');
    if (lineBord > 10) {
        return lineBord;
    } // если есть все линий, то возвращаем значение
    switch (lineBord) {
        case 1:
            for (let i = 0; i <= 9; i++) {
                let cell;
                cell = create('title', cellName);
                bord.append(cell);
                cellName++;
                textLetterCell(cell, letters[i], i, 0, 9);
            }
            lineBord++;
            chaseBord(lineBord, cellName);
            break;
        case 3:
        case 5:
        case 7:
        case 9:
            for (let i = 1; i <= 10; i++) {
                let cell;
                if (i == 1 || i == 10){
                    cell = create('title', cellName);
                    bord.append(cell);
                    cellName++;
                    textNumberCell(cell, 10 - line, i, 1, 10);
                } else {
                    if (i % 2 == 0) cell = create('cellBlack', cellName);
                    else cell = create('cellWhite', cellName);
                    bord.append(cell);
                    cellName++;
                    textNumberCell(cell, 10 - line, i, 0, 10);
                }
            } // создаем 8 клеток, меняя черный див и белый
            lineBord++; //переходим к следющей линии
            chaseBord(lineBord, cellName);
            break;
        case 2:
        case 4:
        case 6:
        case 8:
            for (let i = 1; i <= 10; i++) {
                let cell;
                if (i == 1 || i == 10) {
                    cell = create('title', cellName);
                    bord.append(cell);
                    cellName++;
                    textNumberCell(cell, 10 - line, i, 1, 10);
                } else {
                    if (i % 2 == 0)
                        cell = create('cellWhite', cellName);
                    else cell = create('cellBlack', cellName);
                    bord.append(cell);
                    cellName++;
                    textNumberCell(cell, 10 - line, i, 1, 10);
                }
            }
            lineBord++;
            chaseBord(lineBord, cellName);
            break;
        case 10:
            for (let i = 0; i <= 9; i++) {
                let cell;
                cell = create('title', cellName);
                bord.append(cell);
                cellName++;
                textLetterCell(cell, letters[i], i, 0, 9);
            }
            lineBord++;
            chaseBord(lineBord, cellName);
            break;
        case 11:
            break;
    }
}//функция создания полной доски

let line = 1;
if (line < 10) {
    line = chaseBord(line, 1);
}
