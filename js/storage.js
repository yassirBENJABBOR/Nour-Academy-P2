import { inscriptions as inscriptionsInitiales } from "./data";

const STORAGE_KEY = "inscriptions";

export function getInscriptions() {
  const dataSauvegardee = localStorage.getItem(STORAGE_KEY);

  if (dataSauvegardee !== null) {
    return JSON.parse(dataSauvegardee);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(inscriptionsInitiales)
  );

  return inscriptionsInitiales;
}


export function saveInscriptions(inscriptions) {
  localStorage.setItem(
    "inscriptions",
    JSON.stringify(inscriptions)
  );
}

