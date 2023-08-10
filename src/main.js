import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDocs, collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import {setupPosts} from './app/postList.js'
import {setupCustomized} from './app/customizedData.js'

import "./app/signupform.js"
import "./app/logout.js"
import "./app/formSignin.js"
import './app/googleLogin.js'


onAuthStateChanged(auth, async (user) => {
  if (user) {
   const postsQuerySnapshot = await getDocs(collection(db, 'posts'))
   console.log(postsQuerySnapshot);
   setupPosts(postsQuerySnapshot.docs)

   const userID = user.uid;
   console.log(userID);
    // 👇 Now that the user us know, we can load their data
    const userDocRef = doc(db, "UserData", userID)

    const userDocSnapshot = await getDoc(userDocRef);
    console.log(userDocSnapshot.data());
    setupCustomized(userDocSnapshot.data())

  } else {
    setupPosts([])
    setupCustomized([]);
  }
 
  loginCheck(user)
});




