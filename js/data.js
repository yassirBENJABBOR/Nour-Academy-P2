
/* =========================
   CONSTANTES
========================= */

export const niveaux = [
  "Primaire",
  "Collège",
  "Lycée",
  "2BAC"
];

export const centres = [
  { id: 1, nom: "Centre Casablanca", ville: "Casablanca" },
  { id: 2, nom: "Centre Rabat", ville: "Rabat" },
  { id: 3, nom: "Centre Marrakech", ville: "Marrakech" }
];

/* =========================
   COURS
   Prix en DH par mois
========================= */

export const cours = [
  {id: 1,nom: "Mathématiques",niveau: "Primaire",prix: 300,centreId: 1,jours: ["Lundi", "Mercredi"],heureDebut: "16:00",heureFin: "17:30"},
  {id: 2,nom: "Français",niveau: "Collège",prix: 350,centreId: 1,jours: ["Mardi", "Jeudi"],heureDebut: "17:00",heureFin: "18:30"},
  {id: 3,nom: "Mathématiques",niveau: "Lycée",prix: 400,centreId: 1,jours: ["Lundi", "Mercredi"],heureDebut: "18:00",heureFin: "19:30"},
  {id: 4,nom: "Préparation Bac",niveau: "2BAC",prix: 500,centreId: 1,jours: ["Samedi", "Dimanche"],heureDebut: "09:00",heureFin: "11:00"},
  {id: 5,nom: "Français",niveau: "Primaire",prix: 300,centreId: 2,jours: ["Lundi", "Jeudi"],heureDebut: "15:00",heureFin: "16:30"},
  {id: 6,nom: "Anglais",niveau: "Collège",prix: 350,centreId: 2,jours: ["Mardi", "Vendredi"],heureDebut: "16:00",heureFin: "17:30"},
  {id: 7,nom: "Physique-Chimie",niveau: "Lycée",prix: 400,centreId: 2,jours: ["Mercredi", "Samedi"],heureDebut: "17:00",heureFin: "18:30"},
  {id: 8,nom: "Mathématiques",niveau: "2BAC",prix: 500,centreId: 2,jours: ["Samedi", "Dimanche"],heureDebut: "14:00",heureFin: "16:00"},
  {id: 9,nom: "Mathématiques",niveau: "Primaire",prix: 300,centreId: 3,jours: ["Mardi", "Jeudi"],heureDebut: "15:00",heureFin: "16:30"},
  {id: 10,nom: "Français",niveau: "Collège",prix: 350,centreId: 3,jours: ["Lundi", "Mercredi"],heureDebut: "16:00",heureFin: "17:30"},
  {id: 11,nom: "Mathématiques",niveau: "Lycée",prix: 400,centreId: 3,jours: ["Mardi", "Vendredi"],heureDebut: "17:00",heureFin: "18:30"},
  {id: 12,nom: "Préparation Bac",niveau: "2BAC",prix: 500,centreId: 3,jours: ["Samedi", "Dimanche"],heureDebut: "09:00",heureFin: "11:00"}
];

/* =========================
   PARENTS
========================= */

export const parents = [
  {id: 1,nom: "Amrani",prenom: "Mohamed",telephone: "0611111111",email: "mohamed.amrani@example.com"},
  {id: 2,nom: "Alaoui",prenom: "Fatima",telephone: "0622222222",email: "fatima.alaoui@example.com"},
  {id: 3,nom: "Bennani",prenom: "Youssef",telephone: "0633333333",email: "youssef.bennani@example.com"},
  {id: 4,nom: "Idrissi",prenom: "Salma",telephone: "0644444444",email: "salma.idrissi@example.com"},
  {id: 5,nom: "Tazi",prenom: "Khalid",telephone: "0655555555",email: "khalid.tazi@example.com"},
  {id: 6,nom: "Fassi",prenom: "Nadia",telephone: "0666666666",email: "nadia.fassi@example.com"},
  {id: 7,nom: "Lahlou",prenom: "Karim",telephone: "0677777777",email: "karim.lahlou@example.com"},
  {id: 8,nom: "Chraibi",prenom: "Samira",telephone: "0688888888",email: "samira.chraibi@example.com"},
  {id: 9,nom: "Berrada",prenom: "Omar",telephone: "0699999999",email: "omar.berrada@example.com"},
  {id: 10,nom: "Mansouri",prenom: "Hajar",telephone: "0600000001",email: "hajar.mansouri@example.com"}
];

/* =========================
   ELEVES
   parentId = liaison parent/enfant
========================= */

