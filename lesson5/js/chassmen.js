
const whiteChess = [];
whiteChess[0] = new Image();
whiteChess[0].src = 'img/wt_rook.png';
whiteChess[1] = new Image();
whiteChess[1].src = 'img/wt_knight.png';
whiteChess[2] = new Image();
whiteChess[2].src = 'img/wt_bishop.png';
whiteChess[3] = new Image();
whiteChess[3].src = 'img/wt_queen.png';
whiteChess[4] = new Image();
whiteChess[4].src = 'img/wt_king.png';
whiteChess[5] = new Image();
whiteChess[5].src = 'img/wt_bishop.png';
whiteChess[6] = new Image();
whiteChess[6].src = 'img/wt_knight.png';
whiteChess[7] = new Image();
whiteChess[7].src = 'img/wt_rook.png';
whiteChess[8] = new Image();
whiteChess[8].src = 'img/wt_pawn.png';
whiteChess[9] = new Image();
whiteChess[9].src = 'img/wt_pawn.png';
whiteChess[10] = new Image();
whiteChess[10].src = 'img/wt_pawn.png';
whiteChess[11] = new Image();
whiteChess[11].src = 'img/wt_pawn.png';
whiteChess[12] = new Image();
whiteChess[12].src = 'img/wt_pawn.png';
whiteChess[13] = new Image();
whiteChess[13].src = 'img/wt_pawn.png';
whiteChess[14] = new Image();
whiteChess[14].src = 'img/wt_pawn.png';
whiteChess[15] = new Image();
whiteChess[15].src = 'img/wt_pawn.png';


const blackChess = [];
blackChess[0] = new Image();
blackChess[0].src = 'img/bl_rook.png';
blackChess[1] = new Image();
blackChess[1].src = 'img/bl_knight.png';
blackChess[2] = new Image();
blackChess[2].src = 'img/bl_bishop.png';
blackChess[3] = new Image();
blackChess[3].src = 'img/bl_queen.png';
blackChess[4] = new Image();
blackChess[4].src = 'img/bl_king.png';
blackChess[5] = new Image();
blackChess[5].src = 'img/bl_bishop.png';
blackChess[6] = new Image();
blackChess[6].src = 'img/bl_knight.png';
blackChess[7] = new Image();
blackChess[7].src = 'img/bl_rook.png';
blackChess[8] = new Image();
blackChess[8].src = 'img/bl_pawn.png';
blackChess[9] = new Image();
blackChess[9].src = 'img/bl_pawn.png';
blackChess[10] = new Image();
blackChess[10].src = 'img/bl_pawn.png';
blackChess[11] = new Image();
blackChess[11].src = 'img/bl_pawn.png';
blackChess[12] = new Image();
blackChess[12].src = 'img/bl_pawn.png';
blackChess[13] = new Image();
blackChess[13].src = 'img/bl_pawn.png';
blackChess[14] = new Image();
blackChess[14].src = 'img/bl_pawn.png';
blackChess[15] = new Image();
blackChess[15].src = 'img/bl_pawn.png';

// let letter + line = document.querySelector('.cell' + first(|| second)+ '_' + number);

const a8 = document.querySelector('.cellWhite_12');
const b8 = document.querySelector('.cellBlack_13');
const c8 = document.querySelector('.cellWhite_14');
const d8 = document.querySelector('.cellBlack_15');
const e8 = document.querySelector('.cellWhite_16');
const f8 = document.querySelector('.cellBlack_17');
const g8 = document.querySelector('.cellWhite_18');
const h8 = document.querySelector('.cellBlack_19');
const a7 = document.querySelector('.cellBlack_22');
const b7 = document.querySelector('.cellWhite_23');
const c7 = document.querySelector('.cellBlack_24');
const d7 = document.querySelector('.cellWhite_25');
const e7 = document.querySelector('.cellBlack_26');
const f7 = document.querySelector('.cellWhite_27');
const g7 = document.querySelector('.cellBlack_28');
const h7 = document.querySelector('.cellWhite_29');
/**/
const a2 = document.querySelector('.cellWhite_72');
const b2 = document.querySelector('.cellBlack_73');
const c2 = document.querySelector('.cellWhite_74');
const d2 = document.querySelector('.cellBlack_75');
const e2 = document.querySelector('.cellWhite_76');
const f2 = document.querySelector('.cellBlack_77');
const g2 = document.querySelector('.cellWhite_78');
const h2 = document.querySelector('.cellBlack_79');
const a1 = document.querySelector('.cellBlack_82');
const b1 = document.querySelector('.cellWhite_83');
const c1 = document.querySelector('.cellBlack_84');
const d1 = document.querySelector('.cellWhite_85');
const e1 = document.querySelector('.cellBlack_86');
const f1 = document.querySelector('.cellWhite_87');
const g1 = document.querySelector('.cellBlack_88');
const h1 = document.querySelector('.cellWhite_89');

