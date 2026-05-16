(()=>{
/* Nudeps v0.2.4 */
let cS = document.currentScript;
let mapUrl = cS?.src;
let map = {
	"imports": {
		"nudeps-demo-lit": "./index.js",
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
		"@lit/reactive-element": "./client_modules/@lit/reactive-element@2.1.2/reactive-element.js",
		"lit-element/lit-element.js": "./client_modules/lit-element@4.2.2/lit-element.js",
		"lit-html": "./client_modules/lit-html@3.3.2/lit-html.js",
		"lit-html/is-server.js": "./client_modules/lit-html@3.3.2/is-server.js",
		"@lit/reactive-element/decorators/custom-element.js": "./client_modules/@lit/reactive-element@2.1.2/decorators/custom-element.js",
		"@lit/reactive-element/decorators/event-options.js": "./client_modules/@lit/reactive-element@2.1.2/decorators/event-options.js",
		"@lit/reactive-element/decorators/property.js": "./client_modules/@lit/reactive-element@2.1.2/decorators/property.js",
		"@lit/reactive-element/decorators/query-all.js": "./client_modules/@lit/reactive-element@2.1.2/decorators/query-all.js",
		"@lit/reactive-element/decorators/query-assigned-elements.js": "./client_modules/@lit/reactive-element@2.1.2/decorators/query-assigned-elements.js",
		"@lit/reactive-element/decorators/query-assigned-nodes.js": "./client_modules/@lit/reactive-element@2.1.2/decorators/query-assigned-nodes.js",
		"@lit/reactive-element/decorators/query-async.js": "./client_modules/@lit/reactive-element@2.1.2/decorators/query-async.js",
		"@lit/reactive-element/decorators/query.js": "./client_modules/@lit/reactive-element@2.1.2/decorators/query.js",
		"@lit/reactive-element/decorators/state.js": "./client_modules/@lit/reactive-element@2.1.2/decorators/state.js",
		"lit-html/async-directive.js": "./client_modules/lit-html@3.3.2/async-directive.js",
		"lit-html/directive-helpers.js": "./client_modules/lit-html@3.3.2/directive-helpers.js",
		"lit-html/directive.js": "./client_modules/lit-html@3.3.2/directive.js",
		"lit-html/directives/async-append.js": "./client_modules/lit-html@3.3.2/directives/async-append.js",
		"lit-html/directives/async-replace.js": "./client_modules/lit-html@3.3.2/directives/async-replace.js",
		"lit-html/directives/cache.js": "./client_modules/lit-html@3.3.2/directives/cache.js",
		"lit-html/directives/choose.js": "./client_modules/lit-html@3.3.2/directives/choose.js",
		"lit-html/directives/class-map.js": "./client_modules/lit-html@3.3.2/directives/class-map.js",
		"lit-html/directives/guard.js": "./client_modules/lit-html@3.3.2/directives/guard.js",
		"lit-html/directives/if-defined.js": "./client_modules/lit-html@3.3.2/directives/if-defined.js",
		"lit-html/directives/join.js": "./client_modules/lit-html@3.3.2/directives/join.js",
		"lit-html/directives/keyed.js": "./client_modules/lit-html@3.3.2/directives/keyed.js",
		"lit-html/directives/live.js": "./client_modules/lit-html@3.3.2/directives/live.js",
		"lit-html/directives/map.js": "./client_modules/lit-html@3.3.2/directives/map.js",
		"lit-html/directives/range.js": "./client_modules/lit-html@3.3.2/directives/range.js",
		"lit-html/directives/ref.js": "./client_modules/lit-html@3.3.2/directives/ref.js",
		"lit-html/directives/repeat.js": "./client_modules/lit-html@3.3.2/directives/repeat.js",
		"lit-html/directives/style-map.js": "./client_modules/lit-html@3.3.2/directives/style-map.js",
		"lit-html/directives/template-content.js": "./client_modules/lit-html@3.3.2/directives/template-content.js",
		"lit-html/directives/unsafe-html.js": "./client_modules/lit-html@3.3.2/directives/unsafe-html.js",
		"lit-html/directives/unsafe-mathml.js": "./client_modules/lit-html@3.3.2/directives/unsafe-mathml.js",
		"lit-html/directives/unsafe-svg.js": "./client_modules/lit-html@3.3.2/directives/unsafe-svg.js",
		"lit-html/directives/until.js": "./client_modules/lit-html@3.3.2/directives/until.js",
		"lit-html/directives/when.js": "./client_modules/lit-html@3.3.2/directives/when.js",
		"lit-html/static.js": "./client_modules/lit-html@3.3.2/static.js"
	},
	"scopes": {}
};
if (!mapUrl && !cS) {
	throw new Error('nudeps: Import map script appears to be loaded as a module. Set module: true in nudeps config, or remove type="module" from the script tag.');
}
if (document.querySelector("script[type=module]")) {
	console.warn("nudeps: " + cS.getAttribute("src") + " is included after module scripts, which is not supported in all browsers.");
}
const rebase = m => { for (let k in m) m[k] = new URL(m[k], mapUrl).href; return m; };
rebase(map.imports);
for (let scope in map.scopes) rebase(map.scopes[scope]);
let script = Object.assign(document.createElement("script"), { type: "importmap", textContent: JSON.stringify(map) });
if (cS) cS.after(script);
else (document.head ?? document.documentElement).append(script);
})();