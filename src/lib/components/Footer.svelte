<script>
	import { quotes } from '$lib/data/quotes';

	const randomizer = parseInt(Math.random() * quotes.length);

	const quote = quotes[randomizer];
</script>

<footer>
	<q>{quote.body}</q>
	<cite>– {quote.author}</cite>
</footer>

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
