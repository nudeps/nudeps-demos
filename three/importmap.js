(()=>{
let map = {
	"imports": {
		"nudeps-demo-three": "./index.js",
		"three": "./client_modules/three@0.175.0/build/three.module.js"
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
