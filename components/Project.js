export default function renderProject(project) {
  return `
      <article class="project-card">
        <img src="${project.cover}" alt="${project.title}" />
        <div class="project-body">
          <h3><a href="?project=${project.id}">${project.title}</a></h3>
          <p>${project.description}</p>
        </div>
      </article>`;
}
