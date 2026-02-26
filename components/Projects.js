import renderProject from "./Project.js";

export default function renderProjects(projects) {
  return `
    <section id="projects" class="project-cards">
      <h2>Projects</h2>
      <div class="search">
        <input type="search" placeholder="Search Projects..." />
      </div>

      <div class="projects-grid">
        <ul>
          ${projects.map((p) => renderProject(p)).join("")}
        </ul>
      </div>
    </section>`;
}
