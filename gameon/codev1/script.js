
// (function () {

//   'use strict';

//   const startBtn = document.querySelector('#start');
//   const startScreen = document.querySelector('#startScreen');
//   const battleScreen = document.querySelector('#battleScreen');

//   const fighters = document.querySelectorAll('#photo-gallery img');
//   const playerText = document.querySelector('#playerText');

//   let currentPlayer = 1;
//   let selections = 0;

//   let player1Selection = null;
//   let player2Selection = null;


//   fighters.forEach(function (img) {
//       img.classList.add('hover-enabled');
//   });


//   fighters.forEach(function (img) {
//       img.addEventListener('click', function () {

//           if (img.classList.contains('selected')) return;

//           img.classList.add('selected');
//           img.classList.add('drop');

//           if (currentPlayer === 1) {
//               player1Selection = img.src;
//           } else {
//               player2Selection = img.src;
//           }

//           selections++;

//           if (currentPlayer === 1) {
//               playerText.textContent = "Player 2: Choose your fighter";
//               playerText.style.color = 'blue';
//               currentPlayer = 2;
//           } else {
//               playerText.textContent = "Both fighters selected!";
//           }

        
//           if (selections === 2) {
//               startBtn.disabled = false;

              
//               fighters.forEach(function (img) {
//                   img.classList.remove('hover-enabled');
//               });
//           }
//       });
//   });


//     startBtn.addEventListener('click', function () {

//       const player1 = document.querySelector('#player1');
//       const player2 = document.querySelector('#player2');

    
//       player1.src = player1Selection;
//       player2.src = player2Selection;


//       startScreen.classList.add('hidden');
//       battleScreen.classList.remove('hidden');
//   });

// })();
