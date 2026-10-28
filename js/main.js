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

buttons.forEach(function(button) {
  button.addEventListener("click", function() {

    const pageName = button.dataset.page;

    const dashboard = document.querySelector("#page-dashboard");
    const inscriptions = document.querySelector("#page-inscriptions");

    dashboard.classList.remove("active");
    inscriptions.classList.remove("active");

    if (pageName === "dashboard") {
      dashboard.classList.add("active");
    }

    if (pageName === "inscriptions") {
      inscriptions.classList.add("active");
    }

  });
});