export const eleves = [
  { id: 1, nom: "Amrani", prenom: "Adam", niveau: "Primaire", parentId: 1 },
  { id: 2, nom: "Amrani", prenom: "Sara", niveau: "Collège", parentId: 1 },
  { id: 3, nom: "Alaoui", prenom: "Yassine", niveau: "Primaire", parentId: 2 },
  { id: 4, nom: "Bennani", prenom: "Aya", niveau: "Collège", parentId: 3 },
  { id: 5, nom: "Idrissi", prenom: "Anas", niveau: "Lycée", parentId: 4 },
  { id: 6, nom: "Tazi", prenom: "Lina", niveau: "2BAC", parentId: 5 },
  { id: 7, nom: "Fassi", prenom: "Mehdi", niveau: "Primaire", parentId: 6 },
  { id: 8, nom: "Lahlou", prenom: "Nour", niveau: "Lycée", parentId: 7 },
  { id: 9, nom: "Chraibi", prenom: "Ilyas", niveau: "Primaire", parentId: 8 },
  { id: 10, nom: "Berrada", prenom: "Meriem", niveau: "2BAC", parentId: 9 },
  { id: 11, nom: "Mansouri", prenom: "Hamza", niveau: "Collège", parentId: 10 },
  { id: 12, nom: "Bennani", prenom: "Imane", niveau: "Primaire", parentId: 3 },
  { id: 13, nom: "Idrissi", prenom: "Rayan", niveau: "Collège", parentId: 4 },
  { id: 14, nom: "Tazi", prenom: "Malak", niveau: "2BAC", parentId: 5 },
  { id: 15, nom: "Fassi", prenom: "Othmane", niveau: "Primaire", parentId: 6 },
  { id: 16, nom: "Lahlou", prenom: "Ines", niveau: "Collège", parentId: 7 },
  { id: 17, nom: "Chraibi", prenom: "Zayd", niveau: "Primaire", parentId: 8 },
  { id: 18, nom: "Berrada", prenom: "Laila", niveau: "Lycée", parentId: 9 },
  { id: 19, nom: "Alaoui", prenom: "Omar", niveau: "Collège", parentId: 2 },
  { id: 20, nom: "Mansouri", prenom: "Salim", niveau: "2BAC", parentId: 10 }
];

/* =========================
   DOCUMENTS REQUIS
========================= */

export const documentsRequis = [
  { id: 1, nom: "Copie CIN du parent" },
  { id: 2, nom: "Photo de l'élève" },
  { id: 3, nom: "Certificat de scolarité" },
  { id: 4, nom: "Formulaire d'inscription" }
];


export const inscriptions = [
  { id: 1, eleveId: 1, coursId: 1, centreId: 1, date: "2026-09-01", montantPaye: 300, documentsManquants: [] },
  { id: 2, eleveId: 2, coursId: 2, centreId: 1, date: "2026-09-02", montantPaye: 150, documentsManquants: ["Photo de l'élève"] },
  { id: 3, eleveId: 3, coursId: 5, centreId: 2, date: "2026-09-03", montantPaye: 300, documentsManquants: [] },
  { id: 4, eleveId: 4, coursId: 6, centreId: 2, date: "2026-09-04", montantPaye: 200, documentsManquants: ["Copie CIN du parent"] },
  { id: 5, eleveId: 5, coursId: 3, centreId: 1, date: "2026-09-05", montantPaye: 400, documentsManquants: [] },
  { id: 6, eleveId: 6, coursId: 8, centreId: 2, date: "2026-09-06", montantPaye: 0, documentsManquants: ["Formulaire d'inscription"] },
  { id: 7, eleveId: 7, coursId: 9, centreId: 3, date: "2026-09-07", montantPaye: 100, documentsManquants: ["Certificat de scolarité"] },
  { id: 8, eleveId: 8, coursId: 11, centreId: 3, date: "2026-09-08", montantPaye: 400, documentsManquants: [] },
  { id: 9, eleveId: 9, coursId: 1, centreId: 1, date: "2026-09-09", montantPaye: 300, documentsManquants: [] },
  { id: 10, eleveId: 10, coursId: 12, centreId: 3, date: "2026-09-10", montantPaye: 250, documentsManquants: ["Photo de l'élève"] },
  { id: 11, eleveId: 11, coursId: 6, centreId: 2, date: "2026-09-11", montantPaye: 350, documentsManquants: [] },
  { id: 12, eleveId: 12, coursId: 5, centreId: 2, date: "2026-09-12", montantPaye: 300, documentsManquants: [] },
  { id: 13, eleveId: 13, coursId: 2, centreId: 1, date: "2026-09-13", montantPaye: 100, documentsManquants: ["Formulaire d'inscription"] },
  { id: 14, eleveId: 14, coursId: 8, centreId: 2, date: "2026-09-14", montantPaye: 500, documentsManquants: [] },
  { id: 15, eleveId: 15, coursId: 9, centreId: 3, date: "2026-09-15", montantPaye: 300, documentsManquants: [] },
  { id: 16, eleveId: 16, coursId: 10, centreId: 3, date: "2026-09-16", montantPaye: 200, documentsManquants: ["Copie CIN du parent"] },
  { id: 17, eleveId: 17, coursId: 9, centreId: 3, date: "2026-09-17", montantPaye: 300, documentsManquants: [] },
  { id: 18, eleveId: 18, coursId: 11, centreId: 3, date: "2026-09-18", montantPaye: 400, documentsManquants: [] },
  { id: 19, eleveId: 19, coursId: 6, centreId: 2, date: "2026-09-19", montantPaye: 150, documentsManquants: ["Photo de l'élève"] },
  { id: 20, eleveId: 20, coursId: 8, centreId: 2, date: "2026-09-20", montantPaye: 250, documentsManquants: ["Certificat de scolarité"] }
];


