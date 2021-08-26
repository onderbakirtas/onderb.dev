<header>
	<nav>
		<a href="/" id="logotype"><span>onderb</span>.dev</a>
		<a href="mailto:onderb.dev@gmail.com" target="email" id="contact">Bana Yazın</a>
	</nav>
</header>

<style>
	header {
		padding: 1rem 0;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav > a {
		text-decoration: none;
	}

	nav > a#logotype {
		font-size: 1.5rem;
		letter-spacing: -0.05em;
		color: var(--color-text);
		font-family: 'Fonarto', sans-serif;
	}

  nav > a#logotype > span {
    opacity: 0.8;
  }

	nav > a#logotype:hover > span {
		color: royalblue;
    opacity: 1;
	}

	nav > a#contact {
		display: inline-flex;
		background-color: royalblue;
		color: #fff;
		padding: 0.625rem 1.5rem;
		border-radius: 0.375rem;
		font-weight: 700;
	}

	nav > a#contact:hover {
		transition: 0.15s;
		background: transparent;
		outline: 1px solid royalblue;
		color: royalblue;
	}
</style>
