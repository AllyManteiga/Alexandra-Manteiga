export default function renderAbout(about) {
  return `
      <section id="about" class="about-card">
        <h2>About</h2>
        <div class="about-grid">
          <div class="profile">
            <img src="${about.photo}" alt="${about.name}" class="photo" />
          </div>
          <div class="bio">
            <h3>${about.name}</h3>
            <p class="info">
              ${about.address} | ${about.email} |
              <a href="${about.linkedin}" target="_blank">LinkedIn</a>
            </p>
            <p>${about.bio}</p>
          </div>
        </div>
      </section>`;
}
