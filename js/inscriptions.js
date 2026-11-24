
import {
    getEleves,
    getParents,
    centres,
    cours,
    documentsRequis,
    getInscriptions,
    saveInscriptions,
    getEtatDossier
} from "./data.js";

// Éléments HTML

const allRows = document.querySelector("#allRows");

const zoneModification = document.querySelector("#zone-modification");
const formModification = document.querySelector("#form-modification");

const modId = document.querySelector("#mod-id");
const modDate = document.querySelector("#mod-date");
const modPrix = document.querySelector("#mod-prix");

const modDocuments = document.querySelectorAll(
    'input[name="modDocuments"]'
);

const boutonAnnuler = document.querySelector("#annuler-modification");

const registrationSearch = document.querySelector("#registrationSearch");
const statusFilter = document.querySelector("#statusFilter");
const centreFilter = document.querySelector("#centreFilter");
const dateSort = document.querySelector("#dateSort");


// Filtrer les inscriptions

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

        const nomComplet = (
            eleve.prenom + " " + eleve.nom
        ).toLowerCase();

        const telephone = parent ? parent.telephone : "";

        return nomComplet.includes(recherche) ||
               telephone.includes(recherche);
    });

    // Filtrer selon l'état du dossier

    const etatChoisi = statusFilter.value;

    if (etatChoisi !== "") {
        resultat = resultat.filter(function (inscription) {
            return getEtatDossier(inscription) === etatChoisi;
        });
    }

    // Filtrer selon le centre

    const centreChoisi = centreFilter.value;

    if (centreChoisi !== "") {
        resultat = resultat.filter(function (inscription) {
            return inscription.centreId === centreChoisi;
        });
    }

    // Trier selon la date

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


// Afficher toutes les inscriptions

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

        const etat = getEtatDossier(inscription);

        let couleurEtat = "bg-yellow-100 text-yellow-700";

        if (etat === "Complet") {
            couleurEtat = "bg-green-100 text-green-700";
        }

        if (etat === "Incomplet") {
            couleurEtat = "bg-red-100 text-red-700";
        }

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


// Premier affichage

afficherToutesInscriptions();


// Événements des filtres

registrationSearch.addEventListener("input", afficherToutesInscriptions);
statusFilter.addEventListener("change", afficherToutesInscriptions);
centreFilter.addEventListener("change", afficherToutesInscriptions);
dateSort.addEventListener("change", afficherToutesInscriptions);


// Boutons Détails et Modifier

allRows.addEventListener("click", function (event) {

    // Bouton Détails

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

        const documentsManquants = Array.isArray(inscription.documentsManquants)
            ? inscription.documentsManquants
            : [];

        // Documents reçus = documents requis qui ne sont pas manquants

        const documentsRecus = documentsRequis
            .map(function (document) {
                return document.nom;
            })
            .filter(function (nomDocument) {
                return !documentsManquants.includes(nomDocument);
            });

        const etat = getEtatDossier(inscription);

        alert(
            "INSCRIPTION : " + inscription.id +

            "\nÉlève : " +
            (eleve ? eleve.prenom + " " + eleve.nom : "Inconnu") +

            "\nCours : " +
            (coursChoisi ? coursChoisi.nom : "Inconnu") +

            "\nCentre : " +
            (centre ? centre.nom : "Inconnu") +

            "\nÉtat du dossier : " + etat +

            "\n\nDOCUMENTS REÇUS :\n" +
            (documentsRecus.length > 0
                ? documentsRecus.map(function (doc) {
                    return "✓ " + doc;
                }).join("\n")
                : "Aucun document reçu") +

            "\n\nDOCUMENTS MANQUANTS :\n" +
            (documentsManquants.length > 0
                ? documentsManquants.map(function (doc) {
                    return "✗ " + doc;
                }).join("\n")
                : "Aucun document manquant")
        );

        return;
    }


    // Bouton Modifier

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
    modDate.value = inscription.date || inscription.dateInscription || "";
    modPrix.value = inscription.montantPaye || 0;

    const documentsManquants = Array.isArray(inscription.documentsManquants)
        ? inscription.documentsManquants
        : [];

    // Cocher automatiquement les documents déjà reçus

    modDocuments.forEach(function (checkbox) {
        checkbox.checked = !documentsManquants.includes(checkbox.value);
    });

    zoneModification.classList.remove("hidden");
});


// Enregistrer la modification

formModification.addEventListener("submit", function (event) {
    event.preventDefault();

    const listeInscriptions = getInscriptions();

    const inscription = listeInscriptions.find(function (item) {
        return item.id === modId.value;
    });

    if (!inscription) {
        return;
    }

    const nouveauMontant = Number(modPrix.value);

    const coursChoisi = cours.find(function (c) {
        return c.id === inscription.coursId;
    });

    if (
        nouveauMontant < 0 ||
        (coursChoisi && nouveauMontant > coursChoisi.prix)
    ) {
        alert("Le montant payé doit être compris entre 0 et le prix du cours.");
        return;
    }

    inscription.date = modDate.value;
    inscription.montantPaye = nouveauMontant;

    // Récupérer les documents cochés

    const documentsRecus = [];

    modDocuments.forEach(function (checkbox) {
        if (checkbox.checked) {
            documentsRecus.push(checkbox.value);
        }
    });

    // Comparer les documents reçus avec les documents requis

    inscription.documentsManquants = documentsRequis
        .map(function (document) {
            return document.nom;
        })
        .filter(function (nomDocument) {
            return !documentsRecus.includes(nomDocument);
        });

    // Le dossier vient d'être vérifié

    inscription.dossierVerifie = true;

    // Sauvegarder dans localStorage

    saveInscriptions(listeInscriptions);

    afficherToutesInscriptions();

    zoneModification.classList.add("hidden");

    alert("Modification enregistrée avec succès !");
});


// Annuler la modification

if (boutonAnnuler) {
    boutonAnnuler.addEventListener("click", function () {
        zoneModification.classList.add("hidden");
    });
}
