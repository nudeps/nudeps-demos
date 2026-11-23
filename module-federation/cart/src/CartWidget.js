import { LitElement, html, css } from "lit";
import "@nudeps-mf/ui";

// The widget of the cart team. It counts what the shop adds, and the user can clear it.
export class CartWidget extends LitElement {
	static properties = { items: { state: true } };

	static styles = css`
		:host {
			display: inline-flex;
			align-items: center;
			gap: 0.75rem;
		}

		.icon {
			display: inline-block;
		}
	`;

	// Set it in the constructor. A class field would hide the reactive accessor of Lit.
	constructor () {
		super();
		this.items = [];
	}

	connectedCallback () {
		super.connectedCallback();
		window.addEventListener("cart:add", this);
	}

	disconnectedCallback () {
		super.disconnectedCallback();
		window.removeEventListener("cart:add", this);
	}

	async handleEvent (evt) {
		this.items = [...this.items, evt.detail];
		await this.updateComplete;

		// Bump the cart so the user sees where the item went
		if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
			this.renderRoot.querySelector(".icon").animate(
				[{ scale: 1 }, { scale: 1.3 }, { scale: 1 }],
				{ duration: 300, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
			);
		}
	}

	clear () {
		this.items = [];
	}

	render () {
		let count = this.items.length;

		return html`
			<span class="icon">🛒</span>
			<span role="status">${count} ${count === 1 ? "item" : "items"}</span>
			<ui-button @click=${this.clear}>Clear</ui-button>
		`;
	}
}

customElements.define("cart-widget", CartWidget);
