
import { centres, cours, getEleves, getInscriptions } from "./data.js";

const totalInscrits = document.querySelector("#total-inscrits");
const inscriptionsPayeesElement = document.querySelector("#total-payee");
const inscriptionsAttenteElement = document.querySelector("#total-attente");
const inscriptionsAnnuleesElement = document.querySelector("#total-annulee");
const recettesElement = document.querySelector("#total-recettes");
const tableauRecent = document.querySelector("#recentRows");

const inscriptions = getInscriptions();
const eleves = getEleves();
totalInscrits.textContent = inscriptions.length;

const inscriptionsPayees = inscriptions.filter((inscription) => {
    const coursChoisi = cours.find((course) => {
        return course.id === inscription.coursId;
    });

    return coursChoisi && Number(inscription.montantPaye) >= coursChoisi.prix;
});

inscriptionsPayeesElement.textContent = inscriptionsPayees.length;

const inscriptionsEnAttente = inscriptions.filter((inscription) => {
    return Number(inscription.montantPaye) === 0;
});

inscriptionsAttenteElement.textContent = inscriptionsEnAttente.length;

const recettes = inscriptions.reduce((total, inscription) => {
    return total + Number(inscription.montantPaye);
}, 0);

recettesElement.textContent = recettes.toLocaleString("fr-FR") + " MAD";

const inscriptionsAnnulees = inscriptions.filter((inscription) => {
    return inscription.statut === "Annulée";
});

inscriptionsAnnuleesElement.textContent = inscriptionsAnnulees.length;

inscriptions.sort((a, b) => new Date(b.date) - new Date(a.date));

const cinqInscriptions = inscriptions.slice(0, 5);

tableauRecent.innerHTML = "";

cinqInscriptions.forEach((inscription) => {

    const eleve = eleves.find((e) => e.id === inscription.eleveId);
    const centre = centres.find((c) => c.id === inscription.centreId);

    let etat = "Incomplet";

    if (inscription.documentsManquants.length === 0) {
        etat = "Complet";
    }

    const dateAffichee = new Date(inscription.date + "T00:00:00").toLocaleDateString("fr-FR");

    const ligne = document.createElement("tr");

    ligne.className = "hover:bg-slate-50 transition";

    ligne.innerHTML = `
        <td class="px-5 py-4">${inscription.id}</td>
        <td class="px-5 py-4">${eleve.nom} ${eleve.prenom}</td>
        <td class="px-5 py-4">${eleve.niveau}</td>
        <td class="px-5 py-4">${centre.nom}</td>
        <td class="px-5 py-4">${dateAffichee}</td>
        <td class="px-5 py-4">${etat}</td>
        <td class="px-5 py-4">
            <button class="btn-details text-blue-600" data-id="${inscription.id}">
                Voir
            </button>
        </td>
    `;

    tableauRecent.appendChild(ligne);

});
