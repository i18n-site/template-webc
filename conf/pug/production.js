import merge from "@3-/merge"
import GLOBAL from "./GLOBAL.js"

const CONF = merge(GLOBAL, {
	API_URL: "//api.xxx.com/",
	CSS_URL_LI: ["/_.css"],
	IMPORT_MAP: {
		imports: {
			"-/": "/",
		},
	},
})

CONF.IMPORT_MAP = JSON.stringify(CONF.IMPORT_MAP)
export default CONF
