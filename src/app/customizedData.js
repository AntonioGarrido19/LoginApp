import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const postListC = document.querySelector(".custom");
const profileData = document.querySelector("#profile");

export const setupCustomized = (dataC) => {
  if (dataC.length) {
    let html = "";

    dataC.forEach((doc) => {
      const post = doc.data();
      console.log(post);
      const li = `<li class="list-group-item list-group-item-action list-group-item-dark" >
        <h5>${post.name}</h5>
        <p>${post.data}</p>
        </li>`;

      html += li;
    });
    postListC.innerHTML = html;
    console.log(postListC);
  } else {
    postListC.innerHTML = "<h1> You dont have rated any movies yet </h1>";
  }
};

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