//BLACK CHESSMAN add
a8.append(blackChess[0]);
b8.append(blackChess[1]);
c8.append(blackChess[2]);
d8.append(blackChess[3]);
e8.append(blackChess[4]);
f8.append(blackChess[5]);
g8.append(blackChess[6]);
h8.append(blackChess[7]);
a7.append(blackChess[8]);
b7.append(blackChess[9]);
c7.append(blackChess[10]);
d7.append(blackChess[11]);
e7.append(blackChess[12]);
f7.append(blackChess[13]);
g7.append(blackChess[14]);
h7.append(blackChess[15]);
//WHITE CHESSMAN add
a1.append(whiteChess[0]);
b1.append(whiteChess[1]);
c1.append(whiteChess[2]);
d1.append(whiteChess[3]);
e1.append(whiteChess[4]);
f1.append(whiteChess[5]);
g1.append(whiteChess[6]);
h1.append(whiteChess[7]);
a2.append(whiteChess[8]);
b2.append(whiteChess[9]);
c2.append(whiteChess[10]);
d2.append(whiteChess[11]);
e2.append(whiteChess[12]);
f2.append(whiteChess[13]);
g2.append(whiteChess[14]);
h2.append(whiteChess[15]);

//console.log(a8);

//name of black
const bl_rook1 = a8.querySelector('img');
const  bl_knight1 = b8.querySelector('img');
const  bl_bishop1 = c8.querySelector('img');
const bl_queen = d8.querySelector('img');
const  bl_king = e8.querySelector('img');
const  bl_bishop2 = f8.querySelector('img');
const  bl_knight2 = g8.querySelector('img');
const  bl_rook2 = h8.querySelector('img');
const bl_pawn1 = a7.querySelector('img');
const bl_pawn2 = b7.querySelector('img');
const bl_pawn3 = c7.querySelector('img');
const bl_pawn4 = d7.querySelector('img');
const bl_pawn5 = e7.querySelector('img');
const bl_pawn6 = f7.querySelector('img');
const bl_pawn7 = g7.querySelector('img');
const bl_pawn8 = h7.querySelector('img');
//name of white
const wt_rook1 = a1.querySelector('img');
const  wt_knight1 = b1.querySelector('img');
const  wt_bishop1 = c1.querySelector('img');
const wt_queen = d1.querySelector('img');
const  wt_king = e1.querySelector('img');
const  wt_bishop2 = f1.querySelector('img');
const  wt_knight2 = g1.querySelector('img');
const  wt_rook2 = h1.querySelector('img');
const wt_pawn1 = a2.querySelector('img');
const wt_pawn2 = b2.querySelector('img');
const wt_pawn3 = c2.querySelector('img');
const wt_pawn4 = d2.querySelector('img');
const wt_pawn5 = e2.querySelector('img');
const wt_pawn6 = f2.querySelector('img');
const wt_pawn7 = g2.querySelector('img');
const wt_pawn8 = h2.querySelector('img');

