
/* =========================
   1. LES CENTRES
========================= */

export const centres = [
  {
    id: "CTR001",
    nom: "Nador Centre",
    adresse: "Centre-ville, Nador",
    capaciteMax: 15,
    actif: true
  },
  {
    id: "CTR002",
    nom: "Hay Al Matar",
    adresse: "Hay Al Matar, Nador",
    capaciteMax: 15,
    actif: true
  },
  {
    id: "CTR003",
    nom: "Selouane",
    adresse: "Centre-ville, Selouane",
    capaciteMax: 15,
    actif: true
  }
];


/* =========================
   2. LES COURS
========================= */

export const cours = [
  { id: "CRS001", titre: "Mathématiques essentielles", niveau: "Primaire", matiere: "Mathématiques", prix: 320, horaire: "Mercredi 16h30 - 18h", disponible: true },
  { id: "CRS002", titre: "Français & expression", niveau: "Primaire", matiere: "Français", prix: 300, horaire: "Samedi 10h - 11h30", disponible: true },
  { id: "CRS003", titre: "Éveil scientifique", niveau: "Primaire", matiere: "Sciences", prix: 320, horaire: "Lundi 17h - 18h30", disponible: false },
  { id: "CRS004", titre: "Mathématiques renforcées", niveau: "Collège", matiere: "Mathématiques", prix: 450, horaire: "Mardi 16h - 18h", disponible: true },
  { id: "CRS005", titre: "Physique-chimie", niveau: "Collège", matiere: "Sciences physiques", prix: 420, horaire: "Samedi 14h - 16h", disponible: true },
  { id: "CRS006", titre: "English confidence", niveau: "Collège", matiere: "English", prix: 380, horaire: "Dimanche 10h - 12h", disponible: true },
  { id: "CRS007", titre: "Algèbre & analyse", niveau: "Lycée", matiere: "Mathématiques", prix: 520, horaire: "Lundi 18h - 19h30", disponible: true },
  { id: "CRS008", titre: "Sciences physiques", niveau: "Lycée", matiere: "Sciences physiques", prix: 500, horaire: "Vendredi 16h - 18h", disponible: true },
  { id: "CRS009", titre: "Français méthodologie", niveau: "Lycée", matiere: "Français", prix: 420, horaire: "Samedi 12h - 14h", disponible: true },
  { id: "CRS010", titre: "Mathématiques Bac PC", niveau: "2e Bac", matiere: "Mathématiques", prix: 650, horaire: "Mardi 18h - 19h30", disponible: true },
  { id: "CRS011", titre: "Physique Bac — intensif", niveau: "2e Bac", matiere: "Sciences physiques", prix: 680, horaire: "Mercredi 18h - 19h30", disponible: false },
  { id: "CRS012", titre: "English for exams", niveau: "2e Bac", matiere: "English", prix: 450, horaire: "Dimanche 14h - 16h", disponible: true }
];


/* =========================
   3. LES ÉLÈVES
========================= */

export const eleves = [
  { id: "ELV001", nom: "Sara", prenom: "El Amrani", telephoneParent: "0612345001", niveau: "Lycée", centreId: "CTR001" },
  { id: "ELV002", nom: "Yassine", prenom: "Bennis", telephoneParent: "0612345002", niveau: "Collège", centreId: "CTR002" },
  { id: "ELV003", nom: "Lina", prenom: "Chafai", telephoneParent: "0612345003", niveau: "Primaire", centreId: "CTR003" },
  { id: "ELV004", nom: "Adam", prenom: "Azzouzi", telephoneParent: "0612345004", niveau: "2e Bac", centreId: "CTR001" },
  { id: "ELV005", nom: "Meryem", prenom: "El Idrissi", telephoneParent: "0612345005", niveau: "Collège", centreId: "CTR002" },
  { id: "ELV006", nom: "Omar", prenom: "Alaoui", telephoneParent: "0612345006", niveau: "Primaire", centreId: "CTR001" },
  { id: "ELV007", nom: "Aya", prenom: "Benali", telephoneParent: "0612345007", niveau: "Lycée", centreId: "CTR003" },
  { id: "ELV008", nom: "Hamza", prenom: "Fikri", telephoneParent: "0612345008", niveau: "2e Bac", centreId: "CTR002" },
  { id: "ELV009", nom: "Salma", prenom: "Chakir", telephoneParent: "0612345009", niveau: "Primaire", centreId: "CTR003" },
  { id: "ELV010", nom: "Anas", prenom: "Bouzidi", telephoneParent: "0612345010", niveau: "Collège", centreId: "CTR001" },
  { id: "ELV011", nom: "Imane", prenom: "Tahiri", telephoneParent: "0612345011", niveau: "Lycée", centreId: "CTR002" },
  { id: "ELV012", nom: "Mehdi", prenom: "Lahlou", telephoneParent: "0612345012", niveau: "Primaire", centreId: "CTR003" },
  { id: "ELV013", nom: "Nour", prenom: "Berrada", telephoneParent: "0612345013", niveau: "2e Bac", centreId: "CTR001" },
  { id: "ELV014", nom: "Ilyas", prenom: "Mansouri", telephoneParent: "0612345014", niveau: "Collège", centreId: "CTR002" },
  { id: "ELV015", nom: "Hiba", prenom: "Rami", telephoneParent: "0612345015", niveau: "Primaire", centreId: "CTR001" },
  { id: "ELV016", nom: "Amine", prenom: "Saidi", telephoneParent: "0612345016", niveau: "Lycée", centreId: "CTR003" },
  { id: "ELV017", nom: "Malak", prenom: "Khalfi", telephoneParent: "0612345017", niveau: "Collège", centreId: "CTR001" },
  { id: "ELV018", nom: "Younes", prenom: "Zerouali", telephoneParent: "0612345018", niveau: "2e Bac", centreId: "CTR002" },
  { id: "ELV019", nom: "Rania", prenom: "Amrani", telephoneParent: "0612345019", niveau: "Primaire", centreId: "CTR003" },
  { id: "ELV020", nom: "Bilal", prenom: "Qadiri", telephoneParent: "0612345020", niveau: "Lycée", centreId: "CTR002" }
];


