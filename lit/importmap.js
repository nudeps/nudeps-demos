(()=>{
let map = {
	"imports": {
		"lit": "./client_modules/lit@3.3.2/index.js",
		"lit/": "./client_modules/lit@3.3.2/",
		"nudeps-demo-lit": "./index.js",
		"@lit/reactive-element": "./client_modules/@lit/reactive-element@2.1.2/reactive-element.js",
		"@lit/reactive-element/decorators/": "./client_modules/@lit/reactive-element@2.1.2/decorators/",
		"lit-element/lit-element.js": "./client_modules/lit-element@4.2.2/lit-element.js",
		"lit-html": "./client_modules/lit-html@3.3.2/lit-html.js",
		"lit-html/": "./client_modules/lit-html@3.3.2/"
	},
	"scopes": {}
};
let mapUrl = document.currentScript?.src;
if (!mapUrl) {
	if (!document.currentScript) {
		throw new Error("nudeps: Import map script appears to be loaded as a module. Set module: true in nudeps config, or remove type=\"module\" from the script tag.");
	}
	else if (document.querySelector("script[type=module]")) {
		throw new Error(`nudeps: ${document.currentScript.getAttribute("src")} is included after module scripts, which is not supported in all browsers.`);
	}
}

const rebase = m => { for (let k in m) m[k] = new URL(m[k], mapUrl).href; return m; };
rebase(map.imports);
for (let scope in map.scopes) rebase(map.scopes[scope]);

let script = Object.assign(document.createElement("script"), { type: "importmap", textContent: JSON.stringify(map) });
if (document.currentScript) {
	document.currentScript.after(script);
}
else {
	(document.head ?? document.documentElement).append(script);
}

})();
