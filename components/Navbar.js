export default function renderNavbar(page) {
  if (page === "project") {
    document.querySelector("header").innerHTML = `
        <div class="navigation">
          <nav class="nav">
            <a href="index.html">Main Page</a>
          </nav>
        </div>`;
  } else {
    document.querySelector("header").innerHTML = `
        <div class="navigation">
          <nav class="nav">
            <a href="#about">About</a>
            <a href="#news">News</a>
            <a href="#projects">Projects</a>
          </nav>
        </div>`;
  }
}
