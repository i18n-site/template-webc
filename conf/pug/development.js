import merge from "@3-/merge"
import { default as GLOBAL, NPM } from "./GLOBAL.js"

const CONF = merge(GLOBAL, {
	NODE_ENV: "development",
	API: "//127.0.0.1:7776/",
	CSS_URL_LI: ["//127.0.0.1:7771/_.css"],
	IMPORT_MAP: {
		imports: {
			"-/": "//127.0.0.1:7772/",
		},
	},
	JS_URL_LI: [NPM + "vconsole/dist/vconsole.min.js"],
})

CONF.IMPORT_MAP = JSON.stringify(CONF.IMPORT_MAP)

export default CONF
