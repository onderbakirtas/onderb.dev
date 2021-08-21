<script>
  export let href;
  export let text;
</script>

<a {href} target="_blank">{text}</a>

<style>
  a {
    color: #012;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>