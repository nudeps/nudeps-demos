import { require } from "cjs-browser-shim";
const interact = require("interactjs");

let position = { x: 0, y: 0 };

interact(".draggable").draggable({
	inertia: true,
	modifiers: [
		interact.modifiers.restrictRect({
			restriction: "parent",
			endOnly: true,
		}),
	],
	listeners: {
		move (event) {
			position.x += event.dx;
			position.y += event.dy;
			event.target.style.translate = `${position.x}px ${position.y}px`;
		},
	},
});
