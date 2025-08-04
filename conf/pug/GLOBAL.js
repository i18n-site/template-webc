// export const NPM = "//fastly.jsdelivr.net/npm/"
export const NPM = "//cdn.jsdmirror.com/npm/"

export default {
	CSS_URL_LI: [NPM + "fc3@0.1.14/_.css"],
	JS_URL_LI: [],
	IMPORT_MAP: {
		imports: {
			"x/": NPM + "xxjs@0.1.5/",
		},
	},
}
