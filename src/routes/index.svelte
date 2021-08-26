<script>
	import Icon from '$lib/components/Icon.svelte';
	import Link from '$lib/components/Link.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';

	let hoveredColor = 'var(--color-text)';

	const handleHoverColor = (name) => {
		hoveredColor = connections.find((el) => el.name === name).color;
	};

	const unsetHoverColor = () => (hoveredColor = 'var(--color-text)');

	const connections = [
		{
			name: 'linkedin',
			url: 'https://linkedin.com/in/onderbakirtas',
			color: '#0077b5'
		},
		{
			name: 'github',
			url: 'https://github.com/onderbakirtas',
			color: '#6e5494'
		},
		{
			name: 'twitter',
			url: 'https://twitter.com/onderbakirtas',
			color: '#1da1f2'
		},
		{
			name: 'email',
			url: 'mailto:onderbakirtas@gmail.com',
			color: '#dd4b39'
		}
	];
</script>

<main>
	<aside>
		<img src="/onderbakirtas.jpg" alt="Önder Bakırtaş" />
		<span id="username" style={`color: ${hoveredColor}`}>onderbakirtas</span>
		<ul>
			{#each connections as connection, i}
				<li
					on:mouseover={() => handleHoverColor(connection.name)}
					on:focus={() => handleHoverColor(connection.name)}
					on:mouseleave={unsetHoverColor}
				>
					<a href={connection.url} id={connection.name} target="_blank">
						<Icon name={connection.name} />
					</a>
				</li>
			{/each}
		</ul>
	</aside>
	<section>
		<h1>Merhaba, ben <span>Önder Bakırtaş</span>.</h1>
		<Paragraph>
			Sakarya'dayım, <Link href="https://pixelate.com.tr/" text="Pixelate Creative" />'de Frontend
			geliştirici olarak çalışıyorum.
		</Paragraph>
		<Paragraph
			>Temel web standartlarını özümseyen ürünler geliştirmekten keyif alıyorum. Modern ile ilkeli
			sentezleyen çalışmalar yapıyorum.</Paragraph
		>
		<Paragraph
			>Genellikle JavaScript merkezli işler çıkarıyorum. <Link
				href="https://vuejs.org/"
				text="Vue"
			/>
			ve <Link href="https://svelte.dev" text="Svelte" /> frameworklerini aktif olarak kullanıyorum.
			<Link href="https://reactnative.dev/" text="React Native" /> ile mobil uygulamalar geliştiriyorum.
			Kişisel projelerimde ve küçük çaptaki kurumsal işlerde NodeJS (kimi zaman PHP) ile backend uygulamaları
			hazırlıyorum. Serverless mimarisine ilgi duyuyorum.</Paragraph
		>
		<Paragraph
			>Half-Life dünyasını -ki geliştirici olmamda başlangıç noktasıdır- çok seviyorum. Futbol
			maçları izlemek hobilerim arasında. Doğduğum şehrin takımı Trabzonspor'u destekliyorum. Hayatı
			anlamakta futbolun önemli bir araç olduğunu düşünüyorum.</Paragraph
		>
	</section>
</main>

<style>
	h1 {
		font-size: clamp(1.75rem, 3.5vw, 2.125rem);
		font-weight: 700;
		margin-top: 0;
		margin-bottom: 0.8em;
	}

	main {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
	}

	aside {
		padding-right: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

  section {
    margin-top: 2rem;
  }

	#username {
		display: flex;
		height: 2.5rem;
		align-items: center;
		justify-content: center;
		font-size: clamp(1rem, 2vw, 1.25rem);
		opacity: 1;
		border-radius: 0.5rem;
		margin-top: 0.5rem;
	}

	#username:hover {
		opacity: 1;
	}

	ul {
		display: flex;
		margin: 0.25rem 0 0;
		padding: 0;
		list-style: none;
		flex-flow: row wrap;
	}

	li {
		flex: 0 0 25%;
	}

	ul > li > a {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		border-radius: 0.5rem;
		color: var(--color-text);
		transition: color 0.125s, opacity 0.05s;
		opacity: 0.75;
	}

	ul > li > a:hover {
		opacity: 1;
	}

	ul > li > a :global(svg) {
		height: 2.25rem;
		width: 2.25rem;
	}

	#github:hover {
		color: #6e5494;
	}

	#twitter:hover {
		color: #1da1f2;
	}

	#linkedin:hover {
		color: #0077b5;
	}

	#email:hover {
		color: #ea4335;
	}

	img {
		border-radius: 50% / 50%;
    width: 10rem;
    height: 10rem;
		display: inline-block;
		box-shadow: 0 0 0 4px var(--color-background), 0 0 0 6px #dde;
	}

	@media screen and (min-width: 48rem) {
		main {
			flex-direction: row;
		}

		img {
			width: 12.5rem;
			height: 12.5rem;
		}

    section {
      margin-top: 0;
    }
	}
</style>
