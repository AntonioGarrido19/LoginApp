import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const profileData = document.querySelector("#profile");

// Detectar usuario logeado
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuario logeado:", user.email);
    const username = user.email.split("@")[0]; // Obtiene solo lo que está antes del @
    profileData.innerHTML = `Bienvenido, ${username}`;
  } else {
    console.log("No hay usuario logeado");
  }
});
