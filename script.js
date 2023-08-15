let btnNewGame = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

let player1Score = document.querySelector("#score--0");
let player2Score = document.querySelector("#score--1");

let player1Current = document.querySelector("#current--0");
let player2Current = document.querySelector("#current--1");

let img = document.querySelector(".dice");
//////State Varibles
let currentPlayer = 0;
let currentscore = 0;
let totalScore = [0, 0];

const changePlayer = function () {
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentscore = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};
const initialState = function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  img.classList.add("hidden");
  btnRoll.classList.remove("hidden");
  btnHold.classList.remove("hidden");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  totalScore = [0, 0];
  currentscore = 0;
  currentPlayer = 0;
};
initialState();
btnRoll.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  img.classList.remove("hidden");
  img.src = `/images/dice-${randomNumber}.png`;
  if (randomNumber !== 1) {
    currentscore += randomNumber;
    document.querySelector(`#current--${currentPlayer}`).textContent =
      currentscore;
  } else {
    changePlayer();
  }
});
btnNewGame.addEventListener("click", initialState);

btnHold.addEventListener("click", function () {
  totalScore[currentPlayer] += currentscore;
  document.querySelector(`#score--${currentPlayer}`).textContent =
    totalScore[currentPlayer];
  if (totalScore[currentPlayer] > 31) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add("player--winner");
    // document.querySelector(`#name--${currentPlayer}`).classList.add("name");
    img.classList.add("hidden");
    btnRoll.classList.add("hidden");
    btnHold.classList.add("hidden");
  } else {
    changePlayer();
  }
});
