import gsap from "gsap";

// Stagger-animate all the boxes in a wave pattern
gsap.from(".box", {
	scale: 0,
	rotation: 360,
	duration: 1,
	ease: "elastic.out(1, 0.4)",
	stagger: { each: 0.08, from: "center" },
});

// Continuously float the boxes up and down
gsap.to(".box", {
	y: -15,
	duration: 1.5,
	ease: "sine.inOut",
	yoyo: true,
	repeat: -1,
	stagger: { each: 0.1, from: "center" },
	delay: 1.2,
});

// Hover effect
document.querySelectorAll(".box").forEach(box => {
	box.addEventListener("pointerenter", () => {
		gsap.to(box, { scale: 1.3, duration: 0.3, ease: "back.out(2)" });
	});
	box.addEventListener("pointerleave", () => {
		gsap.to(box, { scale: 1, duration: 0.3, ease: "power2.out" });
	});
});
