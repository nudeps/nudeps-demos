{let map = {
	"imports": {
		"lit": "./client_modules/lit@3.3.2/index.js",
		"lit/async-directive.js": "./client_modules/lit@3.3.2/async-directive.js",
		"lit/decorators.js": "./client_modules/lit@3.3.2/decorators.js",
		"lit/decorators/custom-element.js": "./client_modules/lit@3.3.2/decorators/custom-element.js",
		"lit/decorators/event-options.js": "./client_modules/lit@3.3.2/decorators/event-options.js",
		"lit/decorators/property.js": "./client_modules/lit@3.3.2/decorators/property.js",
		"lit/decorators/query-all.js": "./client_modules/lit@3.3.2/decorators/query-all.js",
		"lit/decorators/query-assigned-elements.js": "./client_modules/lit@3.3.2/decorators/query-assigned-elements.js",
		"lit/decorators/query-assigned-nodes.js": "./client_modules/lit@3.3.2/decorators/query-assigned-nodes.js",
		"lit/decorators/query-async.js": "./client_modules/lit@3.3.2/decorators/query-async.js",
		"lit/decorators/query.js": "./client_modules/lit@3.3.2/decorators/query.js",
		"lit/decorators/state.js": "./client_modules/lit@3.3.2/decorators/state.js",
		"lit/directive-helpers.js": "./client_modules/lit@3.3.2/directive-helpers.js",
		"lit/directive.js": "./client_modules/lit@3.3.2/directive.js",
		"lit/directives/async-append.js": "./client_modules/lit@3.3.2/directives/async-append.js",
		"lit/directives/async-replace.js": "./client_modules/lit@3.3.2/directives/async-replace.js",
		"lit/directives/cache.js": "./client_modules/lit@3.3.2/directives/cache.js",
		"lit/directives/choose.js": "./client_modules/lit@3.3.2/directives/choose.js",
		"lit/directives/class-map.js": "./client_modules/lit@3.3.2/directives/class-map.js",
		"lit/directives/guard.js": "./client_modules/lit@3.3.2/directives/guard.js",
		"lit/directives/if-defined.js": "./client_modules/lit@3.3.2/directives/if-defined.js",
		"lit/directives/join.js": "./client_modules/lit@3.3.2/directives/join.js",
		"lit/directives/keyed.js": "./client_modules/lit@3.3.2/directives/keyed.js",
		"lit/directives/live.js": "./client_modules/lit@3.3.2/directives/live.js",
		"lit/directives/map.js": "./client_modules/lit@3.3.2/directives/map.js",
		"lit/directives/range.js": "./client_modules/lit@3.3.2/directives/range.js",
		"lit/directives/ref.js": "./client_modules/lit@3.3.2/directives/ref.js",
		"lit/directives/repeat.js": "./client_modules/lit@3.3.2/directives/repeat.js",
		"lit/directives/style-map.js": "./client_modules/lit@3.3.2/directives/style-map.js",
		"lit/directives/template-content.js": "./client_modules/lit@3.3.2/directives/template-content.js",
		"lit/directives/unsafe-html.js": "./client_modules/lit@3.3.2/directives/unsafe-html.js",
		"lit/directives/unsafe-mathml.js": "./client_modules/lit@3.3.2/directives/unsafe-mathml.js",
		"lit/directives/unsafe-svg.js": "./client_modules/lit@3.3.2/directives/unsafe-svg.js",
		"lit/directives/until.js": "./client_modules/lit@3.3.2/directives/until.js",
		"lit/directives/when.js": "./client_modules/lit@3.3.2/directives/when.js",
		"lit/html.js": "./client_modules/lit@3.3.2/html.js",
		"lit/polyfill-support.js": "./client_modules/lit@3.3.2/polyfill-support.js",
		"lit/static-html.js": "./client_modules/lit@3.3.2/static-html.js",
		"nudeps-demo-lit": "./index.js",
		"@lit/reactive-element": "./client_modules/@lit/reactive-element@2.1.2/reactive-element.js",
		"@lit/reactive-element/decorators/": "./client_modules/@lit/reactive-element@2.1.2/decorators/",
		"lit-element/lit-element.js": "./client_modules/lit-element@4.2.2/lit-element.js",
		"lit-html": "./client_modules/lit-html@3.3.2/lit-html.js",
		"lit-html/": "./client_modules/lit-html@3.3.2/"
	},
	"scopes": {}
};
(function injectMap (map, cS) {
	if (!cS) {
		console.error(`Import map injection script cannot be included as a module script. Please remove type="module".`);
	}
	else if (document.querySelector(`script[type=module]`)) {
		console.error(`${cS.getAttribute("src")} must be included before any module scripts.`);
	}
	else {
		const mapUrl = cS.src;
  		const rebase = m => { for (let k in m) m[k] = new URL(m[k], mapUrl).href; return m; };
		rebase(map.imports);
		for (let scope in map.scopes) {
			rebase(map.scopes[scope]);
		}
		cS.after(Object.assign(document.createElement("script"), { type: "importmap", textContent: JSON.stringify(map) }));
	}
})(map, document.currentScript)}