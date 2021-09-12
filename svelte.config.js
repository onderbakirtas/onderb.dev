import vercel from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md'],
	kit: {
		target: 'body',
		adapter: vercel(),
		vite: {
			json: {
				namedExports: true
			}
		}
	},
	preprocess: [
		mdsvex({
			extension: '.svelte.md'
		})
	]
};

export default config;
