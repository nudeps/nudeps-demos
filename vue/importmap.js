(()=>{
let map = {
	"imports": {
		"cjs-browser-shim": "./client_modules/cjs-browser-shim/index.js",
		"nudeps-demo-vue": "./index.js",
		"vue": "./client_modules/vue@3.5.26/dist/vue.esm-browser.js",
		"vue/compiler-sfc": "./client_modules/vue@3.5.26/compiler-sfc/index.browser.mjs",
		"vue/jsx": "./client_modules/vue@3.5.26/jsx.d.ts",
		"vue/jsx-dev-runtime": "./client_modules/vue@3.5.26/jsx-runtime/index.mjs",
		"vue/jsx-runtime": "./client_modules/vue@3.5.26/jsx-runtime/index.mjs",
		"vue/": "./client_modules/vue@3.5.26/",
		"vue/server-renderer": "./client_modules/vue@3.5.26/server-renderer/index.mjs",
		"@vue/compiler-dom": "./client_modules/@vue/compiler-dom@3.5.26/dist/compiler-dom.esm-bundler.js",
		"@vue/compiler-sfc": "./client_modules/@vue/compiler-sfc@3.5.26/dist/compiler-sfc.esm-browser.js",
		"@vue/runtime-dom": "./client_modules/@vue/runtime-dom@3.5.26/dist/runtime-dom.esm-bundler.js",
		"@vue/server-renderer": "./client_modules/@vue/server-renderer@3.5.26/dist/server-renderer.esm-bundler.js",
		"@vue/shared": "./client_modules/@vue/shared@3.5.26/dist/shared.esm-bundler.js",
		"@vue/runtime-core": "./client_modules/@vue/runtime-core@3.5.26/dist/runtime-core.esm-bundler.js",
		"@vue/compiler-core": "./client_modules/@vue/compiler-core@3.5.26/dist/compiler-core.esm-bundler.js",
		"@vue/reactivity": "./client_modules/@vue/reactivity@3.5.26/dist/reactivity.esm-bundler.js"
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
