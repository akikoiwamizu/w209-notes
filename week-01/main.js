const svg = document.querySelector("svg#chart");
const btnShrink = document.querySelector("#btnShrink");

btnShrink.onclick = function() {
	svg.style.width = "100px";
};

const inRadius = document.querySelector("#lbRadius input");
const outRadius = document.querySelector("#lbRadius output");
const circles = document.querySelectorAll("circle");

inRadius.oninput = () => {
	outRadius.innerHTML = inRadius.value;

	circles.forEach((c) => {
		c.setAttribute("r", +inRadius.value);
	});
};
