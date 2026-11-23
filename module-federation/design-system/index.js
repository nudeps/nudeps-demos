import { LitElement, html, css } from "lit";

// A design-system button both teams use.
// customElements.define() throws on a second call, so two copies of this file on one page break it.
export class UiButton extends LitElement {
	static styles = css`
		:host {
			/* Pages theme the button through these properties */
			--ui-button-bg: light-dark(oklch(47% 0.224 257), oklch(69% 0.236 264));
			--ui-button-hover-bg: light-dark(oklch(38% 0.187 257), oklch(79% 0.189 265));
		}

		button {
			font: inherit;
			padding: 0.4em 1em;
			border: none;
			border-radius: 0.4em;
			--bg: var(--ui-button-bg);
			background: var(--bg);
			color: contrast-color(var(--bg));
			cursor: pointer;
			transition: background-color 150ms ease, scale 160ms cubic-bezier(0.23, 1, 0.32, 1);

			@media (hover: hover) {
				&:hover {
					--bg: var(--ui-button-hover-bg);
				}
			}

			&:active {
				scale: 0.97;
			}

			&:focus-visible {
				outline: 2px solid CanvasText;
				outline-offset: 2px;
			}
		}
	`;

	render () {
		return html`<button part="button"><slot></slot></button>`;
	}
}

customElements.define("ui-button", UiButton);
