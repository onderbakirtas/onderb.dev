<header>
  <nav>
    <a href="/" id="logotype">onderb.dev</a>
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
  }

  nav > a {
    text-decoration: none;
  }

  nav > a#logotype {
    font-size: 1.25rem;
    color: royalblue;
  }

  nav > a#logotype:hover {
    text-decoration: underline;
  }

  nav > a#contact {
    display: inline-flex;
    background-color: royalblue;
    color: #fff;
    padding: 0.5rem 1.5rem;
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