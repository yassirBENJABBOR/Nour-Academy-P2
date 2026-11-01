

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
const textEmail = document.querySelector("#text-email")
const textPasse = document.querySelector("#text-passe")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const emailValue = email.value.trim()
  const passeValue = modePasse.value

    if (!emailRegex.test(emailValue)) {
      textEmail.textContent = "email est incorrect."
      textEmail.className = "text-red-600 pt-1"
      return;
    }

    if (!passeRegex.test(passeValue)) {
        textPasse.textContent = "Le mot de passe est incorrect."
        textPasse.className = "text-red-600 pt-1"
        return;
    }


  const user = arr.find(a =>
    a.email === email.value &&
    a.modePasse === modePasse.value
  );
  if(user){
    window.location.href = "secretaria.html"
  }else if(a.email === email.value){
    textEmail.textContent = "email est incorrect."
    textEmail.className = "text-red-600 pt-1"
    return;
  }else{
    textPasse.textContent = "Le mot de passe est incorrect."
    textPasse.className = "text-red-600 pt-1"
    return;
  }
  
})