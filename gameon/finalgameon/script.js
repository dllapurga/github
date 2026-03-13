(function () {

'use strict';

console.log('reading js');

/* -----------------------------
   Variables
----------------------------- */

const startBtn = document.querySelector('#start');
const startScreen = document.querySelector('#startScreen');
const battleScreen = document.querySelector('#battleScreen');

const fighters = document.querySelectorAll('#photo-gallery img');
const playerText = document.querySelector('#playerText');

const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

const attackBtn = document.querySelector('#attack');
const fireball = document.querySelector('#fireball');

const messages = document.querySelector('#messages');

const bgMusic = document.querySelector('#bgMusic');
const blast = document.querySelector('#blast');

const quitBtn = document.querySelector('#quit');
const audioToggle = document.querySelector('#audioToggle');

const instructionBtn = document.querySelector('#instructionBtn');
const instructionModal = document.querySelector('#instructionModal');
const closeModal = document.querySelector('#closeModal');

const winnerModal = document.querySelector('#winnerModal');
const winnerTitle = document.querySelector('#winnerTitle');
const winnerPlayAgain = document.querySelector('#winnerPlayAgain');

/* -----------------------------
   Modal
----------------------------- */
instructionBtn.addEventListener('click', function () {
    instructionModal.classList.remove('hidden');
});

closeModal.addEventListener('click', function () {
    instructionModal.classList.add('hidden');
});

instructionModal.addEventListener('click', function (e) {
    if (e.target === instructionModal) {
        instructionModal.classList.add('hidden');
    }
});

/* -----------------------------
   Select a player
----------------------------- */

let currentPlayer = 1;
let selections = 0;

let player1Selection = null;
let player2Selection = null;

fighters.forEach(function (img) {
    img.classList.add('hover-enabled');
});

fighters.forEach(function (img) {

    img.addEventListener('click', function () {

        if (img.classList.contains('selected')) return;

        img.classList.add('selected');
        img.classList.add('drop');

        if (currentPlayer === 1) {
            player1Selection = img.src;
        } else {
            player2Selection = img.src;
        }

        selections++;

        if (currentPlayer === 1) {
            playerText.textContent = "Player 2: Choose your fighter";
            playerText.style.color = 'red';
            currentPlayer = 2;
        } else {
            playerText.textContent = "Both fighters selected!";
        }

        if (selections === 2) {
            startBtn.disabled = false;

            fighters.forEach(function (img) {
                img.classList.remove('hover-enabled');
            });
        }
    });

});


/* -----------------------------
   Game Data
----------------------------- */

const gameData = {
    health: [100, 100],
    attack: [5, 10, 15, 20, 25],
    index: 0
};


/* -----------------------------
   Start game
----------------------------- */

startBtn.addEventListener('click', function () {

    bgMusic.play();
    document.querySelector('#quit').style.display = 'block';
    document.querySelector('#audio').style.display = 'block';
    document.querySelector('#instructionBtn').style.left = '280px';

    quitBtn.disabled = false;

    player1.src = player1Selection;
    player2.src = player2Selection;

    startScreen.classList.add('hidden');
    battleScreen.classList.remove('hidden');

    gameData.index = Math.round(Math.random());

    messages.innerHTML =
    `<p class="attackMessage">Battle begins! Player ${gameData.index + 1} attacks first!</p>`;

    attackBtn.classList.remove('hidden');
});


attackBtn.addEventListener('click', playerAttack);


/* -----------------------------
   Attack
----------------------------- */

function playerAttack(){

    blast.currentTime = 0;
    blast.play();

    const attackValue = Math.floor(Math.random() * 5);
    const defenseValue = Math.floor(Math.random() * 3);

    let attacker = gameData.index;
    let defender = gameData.index ? 0 : 1;

    let damage = gameData.attack[attackValue];

    attackBtn.classList.add('hidden');

    gameData.health[defender] -= damage;

    if(gameData.health[defender] < 0){
        gameData.health[defender] = 0;
    }

    messages.innerHTML =
    `<p class="attackMessage">Player ${attacker + 1} attacks for ${damage} damage!</p>`;

    let attackerImg = attacker === 0 ? player1 : player2;
    let defenderImg = defender === 0 ? player1 : player2;

    /* Fireball */
    fireball.classList.remove('hidden');

    if(attacker === 0){
        fireball.classList.add('fireball-right');
    } else {
        fireball.classList.add('fireball-left');
    }

    /* Attack animation */
    attackerImg.classList.add(`attack${attackValue}`);

    setTimeout(function(){
        defenderImg.classList.add(`defend${defenseValue}`);
    }, 600);

    updateHealth(defender);
    checkWinner(defender);

    setTimeout(function(){
        fireball.className = "hidden";
        fireball.classList.remove('fireball-left', 'fireball-right');
    }, 800);

    setTimeout(function(){
        player1.className = "";
        player2.className = "";
    }, 2000);
}


/* -----------------------------
   Healthbar
----------------------------- */

function updateHealth(player){

    let health = gameData.health[player];

    document.querySelector(`#healthbar${player} div`).style.width = `${health}%`;
    document.querySelector(`#monsterhealth${player}`).innerHTML = `${health}%`;
}


/* -----------------------------
   Winning Condition
----------------------------- */

function checkWinner(player){

    setTimeout(function(){

        let health = Math.floor(parseFloat(gameData.health[player]));

        if(health < 1){

            let winner = player === 0 ? 2 : 1;
            let color = winner === 1 ? 'rgb(0, 145, 255)' : 'rgb(192, 35, 17)';

            winnerTitle.innerHTML = `🏆 <span style="color:${color}">Player ${winner} </span>Wins!`;
            winnerModal.classList.remove('hidden');

            attackBtn.classList.add('hidden');

        } else {

            gameData.index = gameData.index ? 0 : 1;

            messages.innerHTML =
            `<p class="attackMessage">Player ${gameData.index + 1}'s turn!</p>`;

            setTimeout(function(){
                attackBtn.classList.remove('hidden');
            }, 500);
        }

    }, 2000);
}


/* -----------------------------
   Play again button
----------------------------- */


winnerPlayAgain.addEventListener('click', function(){
    location.reload();
});

/* -----------------------------
   Quit button
----------------------------- */
quitBtn.addEventListener('click', function(){
    location.reload();
});

let soundOn = true;

audioToggle.addEventListener('click', function(){

    soundOn = !soundOn;

    bgMusic.muted = !soundOn;
    blast.muted = !soundOn;

    if(soundOn){
        audioToggle.classList.remove('fa-volume-mute');
        audioToggle.classList.add('fa-music');
    } else {
        audioToggle.classList.remove('fa-music');
        audioToggle.classList.add('fa-volume-mute');
    }

});

})();