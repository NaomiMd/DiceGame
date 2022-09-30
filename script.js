// constante du jeu //
let score = [0, 0];
let round = 0;
let playerTurn = 0;
let gameOn = true;

const game = document.getElementById('btn-game');
const roll = document.getElementById('btn-roll');
const hold = document.getElementById('btn-hold');

// bouton game | on met tous les scores à 0 //
game.addEventListener('click', ()=>{
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.box-1').classList.remove('active');
    document.querySelector('.box-0').classList.add('active');
});
// bouton roll //
roll.addEventListener('click', ()=>{
    if(gameOn){
    const dice = Math.floor(Math.random() * 6) + 1;
    const diceImg = "img/"+"dice-"+dice+".png";
    document.querySelectorAll("img")[0].setAttribute('src', diceImg);

    if(dice !==1){
        round += dice;
        document.querySelector(`#current-${playerTurn}`).textContent = round;
    }else{
        otherPlayer();
    }
   }
});
// bouton hold //
hold.addEventListener('click', ()=>{
    if(gameOn){
    score[playerTurn] += round;
    document.querySelector(`#score-${playerTurn}`).textContent = score[playerTurn];
    if(score[playerTurn] >=100){
        document.querySelector(`#player-${playerTurn}`);
        alert("La partie est finie");
        gameOn = false;
    }else{
        otherPlayer();
    }
   }
});

let otherPlayer = ()=>{
    playerTurn === 0 ? playerTurn =1 : playerTurn = 0;
    round = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.box-0').classList.toggle('active');
    document.querySelector('.box-1').classList.toggle('active');

}