export function getSeedData() {
  return JSON.parse(JSON.stringify({
    centres,
    cours,
    parents,
    eleves,
    inscriptions,
    documentsRequis,
    niveaux
  }));
}

export function getParentByEleve(eleveId) {
  const eleve = eleves.find(e => e.id === eleveId);

  if (!eleve) return null;

  return parents.find(p => p.id === eleve.parentId) ?? null;
}

export function getElevesByParent(parentId) {
  return eleves.filter(e => e.parentId === parentId);
}

export function getCoursByCentre(centreId) {
  return cours.filter(c => c.centreId === centreId);
}

export function getCoursByNiveau(niveau) {
  return cours.filter(c => c.niveau === niveau);
}

export function getInscriptionsByEleve(eleveId) {
  return inscriptions.filter(i => i.eleveId === eleveId);
}

export function getInscriptionsByParent(parentId) {
  const enfants = getElevesByParent(parentId);
  const idsEnfants = enfants.map(e => e.id);

  return inscriptions.filter(i => idsEnfants.includes(i.eleveId));
}

export function getCoursByInscription(inscription) {
  return cours.find(c => c.id === inscription.coursId) ?? null;
}

export function getMontantRestant(inscription) {
  const coursInscrit = getCoursByInscription(inscription);

  if (!coursInscrit) return 0;

  return Math.max(
    0,
    coursInscrit.prix - inscription.montantPaye
  );
}

export function getStatutPaiement(inscription) {
  const coursInscrit = getCoursByInscription(inscription);

  if (!coursInscrit) return "Inconnu";

  if (inscription.montantPaye <= 0) {
    return "Non payé";
  }

  if (inscription.montantPaye < coursInscrit.prix) {
    return "Partiellement payé";
  }

  return "Payé";
}

export function isDossierComplet(inscription) {
  return inscription.documentsManquants.length === 0;
}

export function getStatistiquesAdmin() {
  const totalPaye = inscriptions.reduce(
    (total, i) => total + i.montantPaye,
    0
  );

  const totalRestant = inscriptions.reduce(
    (total, i) => total + getMontantRestant(i),
    0
  );

  return {
    totalCentres: centres.length,
    totalCours: cours.length,
    totalParents: parents.length,
    totalEleves: eleves.length,
    totalInscriptions: inscriptions.length,
    totalPaye,
    totalRestant,
    dossiersIncomplets: inscriptions.filter(
      i => !isDossierComplet(i)
    ).length
  };
}



export const validators = {
  nom: /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s'-]{1,49}$/,
  telephone: /^(?:\+212|0)(?:[5-7]\d{8})$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  date: /^\d{4}-\d{2}-\d{2}$/
};


export function validerInscription(
  form,
  state = { eleves, cours, centres }
) {
  const erreurs = [];

  const eleveId = Number(form.eleveId);
  const coursId = Number(form.coursId);
  const centreId = Number(form.centreId);

  const eleve = state.eleves.find(e => e.id === eleveId);
  const coursChoisi = state.cours.find(c => c.id === coursId);
  const centre = state.centres.find(c => c.id === centreId);

  if (!eleve) erreurs.push("Veuillez sélectionner un élève valide.");
  if (!coursChoisi) erreurs.push("Veuillez sélectionner un cours valide.");
  if (!centre) erreurs.push("Veuillez sélectionner un centre valide.");

  if (!validators.date.test(form.date || "")) {
    erreurs.push("Veuillez saisir une date valide.");
  }

  if (!Number.isFinite(Number(form.montantPaye)) ||
      Number(form.montantPaye) < 0) {
    erreurs.push("Le montant payé doit être positif ou nul.");
  }

  if (eleve && coursChoisi && eleve.niveau !== coursChoisi.niveau) {
    erreurs.push("Le niveau du cours ne correspond pas à celui de l'élève.");
  }

  if (coursChoisi && coursChoisi.centreId !== centreId) {
    erreurs.push("Ce cours n'appartient pas au centre sélectionné.");
  }

  return erreurs;
}


