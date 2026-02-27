(()=>{
let map = {
	"imports": {
		"d3": "./client_modules/d3@7.9.0/src/index.js",
		"d3-array": "./client_modules/d3-array@3.2.4/src/index.js",
		"d3-axis": "./client_modules/d3-axis@3.0.0/src/index.js",
		"d3-brush": "./client_modules/d3-brush@3.0.0/src/index.js",
		"d3-chord": "./client_modules/d3-chord@3.0.1/src/index.js",
		"d3-color": "./client_modules/d3-color@3.1.0/src/index.js",
		"d3-contour": "./client_modules/d3-contour@4.0.2/src/index.js",
		"d3-delaunay": "./client_modules/d3-delaunay@6.0.4/src/index.js",
		"d3-dispatch": "./client_modules/d3-dispatch@3.0.1/src/index.js",
		"d3-drag": "./client_modules/d3-drag@3.0.0/src/index.js",
		"d3-dsv": "./client_modules/d3-dsv@3.0.1/src/index.js",
		"d3-ease": "./client_modules/d3-ease@3.0.1/src/index.js",
		"d3-fetch": "./client_modules/d3-fetch@3.0.1/src/index.js",
		"d3-force": "./client_modules/d3-force@3.0.0/src/index.js",
		"d3-format": "./client_modules/d3-format@3.1.2/src/index.js",
		"d3-geo": "./client_modules/d3-geo@3.1.1/src/index.js",
		"d3-hierarchy": "./client_modules/d3-hierarchy@3.1.2/src/index.js",
		"d3-interpolate": "./client_modules/d3-interpolate@3.0.1/src/index.js",
		"d3-path": "./client_modules/d3-path@3.1.0/src/index.js",
		"d3-polygon": "./client_modules/d3-polygon@3.0.1/src/index.js",
		"d3-quadtree": "./client_modules/d3-quadtree@3.0.1/src/index.js",
		"d3-random": "./client_modules/d3-random@3.0.1/src/index.js",
		"d3-scale": "./client_modules/d3-scale@4.0.2/src/index.js",
		"d3-scale-chromatic": "./client_modules/d3-scale-chromatic@3.1.0/src/index.js",
		"d3-selection": "./client_modules/d3-selection@3.0.0/src/index.js",
		"d3-shape": "./client_modules/d3-shape@3.2.0/src/index.js",
		"d3-time": "./client_modules/d3-time@3.1.0/src/index.js",
		"d3-time-format": "./client_modules/d3-time-format@4.1.0/src/index.js",
		"d3-timer": "./client_modules/d3-timer@3.0.1/src/index.js",
		"d3-transition": "./client_modules/d3-transition@3.0.1/src/index.js",
		"d3-zoom": "./client_modules/d3-zoom@3.0.0/src/index.js",
		"internmap": "./client_modules/internmap@2.0.3/src/index.js",
		"robust-predicates": "./client_modules/robust-predicates@3.0.2/index.js",
		"delaunator": "./client_modules/delaunator@5.0.1/index.js"
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
