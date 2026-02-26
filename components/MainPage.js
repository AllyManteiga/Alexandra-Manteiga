import renderAbout from "./About.js";
import renderNews from "./News.js";
import renderProjects from "./Projects.js";
import renderProject from "./Project.js"; // for project card rendering

export default function renderMainPage(data) {
  const main = document.querySelector("main");

  main.innerHTML = renderAbout(data.about);
  main.innerHTML += renderNews(data.news);
  main.innerHTML += renderProjects(data.projects);

  const newsSearch = document.querySelector("#news .search input");
  const newsList = document.querySelector("#news .newslist");

  newsSearch.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = data.news.filter(
      (n) =>
        n.description.toLowerCase().includes(value) ||
        n.date.toLowerCase().includes(value)
    );

    newsList.innerHTML = filtered
      .map(
        (n) => `
      <li>
        <p><strong>${n.date}</strong></p>
        <p>${n.description}</p>
      </li>
    `
      )
      .join("");
  });

  const projectSearch = document.querySelector("#projects .search input");
  const projectList = document.querySelector("#projects ul");

  projectSearch.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = data.projects.filter(
      (p) =>
        p.title.toLowerCase().includes(value) ||
        p.description.toLowerCase().includes(value)
    );

    projectList.innerHTML = filtered.map((p) => renderProject(p)).join("");
  });
}
