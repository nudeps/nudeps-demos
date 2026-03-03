(()=>{
let map = {
	"imports": {
		"gsap": "./client_modules/gsap@3.14.2/index.js",
		"gsap/CSSPlugin": "./client_modules/gsap@3.14.2/CSSPlugin.js",
		"gsap/CSSRulePlugin": "./client_modules/gsap@3.14.2/CSSRulePlugin.js",
		"gsap/": "./client_modules/gsap@3.14.2/",
		"gsap/CustomBounce": "./client_modules/gsap@3.14.2/CustomBounce.js",
		"gsap/CustomEase": "./client_modules/gsap@3.14.2/CustomEase.js",
		"gsap/CustomWiggle": "./client_modules/gsap@3.14.2/CustomWiggle.js",
		"gsap/Draggable": "./client_modules/gsap@3.14.2/Draggable.js",
		"gsap/DrawSVGPlugin": "./client_modules/gsap@3.14.2/DrawSVGPlugin.js",
		"gsap/EasePack": "./client_modules/gsap@3.14.2/EasePack.js",
		"gsap/EaselPlugin": "./client_modules/gsap@3.14.2/EaselPlugin.js",
		"gsap/Flip": "./client_modules/gsap@3.14.2/Flip.js",
		"gsap/GSDevTools": "./client_modules/gsap@3.14.2/GSDevTools.js",
		"gsap/InertiaPlugin": "./client_modules/gsap@3.14.2/InertiaPlugin.js",
		"gsap/MorphSVGPlugin": "./client_modules/gsap@3.14.2/MorphSVGPlugin.js",
		"gsap/MotionPathHelper": "./client_modules/gsap@3.14.2/MotionPathHelper.js",
		"gsap/MotionPathPlugin": "./client_modules/gsap@3.14.2/MotionPathPlugin.js",
		"gsap/Observer": "./client_modules/gsap@3.14.2/Observer.js",
		"gsap/Physics2DPlugin": "./client_modules/gsap@3.14.2/Physics2DPlugin.js",
		"gsap/PhysicsPropsPlugin": "./client_modules/gsap@3.14.2/PhysicsPropsPlugin.js",
		"gsap/PixiPlugin": "./client_modules/gsap@3.14.2/PixiPlugin.js",
		"gsap/ScrambleTextPlugin": "./client_modules/gsap@3.14.2/ScrambleTextPlugin.js",
		"gsap/ScrollSmoother": "./client_modules/gsap@3.14.2/ScrollSmoother.js",
		"gsap/ScrollToPlugin": "./client_modules/gsap@3.14.2/ScrollToPlugin.js",
		"gsap/ScrollTrigger": "./client_modules/gsap@3.14.2/ScrollTrigger.js",
		"gsap/SplitText": "./client_modules/gsap@3.14.2/SplitText.js",
		"gsap/TextPlugin": "./client_modules/gsap@3.14.2/TextPlugin.js",
		"gsap/all": "./client_modules/gsap@3.14.2/all.js",
		"gsap/dist/CSSRulePlugin": "./client_modules/gsap@3.14.2/dist/CSSRulePlugin.js",
		"gsap/dist/CSSRulePlugin.min": "./client_modules/gsap@3.14.2/dist/CSSRulePlugin.min.js",
		"gsap/dist/CustomBounce": "./client_modules/gsap@3.14.2/dist/CustomBounce.js",
		"gsap/dist/CustomBounce.min": "./client_modules/gsap@3.14.2/dist/CustomBounce.min.js",
		"gsap/dist/CustomEase": "./client_modules/gsap@3.14.2/dist/CustomEase.js",
		"gsap/dist/CustomEase.min": "./client_modules/gsap@3.14.2/dist/CustomEase.min.js",
		"gsap/dist/CustomWiggle": "./client_modules/gsap@3.14.2/dist/CustomWiggle.js",
		"gsap/dist/CustomWiggle.min": "./client_modules/gsap@3.14.2/dist/CustomWiggle.min.js",
		"gsap/dist/Draggable": "./client_modules/gsap@3.14.2/dist/Draggable.js",
		"gsap/dist/Draggable.min": "./client_modules/gsap@3.14.2/dist/Draggable.min.js",
		"gsap/dist/DrawSVGPlugin": "./client_modules/gsap@3.14.2/dist/DrawSVGPlugin.js",
		"gsap/dist/DrawSVGPlugin.min": "./client_modules/gsap@3.14.2/dist/DrawSVGPlugin.min.js",
		"gsap/dist/EasePack": "./client_modules/gsap@3.14.2/dist/EasePack.js",
		"gsap/dist/EasePack.min": "./client_modules/gsap@3.14.2/dist/EasePack.min.js",
		"gsap/dist/EaselPlugin": "./client_modules/gsap@3.14.2/dist/EaselPlugin.js",
		"gsap/dist/EaselPlugin.min": "./client_modules/gsap@3.14.2/dist/EaselPlugin.min.js",
		"gsap/dist/Flip": "./client_modules/gsap@3.14.2/dist/Flip.js",
		"gsap/dist/Flip.min": "./client_modules/gsap@3.14.2/dist/Flip.min.js",
		"gsap/dist/GSDevTools": "./client_modules/gsap@3.14.2/dist/GSDevTools.js",
		"gsap/dist/GSDevTools.min": "./client_modules/gsap@3.14.2/dist/GSDevTools.min.js",
		"gsap/dist/InertiaPlugin": "./client_modules/gsap@3.14.2/dist/InertiaPlugin.js",
		"gsap/dist/InertiaPlugin.min": "./client_modules/gsap@3.14.2/dist/InertiaPlugin.min.js",
		"gsap/dist/MorphSVGPlugin": "./client_modules/gsap@3.14.2/dist/MorphSVGPlugin.js",
		"gsap/dist/MorphSVGPlugin.min": "./client_modules/gsap@3.14.2/dist/MorphSVGPlugin.min.js",
		"gsap/dist/MotionPathHelper": "./client_modules/gsap@3.14.2/dist/MotionPathHelper.js",
		"gsap/dist/MotionPathHelper.min": "./client_modules/gsap@3.14.2/dist/MotionPathHelper.min.js",
		"gsap/dist/MotionPathPlugin": "./client_modules/gsap@3.14.2/dist/MotionPathPlugin.js",
		"gsap/dist/MotionPathPlugin.min": "./client_modules/gsap@3.14.2/dist/MotionPathPlugin.min.js",
		"gsap/dist/Observer": "./client_modules/gsap@3.14.2/dist/Observer.js",
		"gsap/dist/Observer.min": "./client_modules/gsap@3.14.2/dist/Observer.min.js",
		"gsap/dist/Physics2DPlugin": "./client_modules/gsap@3.14.2/dist/Physics2DPlugin.js",
		"gsap/dist/Physics2DPlugin.min": "./client_modules/gsap@3.14.2/dist/Physics2DPlugin.min.js",
		"gsap/dist/PhysicsPropsPlugin": "./client_modules/gsap@3.14.2/dist/PhysicsPropsPlugin.js",
		"gsap/dist/PhysicsPropsPlugin.min": "./client_modules/gsap@3.14.2/dist/PhysicsPropsPlugin.min.js",
		"gsap/dist/PixiPlugin": "./client_modules/gsap@3.14.2/dist/PixiPlugin.js",
		"gsap/dist/PixiPlugin.min": "./client_modules/gsap@3.14.2/dist/PixiPlugin.min.js",
		"gsap/dist/ScrambleTextPlugin": "./client_modules/gsap@3.14.2/dist/ScrambleTextPlugin.js",
		"gsap/dist/ScrambleTextPlugin.min": "./client_modules/gsap@3.14.2/dist/ScrambleTextPlugin.min.js",
		"gsap/dist/ScrollSmoother": "./client_modules/gsap@3.14.2/dist/ScrollSmoother.js",
		"gsap/dist/ScrollSmoother.min": "./client_modules/gsap@3.14.2/dist/ScrollSmoother.min.js",
		"gsap/dist/ScrollToPlugin": "./client_modules/gsap@3.14.2/dist/ScrollToPlugin.js",
		"gsap/dist/ScrollToPlugin.min": "./client_modules/gsap@3.14.2/dist/ScrollToPlugin.min.js",
		"gsap/dist/ScrollTrigger": "./client_modules/gsap@3.14.2/dist/ScrollTrigger.js",
		"gsap/dist/ScrollTrigger.min": "./client_modules/gsap@3.14.2/dist/ScrollTrigger.min.js",
		"gsap/dist/SplitText": "./client_modules/gsap@3.14.2/dist/SplitText.js",
		"gsap/dist/SplitText.min": "./client_modules/gsap@3.14.2/dist/SplitText.min.js",
		"gsap/dist/TextPlugin": "./client_modules/gsap@3.14.2/dist/TextPlugin.js",
		"gsap/dist/TextPlugin.min": "./client_modules/gsap@3.14.2/dist/TextPlugin.min.js",
		"gsap/dist/all": "./client_modules/gsap@3.14.2/dist/all.js",
		"gsap/dist/gsap": "./client_modules/gsap@3.14.2/dist/gsap.js",
		"gsap/dist/gsap.min": "./client_modules/gsap@3.14.2/dist/gsap.min.js",
		"gsap/gsap-core": "./client_modules/gsap@3.14.2/gsap-core.js",
		"gsap/index": "./client_modules/gsap@3.14.2/index.js",
		"gsap/src/CSSPlugin": "./client_modules/gsap@3.14.2/src/CSSPlugin.js",
		"gsap/src/CSSRulePlugin": "./client_modules/gsap@3.14.2/src/CSSRulePlugin.js",
		"gsap/src/CustomBounce": "./client_modules/gsap@3.14.2/src/CustomBounce.js",
		"gsap/src/CustomEase": "./client_modules/gsap@3.14.2/src/CustomEase.js",
		"gsap/src/CustomWiggle": "./client_modules/gsap@3.14.2/src/CustomWiggle.js",
		"gsap/src/Draggable": "./client_modules/gsap@3.14.2/src/Draggable.js",
		"gsap/src/DrawSVGPlugin": "./client_modules/gsap@3.14.2/src/DrawSVGPlugin.js",
		"gsap/src/EasePack": "./client_modules/gsap@3.14.2/src/EasePack.js",
		"gsap/src/EaselPlugin": "./client_modules/gsap@3.14.2/src/EaselPlugin.js",
		"gsap/src/Flip": "./client_modules/gsap@3.14.2/src/Flip.js",
		"gsap/src/GSDevTools": "./client_modules/gsap@3.14.2/src/GSDevTools.js",
		"gsap/src/InertiaPlugin": "./client_modules/gsap@3.14.2/src/InertiaPlugin.js",
		"gsap/src/MorphSVGPlugin": "./client_modules/gsap@3.14.2/src/MorphSVGPlugin.js",
		"gsap/src/MotionPathHelper": "./client_modules/gsap@3.14.2/src/MotionPathHelper.js",
		"gsap/src/MotionPathPlugin": "./client_modules/gsap@3.14.2/src/MotionPathPlugin.js",
		"gsap/src/Observer": "./client_modules/gsap@3.14.2/src/Observer.js",
		"gsap/src/Physics2DPlugin": "./client_modules/gsap@3.14.2/src/Physics2DPlugin.js",
		"gsap/src/PhysicsPropsPlugin": "./client_modules/gsap@3.14.2/src/PhysicsPropsPlugin.js",
		"gsap/src/PixiPlugin": "./client_modules/gsap@3.14.2/src/PixiPlugin.js",
		"gsap/src/ScrambleTextPlugin": "./client_modules/gsap@3.14.2/src/ScrambleTextPlugin.js",
		"gsap/src/ScrollSmoother": "./client_modules/gsap@3.14.2/src/ScrollSmoother.js",
		"gsap/src/ScrollToPlugin": "./client_modules/gsap@3.14.2/src/ScrollToPlugin.js",
		"gsap/src/ScrollTrigger": "./client_modules/gsap@3.14.2/src/ScrollTrigger.js",
		"gsap/src/SplitText": "./client_modules/gsap@3.14.2/src/SplitText.js",
		"gsap/src/TextPlugin": "./client_modules/gsap@3.14.2/src/TextPlugin.js",
		"gsap/src/all": "./client_modules/gsap@3.14.2/src/all.js",
		"gsap/src/gsap-core": "./client_modules/gsap@3.14.2/src/gsap-core.js",
		"gsap/src/index": "./client_modules/gsap@3.14.2/src/index.js",
		"gsap/src/utils/PathEditor": "./client_modules/gsap@3.14.2/src/utils/PathEditor.js",
		"gsap/src/utils/VelocityTracker": "./client_modules/gsap@3.14.2/src/utils/VelocityTracker.js",
		"gsap/src/utils/matrix": "./client_modules/gsap@3.14.2/src/utils/matrix.js",
		"gsap/src/utils/paths": "./client_modules/gsap@3.14.2/src/utils/paths.js",
		"gsap/src/utils/strings": "./client_modules/gsap@3.14.2/src/utils/strings.js",
		"gsap/utils/PathEditor": "./client_modules/gsap@3.14.2/utils/PathEditor.js",
		"gsap/utils/VelocityTracker": "./client_modules/gsap@3.14.2/utils/VelocityTracker.js",
		"gsap/utils/matrix": "./client_modules/gsap@3.14.2/utils/matrix.js",
		"gsap/utils/paths": "./client_modules/gsap@3.14.2/utils/paths.js",
		"gsap/utils/strings": "./client_modules/gsap@3.14.2/utils/strings.js",
		"nudeps-demo-gsap": "./index.js"
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
