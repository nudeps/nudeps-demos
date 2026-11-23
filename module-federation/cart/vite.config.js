import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
	plugins: [
		federation({
			name: "cart",
			dts: false, // no TypeScript here
			exposes: {
				"./CartWidget": "./src/CartWidget.js",
			},
			// The shop's import map provides these, so the cart ships no copy of them
			shared: {
				lit: {},
				"@nudeps-mf/ui": {},
			},
			experiments: { hostProvidesAllShared: true },
		}),
	],
});
