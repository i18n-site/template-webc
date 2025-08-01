import Conf from "@3-/webc"
import merge from "@3-/merge"
import { defineConfig } from "vite"

const conf = await Conf(import.meta.dirname)

export default defineConfig(
	merge(conf, {
		define: {
			// __SRV__: JSON.stringify(process.env.__SRV__),
		},
		build: {
			rollupOptions: {
				external: [/^-\/.+/, /^virtual:.+/],
			},
		},
	}),
)
