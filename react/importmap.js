(()=>{
let cS = document.currentScript;
let mapUrl = cS?.src;
let map = {
	"imports": {
		"cjs-browser-shim": "./client_modules/cjs-browser-shim/index.js",
		"react": "./client_modules/react@19.2.3/index.js",
		"react-dom": "./client_modules/react-dom@19.2.3/index.js",
		"react-dom/client": "./client_modules/react-dom@19.2.3/client.js",
		"react-dom/package.json": "./client_modules/react-dom@19.2.3/package.json",
		"react-dom/profiling": "./client_modules/react-dom@19.2.3/profiling.js",
		"react-dom/server": "./client_modules/react-dom@19.2.3/server.browser.js",
		"react-dom/server.browser": "./client_modules/react-dom@19.2.3/server.browser.js",
		"react-dom/server.bun": "./client_modules/react-dom@19.2.3/server.bun.js",
		"react-dom/server.edge": "./client_modules/react-dom@19.2.3/server.edge.js",
		"react-dom/server.node": "./client_modules/react-dom@19.2.3/server.node.js",
		"react-dom/static": "./client_modules/react-dom@19.2.3/static.browser.js",
		"react-dom/static.browser": "./client_modules/react-dom@19.2.3/static.browser.js",
		"react-dom/static.edge": "./client_modules/react-dom@19.2.3/static.edge.js",
		"react-dom/static.node": "./client_modules/react-dom@19.2.3/static.node.js",
		"react-dom/test-utils": "./client_modules/react-dom@19.2.3/test-utils.js",
		"react/compiler-runtime": "./client_modules/react@19.2.3/compiler-runtime.js",
		"react/jsx-dev-runtime": "./client_modules/react@19.2.3/jsx-dev-runtime.js",
		"react/jsx-runtime": "./client_modules/react@19.2.3/jsx-runtime.js",
		"react/package.json": "./client_modules/react@19.2.3/package.json",
		"scheduler": "./client_modules/scheduler@0.27.0/index.js"
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