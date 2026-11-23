import "@nudeps-mf/ui";
import "cart/CartWidget";

document.addEventListener("click", evt => {
	let button = evt.target.closest("ui-button[data-product]");
	if (!button) {
		return;
	}

	window.dispatchEvent(new CustomEvent("cart:add", { detail: button.dataset.product }));

	// The flash is short. The count in the cart is the lasting confirmation.
	button.toggleAttribute("data-added", true);
	clearTimeout(button.reset);
	button.reset = setTimeout(() => button.removeAttribute("data-added"), 1000);
});
