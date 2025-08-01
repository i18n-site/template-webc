import merge from "@3-/merge"
import GLOBAL from "./GLOBAL.js"

const CONF = merge(GLOBAL, {
	API_URL: "//127.0.0.1:7776",
	CSS_URL_LI: ["//127.0.0.1:7771/_.css"],
	IMPORT_MAP: JSON.stringify({
		imports: {
			"-/": "//127.0.0.1:7772/",
		},
	}),
})

export default CONF
