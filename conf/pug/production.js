import merge from "@3-/merge"
import GLOBAL from "./GLOBAL.js"

export default merge(GLOBAL, {
	API_URL: "//YOUR_SELF_API",
	CSS_URL_LI: ["/_.css"],
	IMPORT_MAP: JSON.stringify({
		imports: {
			"-/": "/",
		},
	}),
})
