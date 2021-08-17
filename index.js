const body = document.querySelector("#body");
const startButton = document.querySelector("#start_btn");
// const stopButton = document.querySelector("#stop_btn");
const timer = document.querySelector("#timer");
const killedNumber = document.querySelector("h3");
let counter = 0;

const bubbleCreator = () => {
	const bubble = document.createElement("span");
	bubble.classList.add("bubble");
	document.body.appendChild(bubble);

	const size = Math.round(Math.random() * 300 + 50) + "px";
	bubble.style.height = size;
	bubble.style.width = size;

	bubble.style.top = Math.random() * 100 + 50 + "%";
	bubble.style.left = Math.random() * 100 + "%";

	const plusOrMinus = Math.random() > 0.5 ? 1 : -1;
	bubble.style.setProperty("--left", Math.random() * 100 * plusOrMinus + "%");

	bubble.addEventListener("click", (e) => {
		counter++;
		bubble.remove();
		killedNumber.innerHTML = counter;
	});

	setTimeout(() => {
		bubble.remove();
	}, 8000);
};

timer.innerHTML = 45;

timer.style.visibility = "hidden";

startButton.addEventListener("click", (e) => {
	startButton.style.visibility = "hidden";
	// stopButton.style.visibility = "hidden";

	timer.style.visibility = "visible";
	const inter = setInterval(() => {
		timer.innerHTML--;
	}, 1000);

	const spawnBubble = setInterval(bubbleCreator, 300);
	setInterval(() => {
		clearInterval(spawnBubble);
		clearInterval(inter);

		startButton.style.visibility = "visible";
		// stopButton.style.visibility = "visible";
		timer.style.visibility = "hidden";
	}, 45000);
	const scoreInterval = setInterval(() => {
		alert("Votre score est de " + counter);
	}, 48500);

	setInterval(() => {
		clearInterval(scoreInterval);
	}, 49000);
	timer.innerHTML = 45;
	// stopButton.addEventListener("click", (e) => {
	// 	clearInterval(spawnBubble);
	// });
});
