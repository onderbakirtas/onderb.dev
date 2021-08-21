<script>
  import Link from "$lib/components/Link.svelte";
import Paragraph from "$lib/components/Paragraph.svelte";

</script>
  <h1>Merhaba, ben <span>Önder Bakırtaş</span>.</h1>
  <section>
    <Paragraph>
      Sakarya'dayım, <Link href="https://pixelate.com.tr/" text="Pixelate Creative" />'de Frontend geliştirici olarak çalışıyorum.
    </Paragraph>
    <Paragraph>Temel web standartlarını özümseyen ürünler geliştirmekten keyif alıyorum. Modern ile ilkeli sentezleyen çalışmalar yapıyorum.</Paragraph>
    <Paragraph>Genellikle JavaScript merkezli işler çıkarıyorum. <Link href="https://vuejs.org/" text="Vue" /> ve <Link href="https://svelte.dev" text="Svelte" /> frameworklerini aktif olarak kullanıyorum. <Link href="https://reactnative.dev/" text="React Native" /> ile mobil uygulamalar geliştiriyorum. Kişisel projelerimde ve küçük çaptaki kurumsal işlerde NodeJS (kimi zaman PHP) ile backend uygulamaları hazırlıyorum. Serverless mimarisine ilgi duyuyorum.</Paragraph>
    <Paragraph>Half-Life dünyasını -ki geliştirici olmamda başlangıç noktasıdır- çok seviyorum. Futbol maçları izlemek hobilerim arasında. Doğduğum şehrin takımı Trabzonspor'u destekliyorum. Hayatı anlamakta futbolun önemli bir araç olduğunu düşünüyorum.</Paragraph>
  </section>

<style>
  h1 {
    font-family: 'DM Serif Text', serif;
    font-size: clamp(1.75rem, 3.5vw, 2.125rem);
    font-weight: 700;
  }
</style>