import '../css/style.css'

import { getInscriptions, saveInscriptions } from "./storage.js";

const inscriptions = getInscriptions();

console.log(inscriptions);
console.log(inscriptions.length);
console.log(inscriptions[0]);


inscriptions[0].statut = "En attente";

saveInscriptions(inscriptions);

console.log(getInscriptions()[0].statut);





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
    incomplete: "Inscriptions incomplètes",
    eleves: "Élèves",
    centres: "Centres",
    parametres: "Paramètres"
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