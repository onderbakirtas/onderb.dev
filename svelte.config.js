import vercel from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

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
	preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
