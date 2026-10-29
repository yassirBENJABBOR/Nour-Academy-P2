import '../css/style.css'


const buttons = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {

    const pageName = button.dataset.page;

    pages.forEach(function(page) {
      page.classList.remove("active");
    });

    const targetPage = document.querySelector("#page-" + pageName);

    if (targetPage) {
      targetPage.classList.add("active");
    }


    const topTitle = document.querySelector("#topTitle");
    const titles = {
    dashboard: "Dashboard",
    inscriptions: "Inscriptions",
    };
    topTitle.textContent = titles[pageName];



    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function(link) {
        link.classList.remove("active");
    });

    button.classList.add("active");

    if (window.innerWidth < 1024) {
        sidebar.classList.remove("open");
    }
  });
});


const sidebar = document.querySelector("#sidebar");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", function() {
  sidebar.classList.add("open");
});
closeMenu.addEventListener("click", function() {
  sidebar.classList.remove("open");
});