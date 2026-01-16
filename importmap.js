{let map = {
	"imports": {
		"@floating-ui/core": "./client_modules/@floating-ui/core@1.7.3/dist/floating-ui.core.mjs",
		"@floating-ui/core/package.json": "./client_modules/@floating-ui/core@1.7.3/package.json",
		"@floating-ui/dom": "./client_modules/@floating-ui/dom@0.5.4/dist/floating-ui.dom.browser.min.mjs",
		"@floating-ui/dom/package.json": "./client_modules/@floating-ui/dom@0.5.4/package.json",
		"nudeps-demo": "./index.js",
		"vue": "./client_modules/vue@3.5.26/dist/vue.esm-browser.js"
	},
	"scopes": {
		"./": {
			"@floating-ui/core": "./client_modules/@floating-ui/core@0.7.3/dist/floating-ui.core.browser.min.mjs",
			"@floating-ui/utils": "./client_modules/@floating-ui/utils@0.2.10/dist/floating-ui.utils.mjs",
			"@vue/reactivity": "./client_modules/@vue/reactivity@3.5.26/dist/reactivity.esm-bundler.js",
			"@vue/runtime-core": "./client_modules/@vue/runtime-core@3.5.26/dist/runtime-core.esm-bundler.js",
			"@vue/runtime-dom": "./client_modules/@vue/runtime-dom@3.5.26/dist/runtime-dom.esm-bundler.js",
			"@vue/shared": "./client_modules/@vue/shared@3.5.26/dist/shared.esm-bundler.js"
		}
	}
};
(function injectMap (map, cS) {
	if (!cS) {
		console.error(`Import map injection script cannot be included as a module script. Please remove type="module".`);
	}
	else if (document.querySelector(`script[type=module]`)) {
		console.error(`${cS.getAttribute("src")} must be included before any module scripts.`);
	}
	else {
		cS.after(Object.assign(document.createElement("script"), { type: "importmap", textContent: JSON.stringify(map) }));
	}
})(map, document.currentScript)}