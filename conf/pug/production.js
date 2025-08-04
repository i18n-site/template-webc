import merge from "@3-/merge"
import GLOBAL from "./GLOBAL.js"

const CONF = merge(GLOBAL, {
	NODE_ENV: "production",
	API: "//xxx.xxx.com/",
	CSS_URL_LI: ["/_.css"],
	IMPORT_MAP: {
		imports: {
			"-/": "/",
		},
	},
	JS_URL_LI: [],
})

CONF.IMPORT_MAP = JSON.stringify(CONF.IMPORT_MAP)
export default CONF
