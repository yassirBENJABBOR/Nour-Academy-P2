import {
    centres,
    cours,
    getEleves,
    saveEleves,
    getParents,
    saveParents,
    getInscriptions,
    saveInscriptions
} from "./data.js";

import { afficherToutesInscriptions } from "./inscriptions.js";

const modal = document.querySelector("#newRegistrationModal");
const form = document.querySelector("#newRegistrationForm");

const openButtons = document.querySelectorAll(
    '[data-action="new-registration"], #new-inscri'
);

const closeButton = document.querySelector("#closeNewRegistration");
const cancelButton = document.querySelector("#cancelNewRegistration");

const centreSelect = document.querySelector("#new-inscription-centre");
const coursSelect = document.querySelector("#new-inscription-cours");
const niveauSelect = document.querySelector("#new-eleve-niveau");
const prixInput = document.querySelector("#new-inscription-prix");

function ouvrirModal() {
    modal.classList.remove("hidden");
}

function fermerModal() {
    modal.classList.add("hidden");
}

openButtons.forEach(function (button) {
    button.addEventListener("click", ouvrirModal);
});

closeButton.addEventListener("click", fermerModal);
cancelButton.addEventListener("click", fermerModal);

centres.forEach(function (centre) {
    centreSelect.innerHTML += `
        <option value="${centre.id}">${centre.nom}</option>
    `;
});

function afficherCours() {
    const centreId = centreSelect.value;
    const niveau = niveauSelect.value;

    coursSelect.innerHTML = `<option value="">Choisir le cours</option>`;
    prixInput.value = "";

    if (!centreId || !niveau) {
        return;
    }

    const coursFiltres = cours.filter(function (c) {
        return c.centreId === centreId && c.niveau === niveau;
    });

    coursFiltres.forEach(function (c) {
        coursSelect.innerHTML += `
            <option value="${c.id}">${c.nom} - ${c.prix} MAD</option>
        `;
    });

    if (coursFiltres.length === 0) {
        coursSelect.innerHTML = `<option value="">Aucun cours disponible</option>`;
    }
}

centreSelect.addEventListener("change", afficherCours);
niveauSelect.addEventListener("change", afficherCours);

coursSelect.addEventListener("change", function () {
    const coursChoisi = cours.find(function (c) {
        return c.id === coursSelect.value;
    });

    prixInput.value = coursChoisi ? coursChoisi.prix : "";
});

function genererId(prefixe, liste) {
    let maximum = 0;

    liste.forEach(function (element) {
        const numero = Number(element.id.replace(prefixe, ""));

        if (numero > maximum) {
            maximum = numero;
        }
    });

    return prefixe + String(maximum + 1).padStart(3, "0");
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomEleve = document.querySelector("#new-eleve-nom").value.trim();
    const prenomEleve = document.querySelector("#new-eleve-prenom").value.trim();
    const niveau = niveauSelect.value;

    const nomParent = document.querySelector("#new-parent-nom").value.trim();
    const prenomParent = document.querySelector("#new-parent-prenom").value.trim();
    const telephone = document.querySelector("#new-parent-telephone").value.trim();
    const email = document.querySelector("#new-parent-email").value.trim();

    const centreId = centreSelect.value;
    const coursId = coursSelect.value;
    const date = document.querySelector("#new-inscription-date").value;

    const montantPaye = Number(
        document.querySelector("#new-inscription-paye").value
    );

    const listeEleves = getEleves();
    const listeParents = getParents();
    const listeInscriptions = getInscriptions();

    const coursChoisi = cours.find(function (c) {
        return c.id === coursId;
    });

    if (!coursChoisi) {
        alert("Veuillez choisir un cours.");
        return;
    }

    if (montantPaye < 0 || montantPaye > coursChoisi.prix) {
        alert("Le montant payé doit être compris entre 0 et le prix du cours.");
        return;
    }

    let eleve = listeEleves.find(function (e) {
        return e.nom.toLowerCase() === nomEleve.toLowerCase() &&
               e.prenom.toLowerCase() === prenomEleve.toLowerCase();
    });

    if (!eleve) {
        eleve = {
            id: genererId("ELV", listeEleves),
            nom: nomEleve,
            prenom: prenomEleve,
            niveau: niveau,
            parentId: ""
        };

        listeEleves.push(eleve);

    } else if (eleve.niveau !== niveau) {
        alert("Cet élève existe déjà avec un autre niveau.");
        return;
    }

    let parent = listeParents.find(function (p) {
        return p.telephone === telephone;
    });

    if (!parent) {
        parent = {
            id: genererId("PAR", listeParents),
            nom: nomParent,
            prenom: prenomParent,
            telephone: telephone,
            email: email
        };

        listeParents.push(parent);
    }

    eleve.parentId = parent.id;

    const doublon = listeInscriptions.find(function (i) {
        return i.eleveId === eleve.id && i.coursId === coursId;
    });

    if (doublon) {
        alert("Cet élève est déjà inscrit à ce cours.");
        return;
    }

    const documentsRecus = [];

    form.querySelectorAll('input[name="documentsRecus"]:checked').forEach(function (input) {
        documentsRecus.push(input.value);
    });

    const tousLesDocuments = [
        "Copie CIN du parent",
        "Photo de l'élève",
        "Certificat de scolarité",
        "Formulaire d'inscription"
    ];

    const documentsManquants = tousLesDocuments.filter(function (document) {
        return !documentsRecus.includes(document);
    });

    const nouvelleInscription = {
        id: genererId("INS", listeInscriptions),
        eleveId: eleve.id,
        coursId: coursId,
        centreId: centreId,
        date: date,
        montantPaye: montantPaye,
        documentsManquants: documentsManquants
    };

    listeInscriptions.push(nouvelleInscription);

    saveEleves(listeEleves);
    saveParents(listeParents);
    saveInscriptions(listeInscriptions);

    afficherToutesInscriptions();

    alert("Inscription ajoutée avec succès !");

    form.reset();
    prixInput.value = "";
    coursSelect.innerHTML = `<option value="">Choisir le cours</option>`;

    fermerModal();
});