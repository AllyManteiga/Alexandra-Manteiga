import renderNavbar from "./components/Navbar.js";
import renderMainPage from "./components/MainPage.js";
import renderProjectDetails from "./components/ProjectDetails.js";

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");

    const main = document.querySelector("main");

    if (projectId === null) {
      main.className = "main-grid"; // homepage uses grid
      renderNavbar("main");
      renderMainPage(data);
    } else {
      main.className = ""; // REMOVE grid
      renderNavbar("project");

      const project = data.projects.find((p) => p.id == projectId);
      renderProjectDetails(project);
    }
  });
