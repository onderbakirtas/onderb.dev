<script context="module">
	import { extractUrl } from '$lib/helpers/extract-url';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ page }) => {
		const modules = Object.entries(import.meta.glob('./*.svelte.md'));
		console.log(modules);

		const posts = modules.map((m) => {
			return extractUrl(m[0]);
		});

		return {
			props: { posts }
		};
	};
</script>

<script>
	export let posts;
</script>

<h1>Yazılar</h1>

{#each posts as post, i}
	<a href={`/blog/${post}`}>{post}</a>
{/each}
