import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupform = document.querySelector("#signup-form");

signupform.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signupform["signup-email"].value;
  const password = signupform["signup-password"].value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);

    //close signupModal
    const signupModal = document.querySelector("#signupModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    showMessage(`Welcome ${userCredentials.user.email}`);
  } catch (error) {
    console.log(error.message);
    console.log(error.code);

    if (error.code === "auth/email-already-in-use") {
      showMessage("Email already in use", "error");
    } else if (error.code === "auth/invalid-email") {
      showMessage("invalid email", "error");
    } else if (error.code === "auth/weak-password") {
      showMessage("Password is too weak", "error");
    } else if (error.code) {
      showMessage("Something went wrong", "error");
    }
  }
});
