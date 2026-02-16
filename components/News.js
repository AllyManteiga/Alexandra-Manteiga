export default function renderNews(news) {
  return `
      <section id="news" class="news-card">
        <h2>News</h2>
        <div class="search">
          <input type="search" placeholder="Search News..." />
        </div>
        <ul class="newslist">
          ${news
            .map(
              (n) => `
            <li>
              <p><strong>${n.date}</strong></p>
              <p>${n.description}</p>
            </li>
          `
            )
            .join("")}
        </ul>
      </section>`;
}
