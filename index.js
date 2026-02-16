import renderNavbar from "./components/Navbar.js";
import renderMainPage from "./components/MainPage.js";
import renderProjectDetails from "./components/ProjectDetails.js";

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");

    const page = projectId === null ? "main" : "project-detail";

    if (page === "main") {
      renderNavbar("main");
      renderMainPage(data);
    } else {
      renderNavbar("project");
      const project = data.projects.find((p) => p.id == projectId);
      renderProjectDetails(project);
    }
  });
