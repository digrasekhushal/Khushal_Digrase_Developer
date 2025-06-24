// Toggle mobile navigation menu visibility
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Initialize typing animation when the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    strings: [
      "UI/UX Designer",
      "Full-Stack Developer",
      "Quality Assurance",
      "Mobile Developer",
      "Freelancer",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: false,
  };
  const typed = new Typed(".typed", options);
});

// Handle switching between different content tabs (e.g., About section)
function toggleTab(tabName) {
  // Remove active class from all tabs and tab panels
  document
    .querySelectorAll(".tab-button")
    .forEach((tab) => tab.classList.remove("active"));
  document
    .querySelectorAll(".tab-panel")
    .forEach((content) => content.classList.remove("active"));
    
  // Activate the selected tab and its content
  document.querySelector("." + tabName).classList.add("active");
  document.querySelectorAll(".tab-button").forEach((tab) => {
    if (tab.textContent.toLowerCase() === tabName) tab.classList.add("active");
  });
}

// Handle Education, Skills, and Experience tab switching
function showTab(event, tabId) {
  // Hide all tab content and remove active class
  document
    .querySelectorAll(".tab-content")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");

  // Highlight the selected tab
  document
    .querySelectorAll(".tab")
    .forEach((el) => el.classList.remove("active"));
  event.target.classList.add("active");
}

// Filter and display projects based on selected category
function filterProjects(category, element) {
  // Highlight the active project filter tab
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  element.classList.add("active");

  // Show/hide projects based on selected category
  const allProjects = document.querySelectorAll(".project-box");
  allProjects.forEach((project) => {
    if (category === "all") {
      project.style.display = "block";
    } else {
      project.style.display = project.classList.contains(category)
        ? "block"
        : "none";
    }
  });
}

// Automatically show all projects on page load
window.onload = () => filterProjects("all", document.querySelector(".tab"));
