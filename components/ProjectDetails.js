export default function renderProjectDetails(project) {
  const main = document.querySelector("main");

  main.innerHTML = `
      <section class="project-detail">
        <h2>${project.title}</h2>
        <p>${project.description}<br><b>${project.click}</b></br></p>
        <a href="${project.link}">
          <img src="${project.image}" alt="${project.title}" />
        </a>
      </section>`;
}
