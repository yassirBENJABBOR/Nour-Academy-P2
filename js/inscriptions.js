import {
    getEleves,
    getParents,
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

const registrationSearch = document.querySelector("#registrationSearch");
const statusFilter = document.querySelector("#statusFilter");
const centreFilter = document.querySelector("#centreFilter");
const dateSort = document.querySelector("#dateSort");

function appliquerFiltres(listeInscriptions) {
    const eleves = getEleves();
    const parents = getParents();

    const recherche = registrationSearch.value.toLowerCase().trim();

    let resultat = listeInscriptions.filter(function (inscription) {
        const eleve = eleves.find(function (e) {
            return e.id === inscription.eleveId;
        });

        if (!eleve) {
            return false;
        }

        const parent = parents.find(function (p) {
            return p.id === eleve.parentId;
        });

        const nomComplet = (eleve.prenom + " " + eleve.nom).toLowerCase();
        const telephone = parent ? parent.telephone : "";

        return nomComplet.includes(recherche) ||
               telephone.includes(recherche);
    });

    const etatChoisi = statusFilter.value;

    if (etatChoisi !== "") {
        resultat = resultat.filter(function (inscription) {
            const documents = inscription.documentsManquants || [];
            const etat = documents.length === 0 ? "Complet" : "Incomplet";

            return etat === etatChoisi;
        });
    }

    const centreChoisi = centreFilter.value;

    if (centreChoisi !== "") {
        resultat = resultat.filter(function (inscription) {
            return inscription.centreId === centreChoisi;
        });
    }

    const tri = dateSort.value;

    if (tri !== "") {
        resultat.sort(function (a, b) {
            const dateA = new Date(a.date || a.dateInscription).getTime() || 0;
            const dateB = new Date(b.date || b.dateInscription).getTime() || 0;

            if (tri === "croissant") {
                return dateA - dateB;
            }

            return dateB - dateA;
        });
    }

    return resultat;
}

export function afficherToutesInscriptions() {
    const eleves = getEleves();
    const listeInscriptions = appliquerFiltres(getInscriptions());

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

        if (!eleve) {
            return;
        }

        const coursChoisi = cours.find(function (c) {
            return c.id === inscription.coursId;
        });

        const centre = centres.find(function (c) {
            return c.id === inscription.centreId;
        });

        if (!centre) {
            return;
        }

        const prixCours = coursChoisi ? coursChoisi.prix : 0;
        const prixPaye = inscription.montantPaye || 0;
        const resteAPayer = Math.max(0, prixCours - prixPaye);

        const dateInscription = inscription.date || inscription.dateInscription;

        const dateValide = dateInscription
            ? new Date(dateInscription + "T12:00:00")
            : null;

        const dateAffichee = dateValide && !Number.isNaN(dateValide.getTime())
            ? dateValide.toLocaleDateString("fr-FR")
            : "Date non disponible";

        const documentsManquants = inscription.documentsManquants || [];
        const dossierComplet = documentsManquants.length === 0;

        const etat = dossierComplet ? "Complet" : "Incomplet";
        const couleurEtat = dossierComplet
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700";

        const ligne = document.createElement("tr");

        ligne.className = "hover:bg-slate-50";

        ligne.innerHTML = `
            <td class="p-4">${inscription.id}</td>
            <td class="p-4">${eleve.prenom} ${eleve.nom}</td>
            <td class="p-4">${eleve.niveau}</td>
            <td class="p-4">${centre.nom}</td>
            <td class="p-4">${dateAffichee}</td>
            <td class="p-4">${coursChoisi ? coursChoisi.nom : "Cours inconnu"}</td>
            <td class="p-4">${prixCours} MAD</td>
            <td class="p-4">${prixPaye} MAD</td>
            <td class="p-4 font-semibold">${resteAPayer} MAD</td>

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

registrationSearch.addEventListener("input", afficherToutesInscriptions);
statusFilter.addEventListener("change", afficherToutesInscriptions);
centreFilter.addEventListener("change", afficherToutesInscriptions);
dateSort.addEventListener("change", afficherToutesInscriptions);

allRows.addEventListener("click", function (event) {
    const boutonDetails = event.target.closest(".btn-details");

    if (boutonDetails) {
        const id = boutonDetails.dataset.id;
        const inscription = getInscriptions().find(function (item) {
            return item.id === id;
        });

        if (!inscription) {
            return;
        }

        const eleve = getEleves().find(function (e) {
            return e.id === inscription.eleveId;
        });

        const coursChoisi = cours.find(function (c) {
            return c.id === inscription.coursId;
        });

        const centre = centres.find(function (c) {
            return c.id === inscription.centreId;
        });

        const documentsManquants = inscription.documentsManquants || [];
        const etat = documentsManquants.length === 0 ? "Complet" : "Incomplet";

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

    const inscription = getInscriptions().find(function (item) {
        return item.id === id;
    });

    if (!inscription) {
        return;
    }

    modId.value = inscription.id;
    modPrix.value = inscription.montantPaye || 0;

    modEtat.value = (inscription.documentsManquants || []).length === 0
        ? "Complet"
        : "Incomplet";

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