//add class
bl_rook1.className = 'bl_rook1';
bl_knight1.className = 'bl_knight1';
bl_bishop1.className = 'bl_bishop1';
bl_queen.className = 'bl_queen';
bl_king.className = 'bl_king';
bl_bishop2.className = 'bl_bishop2';
bl_knight2.className = 'bl_knight2';
bl_rook2.className = 'bl_rook2';
bl_pawn1.className = 'bl_pawn1';
bl_pawn2.className = 'bl_pawn2';
bl_pawn3.className = 'bl_pawn3';
bl_pawn4.className = 'bl_pawn4';
bl_pawn5.className = 'bl_pawn5';
bl_pawn6.className = 'bl_pawn6';
bl_pawn7.className = 'bl_pawn7';
bl_pawn8.className = 'bl_pawn8';

wt_rook1.className = 'wt_rook1';
wt_knight1.className = 'wt_knight1';
wt_bishop1.className = 'wt_bishop1';
wt_queen.className = 'wt_queen';
wt_king.className = 'wt_king';
wt_bishop2.className = 'wt_bishop2';
wt_knight2.className = 'wt_knight2';
wt_rook2.className = 'wt_rook2';
wt_pawn1.className = 'wt_pawn1';
wt_pawn2.className = 'wt_pawn2';
wt_pawn3.className = 'wt_pawn3';
wt_pawn4.className = 'wt_pawn4';
wt_pawn5.className = 'wt_pawn5';
wt_pawn6.className = 'wt_pawn6';
wt_pawn7.className = 'wt_pawn7';
wt_pawn8.className = 'wt_pawn8';

function activeClass(name) {
    let activeCheck = document.querySelector('.active');
    if (activeCheck != null && activeCheck != name) {
        activeCheck.classList.toggle('active');
    }
    name.onclick = name.classList.toggle('active');
}


bl_rook1.addEventListener('click',ev => activeClass(bl_rook1));
bl_bishop1.addEventListener('click',ev => activeClass(bl_bishop1));
bl_knight1.addEventListener('click', ev => activeClass(bl_knight1));
bl_queen.addEventListener('click', ev => activeClass(bl_queen));
bl_king.addEventListener('click', ev => activeClass(bl_king));
bl_bishop2.addEventListener('click', ev => activeClass(bl_bishop2));
bl_knight2.addEventListener('click', ev => activeClass(bl_knight2));
bl_rook2.addEventListener('click', ev => activeClass(bl_rook2));
bl_pawn1.addEventListener('click', ev => activeClass(bl_pawn1));
bl_pawn2.addEventListener('click', ev => activeClass(bl_pawn2));
bl_pawn3.addEventListener('click', ev => activeClass(bl_pawn3));
bl_pawn4.addEventListener('click', ev => activeClass(bl_pawn4));
bl_pawn5.addEventListener('click', ev => activeClass(bl_pawn5));
bl_pawn6.addEventListener('click', ev => activeClass(bl_pawn6));
bl_pawn7.addEventListener('click', ev => activeClass(bl_pawn7));
bl_pawn8.addEventListener('click', ev => activeClass(bl_pawn8));
wt_rook1.addEventListener('click',ev => activeClass(wt_rook1));
wt_bishop1.addEventListener('click',ev => activeClass(wt_bishop1));
wt_knight1.addEventListener('click', ev => activeClass(wt_knight1));
wt_queen.addEventListener('click', ev => activeClass(wt_queen));
wt_king.addEventListener('click', ev => activeClass(wt_king));
wt_bishop2.addEventListener('click', ev => activeClass(wt_bishop2));
wt_knight2.addEventListener('click', ev => activeClass(wt_knight2));
wt_rook2.addEventListener('click', ev => activeClass(wt_rook2));
wt_pawn1.addEventListener('click', ev => activeClass(wt_pawn1));
wt_pawn2.addEventListener('click', ev => activeClass(wt_pawn2));
wt_pawn3.addEventListener('click', ev => activeClass(wt_pawn3));
wt_pawn4.addEventListener('click', ev => activeClass(wt_pawn4));
wt_pawn5.addEventListener('click', ev => activeClass(wt_pawn5));
wt_pawn6.addEventListener('click', ev => activeClass(wt_pawn6));
wt_pawn7.addEventListener('click', ev => activeClass(wt_pawn7));
wt_pawn8.addEventListener('click', ev => activeClass(wt_pawn8));

let activeBlock = document.querySelector('.active');
console.log(activeBlock);