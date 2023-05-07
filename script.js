"use strict";

function resetGame() {
	scoreValue = 20;
	score.textContent = `💯 Score: ${scoreValue}`;
	secretNumber.textContent = `?`;
	message(`Un numero tra 1 e 20`);
	input.value = ``;
	randomNumber = Math.floor(Math.random() * 20 + 1);
	console.log(randomNumber);
	//  <-- Controllare il numero estratto le volte successive alla prima. (*barare*)
	input.classList.remove("remove");
	check.classList.remove("remove");
	prova.classList.add("remove");
	body.classList.remove("bg-lose");
	body.classList.remove("bg-winner");
	secretNumber.classList.remove("red");
	h1.textContent = "Indovina il mio Numero!";
	h1.classList.remove("red");
}

const message = function (message) {
	document.querySelector(".message").textContent = message;
};

const body = document.body;
const secretNumber = document.querySelector(".number");
const score = document.querySelector(".label-score");
const highscore = document.querySelector(".highscore");
const input = document.querySelector(".guess");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const prova = document.querySelector(".prova");
const h1 = document.querySelector("h1");
const ciao = document.querySelector(".ciao");

let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);
// <-- Controllare il numero estratto la prima volta. (*barare*)
let scoreValue = 20;

check.addEventListener("click", function () {
	if (Number(input.value) >= 1 && Number(input.value) <= 20) {
		Number(input.value) > randomNumber
			? message(`Scendi! 📉`)
			: message(`Sali! 📈`);

		if (Number(input.value) === randomNumber) {
			secretNumber.textContent = randomNumber;
			message(" 🎉 VITTORIA! 🎉 ");
			body.classList.add("bg-winner");

			if (scoreValue < 1) {
				scoreValue = 0;
			}

			if (Number(highscore.textContent) < scoreValue) {
				highscore.textContent = `${scoreValue}`;
			}

			input.classList.add("remove");
			check.classList.add("remove");
			prova.classList.remove("remove");
		} else {
			scoreValue -= 1;
			score.textContent = `💯 Score: ${scoreValue}`;

			if (scoreValue < 1) {
				console.log("Hai perso...");
				score.textContent = `💯 Score: ${0}`;
				message(`ERA: ${randomNumber}! HAI PERSO 😭`);
				secretNumber.textContent = randomNumber;
				h1.textContent = "Hai perso...";
				h1.classList.add("red");
				input.value = 0;
				input.classList.add("remove");
				check.classList.add("remove");
				prova.classList.remove("remove");
				body.classList.add("bg-lose");
				secretNumber.classList.add("red");
			}
		}
	} else {
		input.value = "";
	}
});

prova.addEventListener("click", function () {
	resetGame();
});

again.addEventListener("click", function () {
	resetGame();
});
