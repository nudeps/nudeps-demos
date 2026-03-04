(()=>{
let cS = document.currentScript;
let mapUrl = cS?.src;
let map = {
	"imports": {
		"jquery": "./client_modules/jquery@4.0.0/dist-module/jquery.module.js",
		"jquery/factory": "./client_modules/jquery@4.0.0/dist-module/jquery.factory.module.js",
		"jquery/factory-slim": "./client_modules/jquery@4.0.0/dist-module/jquery.factory.slim.module.js",
		"jquery/slim": "./client_modules/jquery@4.0.0/dist-module/jquery.slim.module.js",
		"jquery/src/": "./client_modules/jquery@4.0.0/src/",
		"jquery1": "./client_modules/jquery@1.12.4/dist/jquery.js",
		"nudeps-demo-jquery": "./index.js"
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