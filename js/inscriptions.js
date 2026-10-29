
import {
  eleves,
  parents,
  centres,
  cours,
  getInscriptions,
  saveInscriptions
} from "./data.js";

const allRows = document.querySelector("#allRows");

const zoneModification = document.querySelector("#zone-modification");
const formModification = document.querySelector("#form-modification");
const modId = document.querySelector("#mod-id");
const modEtat = document.querySelector("#mod-etat");
const modPrix = document.querySelector("#mod-prix");


function afficherToutesInscriptions() {
  const listeInscriptions = getInscriptions();

  allRows.innerHTML = "";

  if (listeInscriptions.length === 0) {
    allRows.innerHTML = `
      <tr>
        <td colspan="11" class="p-4 text-center text-slate-500">
          Aucune inscription trouvée.
        </td>
      </tr>
    `;
    return;
  }

listeInscriptions.forEach(function (inscription) {
    const eleve = eleves.find(function (e) {
      return e.id === inscription.eleveId;
    });

    const parent = parents.find(function (p) {
        return p.id === eleve.parentId;
    });

    const coursChoisi = cours.find(function (c) {
      return c.id === inscription.coursId;
    });


    const prixCours = coursChoisi ? coursChoisi.prix : 0;
    const prixPaye = inscription.montantPaye || 0;
    const resteAPayer = Math.max(0, prixCours - prixPaye);

    const centre = centres.find(function (c) {
      return c.id === inscription.centreId;
    });

    if (!eleve || !centre) {
      return;
    }

    const dateInscription = inscription.date || inscription.dateInscription;

    const dateValide = dateInscription
      ? new Date(dateInscription + "T12:00:00")
      : null;

    const dateAffichee =
      dateValide && !Number.isNaN(dateValide.getTime())
        ? dateValide.toLocaleDateString("fr-FR")
        : "Date non disponible";

    const documentsManquants = Array.isArray(
      inscription.documentsManquants
    )
      ? inscription.documentsManquants
      : [];

    const dossierComplet = documentsManquants.length === 0;

    const etat = dossierComplet ? "Complet" : "Incomplet";

    const couleurEtat = dossierComplet
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

    const ligne = document.createElement("tr");

    ligne.className = "hover:bg-slate-50";

    ligne.innerHTML = `
      <td class="p-4">${inscription.id}</td>

      <td class="p-4">
        ${eleve.prenom} ${eleve.nom}
      </td>

      <td class="p-4">
        ${eleve.niveau}
      </td>

      <td class="p-4">
        ${centre.nom}
      </td>

      <td class="p-4">
        ${dateAffichee}
      </td>
        <td class="p-4">
        ${coursChoisi ? coursChoisi.nom : "Cours inconnu"}
        </td>

        <td class="p-4">
        ${prixCours} MAD
        </td>

        <td class="p-4">
        ${prixPaye} MAD
        </td>

        <td class="p-4 font-semibold">
        ${resteAPayer} MAD
        </td>

      <td class="p-4">
        <span class="rounded-full px-3 py-1 text-sm ${couleurEtat}">
          ${etat}
        </span>
      </td>

      <td class="p-4">
        <div class="flex items-center gap-2">

          <button
            type="button"
            data-id="${inscription.id}"
            class="btn-details rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100">
            Détails
          </button>

          <button
            type="button"
            data-id="${inscription.id}"
            class="btn-modifier rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">
            Modifier
          </button>

        </div>
      </td>
    `;

    allRows.appendChild(ligne);
  });
}

afficherToutesInscriptions();

allRows.addEventListener("click", function (event) {

  const boutonDetails = event.target.closest(".btn-details");

  if (boutonDetails) {
    const id = boutonDetails.dataset.id;

    const listeInscriptions = getInscriptions();

    const inscription = listeInscriptions.find(function (item) {
      return item.id === id;
    });

    if (!inscription) {
      return;
    }

    const eleve = eleves.find(function (e) {
      return e.id === inscription.eleveId;
    });

    const coursChoisi = cours.find(function (c) {
      return c.id === inscription.coursId;
    });

    

    const centre = centres.find(function (c) {
      return c.id === inscription.centreId;
    });

    const documentsManquants = Array.isArray(
      inscription.documentsManquants
    )
      ? inscription.documentsManquants
      : [];

    const etat =
      documentsManquants.length === 0 ? "Complet" : "Incomplet";

    alert(
      "Inscription : " + inscription.id +
      "\nÉlève : " + (eleve ? eleve.prenom + " " + eleve.nom : "Inconnu") +
      "\nCours : " + (coursChoisi ? coursChoisi.nom : "Inconnu") +
      "\nCentre : " + (centre ? centre.nom : "Inconnu") +
      "\nÉtat du dossier : " + etat +
      "\nDocuments manquants : " +
      (documentsManquants.length > 0
        ? documentsManquants.join(", ")
        : "Aucun")
    );

    return;
  }

  const boutonModifier = event.target.closest(".btn-modifier");

  if (!boutonModifier) {
    return;
  }

  const id = boutonModifier.dataset.id;

  const listeInscriptions = getInscriptions();

  const inscription = listeInscriptions.find(function (item) {
    return item.id === id;
  });

  if (!inscription) {
    return;
  }

  modId.value = inscription.id;
  modPrix.value = inscription.montantPaye || 0;

  const documentsManquants = Array.isArray(
    inscription.documentsManquants
  )
    ? inscription.documentsManquants
    : [];

  if (documentsManquants.length === 0) {
    modEtat.value = "Complet";
  } else {
    modEtat.value = "Incomplet";
  }

  zoneModification.classList.remove("hidden");
});

formModification.addEventListener("submit", function (event) {
  event.preventDefault();

  const listeInscriptions = getInscriptions();

  const inscription = listeInscriptions.find(function (item) {
    return item.id === modId.value;
  });

  if (!inscription) {
    return;
  }

    inscription.montantPaye = Number(modPrix.value);

    if (modEtat.value === "Complet") {
    inscription.documentsManquants = [];
    } else {
    inscription.documentsManquants = ["Document manquant"];
    }

  saveInscriptions(listeInscriptions);

  afficherToutesInscriptions();

  zoneModification.classList.add("hidden");
});

const boutonAnnuler = document.querySelector("#annuler-modification");

if (boutonAnnuler) {
  boutonAnnuler.addEventListener("click", function () {
    zoneModification.classList.add("hidden");
  });
}

function filtrerInscriptions() {

}
