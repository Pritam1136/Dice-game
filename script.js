'use strict';
// selecting element
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');
const diceel = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');
const btnroll = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// const score = [0, 0];
// let currentscore = 0;
// let activeplayer = 0;
// score0.textContent = 0;
// score1.textContent = 0;
// let playing = true;
let score, currentscore, activeplayer, playing;

const init = function () {
  score = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playing = true;

  current0el.textContent = 0;
  current1el.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  player1.classList.remove('player--winner');
  player0.classList.remove('player--winner');

  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

init();

diceel.classList.add('hidden');

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// rolling dice functionality
btnroll.addEventListener('click', function () {
  if (playing) {
    // generating a randon number
    const dice = Math.ceil(Math.random() * 6);
    console.log(dice);

    // display dice
    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;

    // check for roll 1: if true switch the player
    if (dice !== 1) {
      // add dice to the score
      currentscore = currentscore + dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      // switch player

      switchplayer();
      //   if (player0.classList.contains('player--active')) {
      //     player1.classList.add('player--active');
      //     player0.classList.remove('player--active');
      //   } else {
      //     player0.classList.add('player--active');
      //     player1.classList.remove('player--active');
      //   }
      // }
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to the active player and check if score is 100.
    score[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];

    // switching to next player
    if (score[activeplayer] >= 100) {
      diceel.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    }
    switchplayer();
  }
});

btnnew.addEventListener('click', init);
// playing = true;
// current0el.textContent = 0;
// current1el.textContent = 0;
// score0.textContent = 0;
// score1.textContent = 0;

// player1.classList.remove('player--winner');
// player0.classList.remove('player--winner');

// player0.classList.add('player--active');
// player1.classList.remove('player--active');

// activepayer = 0;
// currentscore = 0;
// score[0] = 0;
// score[1] = 0;
