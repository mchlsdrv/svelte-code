import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
// https://vitejs.dev/config/
export default defineConfig({
	build: {
		target: "es2015",
		minify: false,
	},
	plugins: [
		svelte({
			inspector: true,
		}),
		viteSingleFile(),
	],
});
