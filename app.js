export const cours = [
    {titre: "Mathématiques essentielles",niveau: "Primaire",matiere: "Mathématiques",prix: 320,horaire: "Mercredi 16h30 - 18h",disponible: true},
    {titre: "Français & expression",niveau: "Primaire",matiere: "Français",prix: 300,horaire: "Samedi 10h - 11h30",disponible: true},
    {titre: "Éveil scientifique",niveau: "Primaire",matiere: "Sciences",prix: 320,horaire: "Lundi 17h - 18h30",disponible: false},
    {titre: "Mathématiques renforcées",niveau: "Collège",matiere: "Mathématiques",prix: 450,horaire: "Mardi 16h - 18h",disponible: true},
    {titre: "Physique-chimie",niveau: "Collège",matiere: "Sciences physiques",prix: 420,horaire: "Samedi 14h - 16h",disponible: true},
    {titre: "English confidence",niveau: "Collège",matiere: "English",prix: 380,horaire: "Dimanche 10h - 12h",disponible: true},
    {titre: "Algèbre & analyse",niveau: "Lycée",matiere: "Mathématiques",prix: 520,horaire: "Lundi 18h - 19h30",disponible: true},
    {titre: "Sciences physiques",niveau: "Lycée",matiere: "Sciences physiques",prix: 500,horaire: "Vendredi 16h - 18h",disponible: true},
    {titre: "Français méthodologie",niveau: "Lycée",matiere: "Français",prix: 420,horaire: "Samedi 12h - 14h",disponible: true},
    {titre: "Mathématiques Bac PC",niveau: "2e Bac",matiere: "Mathématiques",prix: 650,horaire: "Mardi 18h - 19h30",disponible: true},
    {titre: "Physique Bac — intensif",niveau: "2e Bac",matiere: "Sciences physiques",prix: 680,horaire: "Mercredi 18h - 19h30",disponible: false},
    {titre: "English for exams",niveau: "2e Bac",matiere: "English",prix: 450,horaire: "Dimanche 14h - 16h",disponible: true}
];

    
const bouton = document.getElementById("nav-button")
const popup = document.getElementById("popup")
const closeForum = document.getElementById("close-popup")



bouton.addEventListener("click", function () {
    popup.classList.remove("hidden")
});

closeForum.addEventListener("click" ,function(){
    popup.classList.add("hidden")
})

const coursesContainer = document.getElementById("courses-container");

function Affichercours(list){

    coursesContainer.innerHTML = "";
    list.forEach(function (e) {

    const carte = document.createElement("div");
    carte.className = "bg-white mx-auto md:mx-2 rounded-2xl p-4 pb-3 w-3/5  md:w-1/2 lg:w-2/7 border border-slate-100 shadow-sm";

        carte.innerHTML = `
            <img class="m-2 w-8 h-8 object-contain"
                src="./images/mini-icone/math.png"
                alt="mathematique">

            <small class="font-bold text-[#2563EB] text-[10px]">${e.niveau}</small>

            <h2 class="font-medium">${e.titre}</h2>

            <small class="text-[12px] text-[#a9b6c9]">${e.matiere}</small>

            <div class="bg-[#EFF6FF] p-4 rounded-2xl m-3 flex items-center gap-3">
                <div>
                    <img src="./images/mini-icone/montre.png"
                        class="w-5" alt="">
                </div>

                <div class="flex flex-col">
                    <small class="text-[10px] font-bold text-[#a9b6c9]">
                        Chaque semaine
                    </small>
                    <small class="font-medium">${e.horaire}</small>
                </div>
            </div>

            <div class="border-t border-[#c4cedc] px-3 pt-3 my-2 mx-3 flex justify-between items-end">
                <div>
                    <span class="text-2xl font-extrabold text-slate-800">${e.prix}</span>
                    <span class="text-[9px] text-slate-500">
                        MAD / mois
                    </span>
                </div>

                <button class="text-white bg-[#2563EB] rounded-[7px] px-3 py-2 text-xs shadow-lg font-medium whitespace-nowrap">
                    Sélectionner
                </button>
            </div>
        `;

    coursesContainer.appendChild(carte);
    })
}
Affichercours(cours);


const recherche =document.getElementById("search-input")
const filtreparcour = document.getElementById("filtreparcour")
const filtreparniveau = document.getElementById("filtreparniveau")


function filtrerCours() {
    const chercher = recherche.value.trim().toLowerCase();
    const niveauChoisi = filtreparniveau.value;
    const matiereChoisie = filtreparcour.value;

    const filtercours = cours.filter(function (e) {

        if (e.titre.toLowerCase().includes(chercher)) {
            if (niveauChoisi === "" || e.niveau === niveauChoisi) {

                if (matiereChoisie === "" || e.matiere === matiereChoisie) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }

        
    });

    Affichercours(filtercours);
}
recherche.addEventListener("input", filtrerCours);
filtreparcour.addEventListener("change", filtrerCours);
filtreparniveau.addEventListener("change", filtrerCours);


