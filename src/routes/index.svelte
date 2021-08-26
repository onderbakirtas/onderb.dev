<script>
	import Link from '$lib/components/Link.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
</script>

<main>
	<aside>
		<img src="/onderbakirtas.jpg" alt="Önder Bakırtaş" />
		<ul>
			<li>
				<a href="https://github.com/onderbakirtas">GitHub</a>
			</li>
			<li>
				<a href="https://twitter.com/onderbakirtas">Twitter</a>
			</li>
			<li>
				<a href="https://linkedin.com/in/onderbakirtas">LinkedIn</a>
			</li>
			<li>
				<a href="mailto:onderbakirtas@gmail.com">E-posta</a>
			</li>
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
		font-family: 'DM Serif Text', serif;
		font-size: clamp(1.75rem, 3.5vw, 2.125rem);
		font-weight: 700;
		margin-top: 0;
	}

	main {
		display: flex;
		margin-top: 2rem;
	}

	aside {
		padding-right: 2rem;
	}

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

	img {
		border-radius: 50% / 50%;
		width: 12.5rem;
		height: 12.5rem;
		display: inline-block;
		box-shadow: 0 0 0 4px var(--color-background), 0 0 0 6px #dde;
	}
</style>
