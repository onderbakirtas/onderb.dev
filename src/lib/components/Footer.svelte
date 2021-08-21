<script>
	import { quotes } from '$lib/data/quotes';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let quote = null;
	const randomizer = parseInt(Math.random() * quotes.length);

	onMount(() => {
		quote = quotes[randomizer];
	});
</script>

{#if quote}
	<footer in:fade>
		<q>{quote.body}</q>
		<cite>– {quote.author}</cite>
	</footer>
{/if}

<style>
	footer {
		max-width: 40rem;
		margin: auto auto 0;
		margin-top: min(2rem, auto);
		padding: 1rem 0;
		display: flex;
		flex-direction: column;
	}

	q,
	cite {
		font-size: clamp(1rem, 2vw, 1.125rem);
	}
	q {
		color: #678;
		font-family: serif;
	}

	cite {
		margin-top: 0.5rem;
		align-self: flex-end;
	}
</style>
