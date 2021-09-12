<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ fetch }) => {
		const url = './blog.json';
		const res = await fetch(url);

		if (!res.ok) {
			return {
				status: 500,
				error: new Error(`Yazılar yüklenirken hata oluştu. Hata URL'si: ${url}`)
			};
		}

		const { posts } = await res.json();
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
	<h2>
		<a href={`/blog/${post.slug}`}>{post.title}</a>
		<span>{new Date(post.created).toLocaleDateString('tr')}</span>
	</h2>
{/each}

<style>
	h2 {
		margin: 0;
		display: inline-flex;
		align-items: flex-end;
	}

	a {
		text-decoration: none;
    color: var(--color-text);
	}

  h2 span {
    font-size: 1rem;
    padding-left: 1rem;
    opacity: 0.7;
  }
</style>
