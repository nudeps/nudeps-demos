(()=>{
/* Nudeps v0.2.4 */
let cS = document.currentScript;
let mapUrl = cS?.src;
let map = {
	"imports": {
		"nudeps-demo-lodash": "./index.js",
		"cjs-browser-shim": "./client_modules/cjs-browser-shim@0.0.1/index.js",
		"lodash": "./client_modules/lodash@4.18.1/lodash.js",
		"underscore": "./client_modules/underscore@1.13.8/modules/index-all.js",
		"underscore/package.json": "./client_modules/underscore@1.13.8/package.json",
		"underscore/underscore": "./client_modules/underscore@1.13.8/underscore",
		"underscore/modules/": "./client_modules/underscore@1.13.8/modules/"
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