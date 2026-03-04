(()=>{
let cS = document.currentScript;
let mapUrl = cS?.src;
let map = {
	"imports": {
		"@floating-ui/core": "./client_modules/@floating-ui/core@1.7.3/dist/floating-ui.core.mjs",
		"@floating-ui/dom": "./client_modules/@floating-ui/dom@0.5.4/dist/floating-ui.dom.browser.min.mjs",
		"@floating-ui/": "./client_modules/@floating-ui/",
		"nudeps-demo-floating-ui": "./index.js",
		"@floating-ui/utils": "./client_modules/@floating-ui/utils@0.2.10/dist/floating-ui.utils.mjs"
	},
	"scopes": {
		"./client_modules/@floating-ui/dom@0.5.4": {
			"@floating-ui/core": "./client_modules/@floating-ui/core@0.7.3/dist/floating-ui.core.browser.min.mjs"
		}
	}
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