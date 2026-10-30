

const email = document.querySelector("#email")
const modePasse = document.querySelector("#modePasse")
const form = document.querySelector("#loginForm")

const arr = [
  {
    email: "admin@nouracademy.ma",
    modePasse: "Nour2026!"
  },
  {
    email: "secretaria@nouracademy.ma",
    modePasse: "Academy2026!"
  }
]

const passeRegex = /^(?=.*[^A-Za-z0-9]).{8,}$/
const emailRegex = /^[a-z]+@nouracademy\.ma$/

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const emailValue = email.value.trim()
  const passeValue = modePasse.value

    if (!emailRegex.test(emailValue)) {
        alert("Email invalide ! Utilisez @nouracademy.ma");
        return;
    }

    if (!passeRegex.test(passeValue)) {
        alert("Mot de passe invalide !");
        return;
    }


  const user = arr.find(a =>
    a.email === email.value &&
    a.modePasse === modePasse.value
  );
  if(user){
    window.location.href = "secretaria.html"
  }else{
    alert("Email ou mot de passe incorrect !")
  }
  
})