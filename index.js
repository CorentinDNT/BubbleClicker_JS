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

// setInterval(bubbleCreator, 300);
