
export const niveaux = [
  "Primaire",
  "Collège",
  "Lycée",
  "2BAC"
];

export const centres = [
  { id: "CTR001", nom: "Nador Centre", ville: "Nador" },
  { id: "CTR002", nom: "Hay Al Matar", ville: "Nador" },
  { id: "CTR003", nom: "Selouane", ville: "Nador" }
];

export const cours = [
  { id: "CRS001", nom: "Mathématiques", niveau: "Primaire", prix: 300, centreId: "CTR001", jours: ["Lundi", "Mercredi"], heureDebut: "16:00", heureFin: "17:30" },
  { id: "CRS002", nom: "Français", niveau: "Collège", prix: 350, centreId: "CTR001", jours: ["Mardi", "Jeudi"], heureDebut: "17:00", heureFin: "18:30" },
  { id: "CRS003", nom: "Mathématiques", niveau: "Lycée", prix: 400, centreId: "CTR001", jours: ["Lundi", "Mercredi"], heureDebut: "18:00", heureFin: "19:30" },
  { id: "CRS004", nom: "Préparation Bac", niveau: "2BAC", prix: 500, centreId: "CTR001", jours: ["Samedi", "Dimanche"], heureDebut: "09:00", heureFin: "11:00" },
  { id: "CRS005", nom: "Français", niveau: "Primaire", prix: 300, centreId: "CTR002", jours: ["Lundi", "Jeudi"], heureDebut: "15:00", heureFin: "16:30" },
  { id: "CRS006", nom: "Anglais", niveau: "Collège", prix: 350, centreId: "CTR002", jours: ["Mardi", "Vendredi"], heureDebut: "16:00", heureFin: "17:30" },
  { id: "CRS007", nom: "Physique-Chimie", niveau: "Lycée", prix: 400, centreId: "CTR002", jours: ["Mercredi", "Samedi"], heureDebut: "17:00", heureFin: "18:30" },
  { id: "CRS008", nom: "Mathématiques", niveau: "2BAC", prix: 500, centreId: "CTR002", jours: ["Samedi", "Dimanche"], heureDebut: "14:00", heureFin: "16:00" },
  { id: "CRS009", nom: "Mathématiques", niveau: "Primaire", prix: 300, centreId: "CTR003", jours: ["Mardi", "Jeudi"], heureDebut: "15:00", heureFin: "16:30" },
  { id: "CRS010", nom: "Français", niveau: "Collège", prix: 350, centreId: "CTR003", jours: ["Lundi", "Mercredi"], heureDebut: "16:00", heureFin: "17:30" },
  { id: "CRS011", nom: "Mathématiques", niveau: "Lycée", prix: 400, centreId: "CTR003", jours: ["Mardi", "Vendredi"], heureDebut: "17:00", heureFin: "18:30" },
  { id: "CRS012", nom: "Préparation Bac", niveau: "2BAC", prix: 500, centreId: "CTR003", jours: ["Samedi", "Dimanche"], heureDebut: "09:00", heureFin: "11:00" }
];

export const parents = [
  { id: "PAR001", nom: "Amrani", prenom: "Mohamed", telephone: "0611111111", email: "mohamed.amrani@example.com" },
  { id: "PAR002", nom: "Alaoui", prenom: "Fatima", telephone: "0622222222", email: "fatima.alaoui@example.com" },
  { id: "PAR003", nom: "Bennani", prenom: "Youssef", telephone: "0633333333", email: "youssef.bennani@example.com" },
  { id: "PAR004", nom: "Idrissi", prenom: "Salma", telephone: "0644444444", email: "salma.idrissi@example.com" },
  { id: "PAR005", nom: "Tazi", prenom: "Khalid", telephone: "0655555555", email: "khalid.tazi@example.com" },
  { id: "PAR006", nom: "Fassi", prenom: "Nadia", telephone: "0666666666", email: "nadia.fassi@example.com" },
  { id: "PAR007", nom: "Lahlou", prenom: "Karim", telephone: "0677777777", email: "karim.lahlou@example.com" },
  { id: "PAR008", nom: "Chraibi", prenom: "Samira", telephone: "0688888888", email: "samira.chraibi@example.com" },
  { id: "PAR009", nom: "Berrada", prenom: "Omar", telephone: "0699999999", email: "omar.berrada@example.com" },
  { id: "PAR010", nom: "Mansouri", prenom: "Hajar", telephone: "0600000001", email: "hajar.mansouri@example.com" }
];



