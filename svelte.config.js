import adapter from '@sveltejs/adapter-static'; // Cambia adapter-auto por static
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			base: '/activity-2', // Tu nombre de repositorio
		}
	}
};

export default config;
