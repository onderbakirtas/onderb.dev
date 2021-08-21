<script>
  export let href;
  export let text;
</script>

<a {href} target="_blank">{text}</a>

<style>
  a {
    color: #012;
    text-decoration: none;
    display: inline-block;
    position: relative;
    transition: 0.25s;
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 2px;
    background: #012;
    transition: 0.15s;
    z-index: -1;
  }

  a:hover {
    color: #eef;
  }

  a:hover::after {
    height: calc(100% - 4px);
  }
</style>