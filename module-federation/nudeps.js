export default {
	imports: {
		"cart/CartWidget": "./cart/dist/CartWidget.js",
	},
	overrides: {
		// Copy the local design system. A symlink into node_modules breaks wherever node_modules is not deployed.
		"@nudeps-mf/ui": { symlink: false },
	},
};
