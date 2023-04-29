const buttons = document.querySelectorAll(".start_area button");
const start_area = document.querySelector(".start_area");
const game_area = document.querySelector(".game_area");
const input = document.querySelector("input");
const hint = document.querySelector("#hint");

let attempt;
let guessnumber = [];
let random;

const start = () => {
  document.getElementById("attempt").innerHTML = attempt;
  start_area.style.display = "none";
  game_area.style.display = "block";

  random = Math.floor(Math.random() * 100);
};

input.addEventListener("change", () => {
  document.getElementById("attempt").innerHTML = attempt - 1;
  let value = input.value;
  guessnumber = [...guessnumber, value];

  if (attempt > 1) {
    if (value < random) {
      hint.innerHTML = "it is lower 😒";
    } else if (value > random) {
      hint.innerHTML = "it is higher 🤦‍♂️";
    } else {
      hint.innerHTML = "it is correct 👍🧡";
      input.setAttribute("disabled", true);
      document.getElementById("newGame").style.display = "block";
    }
  } else {
    document.getElementById("newGame").style.display = "block";
    hint.innerHTML = `you loose !! the correct number is ${random}`;
    input.setAttribute("disabled", true);
  }
  attempt--;

  document.getElementById("attemptNo").innerHTML = guessnumber.length;
  document.getElementById("guessNum").innerHTML = guessnumber;
  input.vlaue = "";
});

function easy() {
  attempt = 10;
  start();
}
function hard() {
  attempt = 5;
  start();
}

document.getElementById("newGame").addEventListener("click", () => {
  window.location.reload();
});
