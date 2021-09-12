<header>
	<a href="/" id="logotype"><span>onderb</span>.dev</a>
	<nav>
		<a href="/blog">Blog</a>
		<a href="mailto:onderb.dev@gmail.com" target="email" id="contact">Bana Yazın</a>
	</nav>
</header>

<style>
	header {
		padding: 1rem 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
	}

	nav {
		display: flex;
		align-items: center;
	}

	nav > a {
		margin-left: 0.5rem;
		height: 2.75rem;
		padding: 0 1.25rem;
		display: inline-flex;
		align-items: center;
		color: var(--color-text);
		border-radius: 0.375rem;
		box-sizing: border-box;
	}
	
	nav > a:hover {
		transition: 0.125s;
		color: #012;
		background-color: rgba(51, 68, 85, 0.15);
	}

	#logotype {
		font-size: 1.5rem;
		letter-spacing: -0.05em;
		color: var(--color-text);
		font-family: 'Fonarto', sans-serif;
	}

	#logotype > span {
		color: royalblue;
	}

	#logotype:hover > span {
		color: slategray;
	}

	#contact {
		background-color: transparent;
		color: royalblue;
		font-weight: 700;
		border: 2px solid royalblue;
	}

	#contact:hover {
		background: royalblue;
		color: var(--color-background);
	}
</style>
