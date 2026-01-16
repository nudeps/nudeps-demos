export default {
	overrides: {
		imports: {
			vue: './node_modules/vue/dist/vue.esm-browser.js',
		},
		scopes: {
			'./': {
				vue: undefined,
			}
		},
	},
	exclude: ['vue']
}
