<script>
import Footer from "$lib/components/Footer.svelte";
import Header from "$lib/components/Header.svelte";

</script>

<main>
  <Header />
  <slot />
  <Footer />
</main>

<style>
  main {
    max-width: 60rem;
    padding: 0 1rem;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>