/* =========================
   4. LES INSCRIPTIONS
========================= */

export const inscriptions = [
  { id: "INS001", eleveId: "ELV001", coursId: "CRS007", centreId: "CTR001", dateInscription: "2026-10-20", statut: "Payée", dossierComplet: true, montantPaye: 520, documentsManquants: [] },
  { id: "INS002", eleveId: "ELV002", coursId: "CRS004", centreId: "CTR002", dateInscription: "2026-10-20", statut: "En attente", dossierComplet: false, montantPaye: 0, documentsManquants: ["Copie CIN"] },
  { id: "INS003", eleveId: "ELV003", coursId: "CRS001", centreId: "CTR003", dateInscription: "2026-10-21", statut: "Validée", dossierComplet: true, montantPaye: 0, documentsManquants: [] },
  { id: "INS004", eleveId: "ELV004", coursId: "CRS010", centreId: "CTR001", dateInscription: "2026-10-21", statut: "Payée", dossierComplet: true, montantPaye: 650, documentsManquants: [] },
  { id: "INS005", eleveId: "ELV005", coursId: "CRS005", centreId: "CTR002", dateInscription: "2026-10-21", statut: "En attente", dossierComplet: false, montantPaye: 0, documentsManquants: ["Photo d'identité"] },
  { id: "INS006", eleveId: "ELV006", coursId: "CRS002", centreId: "CTR001", dateInscription: "2026-10-22", statut: "Payée", dossierComplet: true, montantPaye: 300, documentsManquants: [] },
  { id: "INS007", eleveId: "ELV007", coursId: "CRS008", centreId: "CTR003", dateInscription: "2026-10-22", statut: "Validée", dossierComplet: true, montantPaye: 0, documentsManquants: [] },
  { id: "INS008", eleveId: "ELV008", coursId: "CRS012", centreId: "CTR002", dateInscription: "2026-10-22", statut: "Payée", dossierComplet: true, montantPaye: 450, documentsManquants: [] },
  { id: "INS009", eleveId: "ELV009", coursId: "CRS002", centreId: "CTR003", dateInscription: "2026-10-23", statut: "En attente", dossierComplet: false, montantPaye: 0, documentsManquants: ["Autorisation parentale"] },
  { id: "INS010", eleveId: "ELV010", coursId: "CRS006", centreId: "CTR001", dateInscription: "2026-10-23", statut: "Payée", dossierComplet: true, montantPaye: 380, documentsManquants: [] },
  { id: "INS011", eleveId: "ELV011", coursId: "CRS009", centreId: "CTR002", dateInscription: "2026-10-23", statut: "Validée", dossierComplet: true, montantPaye: 0, documentsManquants: [] },
  { id: "INS012", eleveId: "ELV012", coursId: "CRS001", centreId: "CTR003", dateInscription: "2026-10-24", statut: "Payée", dossierComplet: true, montantPaye: 320, documentsManquants: [] },
  { id: "INS013", eleveId: "ELV013", coursId: "CRS010", centreId: "CTR001", dateInscription: "2026-10-24", statut: "En attente", dossierComplet: false, montantPaye: 0, documentsManquants: ["Copie CIN"] },
  { id: "INS014", eleveId: "ELV014", coursId: "CRS004", centreId: "CTR002", dateInscription: "2026-10-24", statut: "Payée", dossierComplet: true, montantPaye: 450, documentsManquants: [] },
  { id: "INS015", eleveId: "ELV015", coursId: "CRS003", centreId: "CTR001", dateInscription: "2026-10-25", statut: "En attente", dossierComplet: false, montantPaye: 0, documentsManquants: ["Dossier scolaire"] },
  { id: "INS016", eleveId: "ELV016", coursId: "CRS008", centreId: "CTR003", dateInscription: "2026-10-25", statut: "Payée", dossierComplet: true, montantPaye: 500, documentsManquants: [] },
  { id: "INS017", eleveId: "ELV017", coursId: "CRS006", centreId: "CTR001", dateInscription: "2026-10-25", statut: "Validée", dossierComplet: true, montantPaye: 0, documentsManquants: [] },
  { id: "INS018", eleveId: "ELV018", coursId: "CRS011", centreId: "CTR002", dateInscription: "2026-10-26", statut: "En attente", dossierComplet: false, montantPaye: 0, documentsManquants: ["Photo d'identité"] },
  { id: "INS019", eleveId: "ELV019", coursId: "CRS002", centreId: "CTR003", dateInscription: "2026-10-26", statut: "Payée", dossierComplet: true, montantPaye: 300, documentsManquants: [] },
  { id: "INS020", eleveId: "ELV020", coursId: "CRS007", centreId: "CTR002", dateInscription: "2026-10-26", statut: "Validée", dossierComplet: true, montantPaye: 0, documentsManquants: [] }
];


/* =========================
   4. LES DOCUMENTS D'INSCRIPTION
========================= */

export const documentsRequis = [
  { id: "DOC001", nom: "Copie CIN du parent" },
  { id: "DOC002", nom: "Photo d'identité" },
  { id: "DOC003", nom: "Certificat de scolarité" },
  { id: "DOC004", nom: "Dossier scolaire" },
  { id: "DOC005", nom: "Autorisation parentale" }
];