export const eleves = [
  { id: "ELV001", nom: "Amrani", prenom: "Adam", niveau: "Primaire", parentId: "PAR001" },
  { id: "ELV002", nom: "Amrani", prenom: "Sara", niveau: "Collège", parentId: "PAR001" },
  { id: "ELV003", nom: "Alaoui", prenom: "Yassine", niveau: "Primaire", parentId: "PAR002" },
  { id: "ELV004", nom: "Bennani", prenom: "Aya", niveau: "Collège", parentId: "PAR003" },
  { id: "ELV005", nom: "Idrissi", prenom: "Anas", niveau: "Lycée", parentId: "PAR004" },
  { id: "ELV006", nom: "Tazi", prenom: "Lina", niveau: "2BAC", parentId: "PAR005" },
  { id: "ELV007", nom: "Fassi", prenom: "Mehdi", niveau: "Primaire", parentId: "PAR006" },
  { id: "ELV008", nom: "Lahlou", prenom: "Nour", niveau: "Lycée", parentId: "PAR007" },
  { id: "ELV009", nom: "Chraibi", prenom: "Ilyas", niveau: "Primaire", parentId: "PAR008" },
  { id: "ELV010", nom: "Berrada", prenom: "Meriem", niveau: "2BAC", parentId: "PAR009" },
  { id: "ELV011", nom: "Mansouri", prenom: "Hamza", niveau: "Collège", parentId: "PAR010" },
  { id: "ELV012", nom: "Bennani", prenom: "Imane", niveau: "Primaire", parentId: "PAR003" },
  { id: "ELV013", nom: "Idrissi", prenom: "Rayan", niveau: "Collège", parentId: "PAR004" },
  { id: "ELV014", nom: "Tazi", prenom: "Malak", niveau: "2BAC", parentId: "PAR005" },
  { id: "ELV015", nom: "Fassi", prenom: "Othmane", niveau: "Primaire", parentId: "PAR006" },
  { id: "ELV016", nom: "Lahlou", prenom: "Ines", niveau: "Collège", parentId: "PAR007" },
  { id: "ELV017", nom: "Chraibi", prenom: "Zayd", niveau: "Primaire", parentId: "PAR008" },
  { id: "ELV018", nom: "Berrada", prenom: "Laila", niveau: "Lycée", parentId: "PAR009" },
  { id: "ELV019", nom: "Alaoui", prenom: "Omar", niveau: "Collège", parentId: "PAR002" },
  { id: "ELV020", nom: "Mansouri", prenom: "Salim", niveau: "2BAC", parentId: "PAR010" }
];

export const documentsRequis = [
  { id: "DOC001", nom: "Copie CIN du parent" },
  { id: "DOC002", nom: "Photo de l'élève" },
  { id: "DOC003", nom: "Certificat de scolarité" },
  { id: "DOC004", nom: "Formulaire d'inscription" }
];



