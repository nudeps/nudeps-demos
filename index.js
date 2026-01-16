import { createApp } from 'vue';
import { autoPlacement } from "@floating-ui/dom";
import { shift } from "@floating-ui/core";

globalThis.app = createApp({
	data () {
		return { msg: "Vue works!" }
	},

	methods: {
		autoPlacement,
		shift,
	}
}).mount(document.body);