export const inscriptions = [
  { id: "INS001", eleveId: "ELV001", coursId: "CRS001", centreId: "CTR001", date: "2026-09-01", montantPaye: 300, documentsManquants: [] },
  { id: "INS002", eleveId: "ELV002", coursId: "CRS002", centreId: "CTR001", date: "2026-09-02", montantPaye: 150, documentsManquants: ["Photo de l'élève"] },
  { id: "INS003", eleveId: "ELV003", coursId: "CRS005", centreId: "CTR002", date: "2026-09-03", montantPaye: 300, documentsManquants: [] },
  { id: "INS004", eleveId: "ELV004", coursId: "CRS006", centreId: "CTR002", date: "2026-09-04", montantPaye: 200, documentsManquants: ["Copie CIN du parent"] },
  { id: "INS005", eleveId: "ELV005", coursId: "CRS003", centreId: "CTR001", date: "2026-09-05", montantPaye: 400, documentsManquants: [] },
  { id: "INS006", eleveId: "ELV006", coursId: "CRS008", centreId: "CTR002", date: "2026-09-06", montantPaye: 0, documentsManquants: ["Formulaire d'inscription"] },
  { id: "INS007", eleveId: "ELV007", coursId: "CRS009", centreId: "CTR003", date: "2026-09-07", montantPaye: 100, documentsManquants: ["Certificat de scolarité"] },
  { id: "INS008", eleveId: "ELV008", coursId: "CRS011", centreId: "CTR003", date: "2026-09-08", montantPaye: 400, documentsManquants: [] },
  { id: "INS009", eleveId: "ELV009", coursId: "CRS001", centreId: "CTR001", date: "2026-09-09", montantPaye: 300, documentsManquants: [] },
  { id: "INS010", eleveId: "ELV010", coursId: "CRS012", centreId: "CTR003", date: "2026-09-10", montantPaye: 250, documentsManquants: ["Photo de l'élève"] },
  { id: "INS011", eleveId: "ELV011", coursId: "CRS006", centreId: "CTR002", date: "2026-09-11", montantPaye: 350, documentsManquants: [] },
  { id: "INS012", eleveId: "ELV012", coursId: "CRS005", centreId: "CTR002", date: "2026-09-12", montantPaye: 300, documentsManquants: [] },
  { id: "INS013", eleveId: "ELV013", coursId: "CRS002", centreId: "CTR001", date: "2026-09-13", montantPaye: 100, documentsManquants: ["Formulaire d'inscription"] },
  { id: "INS014", eleveId: "ELV014", coursId: "CRS008", centreId: "CTR002", date: "2026-09-14", montantPaye: 500, documentsManquants: [] },
  { id: "INS015", eleveId: "ELV015", coursId: "CRS009", centreId: "CTR003", date: "2026-09-15", montantPaye: 300, documentsManquants: [] },
  { id: "INS016", eleveId: "ELV016", coursId: "CRS010", centreId: "CTR003", date: "2026-09-16", montantPaye: 200, documentsManquants: ["Copie CIN du parent"] },
  { id: "INS017", eleveId: "ELV017", coursId: "CRS009", centreId: "CTR003", date: "2026-09-17", montantPaye: 300, documentsManquants: [] },
  { id: "INS018", eleveId: "ELV018", coursId: "CRS011", centreId: "CTR003", date: "2026-09-18", montantPaye: 400, documentsManquants: [] },
  { id: "INS019", eleveId: "ELV019", coursId: "CRS006", centreId: "CTR002", date: "2026-09-19", montantPaye: 150, documentsManquants: ["Photo de l'élève"] },
  { id: "INS020", eleveId: "ELV020", coursId: "CRS008", centreId: "CTR002", date: "2026-09-20", montantPaye: 250, documentsManquants: ["Certificat de scolarité"] }
];


const STORAGE_KEY = "inscriptions";

export function getInscriptions() {
  const dataSauvegardee = localStorage.getItem(STORAGE_KEY);

  if (dataSauvegardee !== null) {
    return JSON.parse(dataSauvegardee);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(inscriptions)
  );

  return inscriptions;
}
export function saveInscriptions(inscriptions) {
  localStorage.setItem(
    "inscriptions",
    JSON.stringify(inscriptions)
  );
}

export function getEleves() {
    const data = localStorage.getItem("eleves");

    if (data) {
        return JSON.parse(data);
    }

    localStorage.setItem("eleves", JSON.stringify(eleves));
    return eleves;
}

export function saveEleves(liste) {
    localStorage.setItem("eleves", JSON.stringify(liste));
}

export function getParents() {
    const data = localStorage.getItem("parents");

    if (data) {
        return JSON.parse(data);
    }

    localStorage.setItem("parents", JSON.stringify(parents));
    return parents;
}

export function saveParents(liste) {
    localStorage.setItem("parents", JSON.stringify(liste));
}