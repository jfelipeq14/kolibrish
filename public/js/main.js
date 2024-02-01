
//autentication change
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
//
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";


import './app/signinForm.js'
import './app/logout.js'
import './app/postList.js'

//
onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user);
        try {
            const querySnapshot = await getDocs(collection(db, "posts"));
            setupPosts(querySnapshot.docs);
        } catch (error) {
            console.log(error)
        }
    } else {
        setupPosts([]);
        loginCheck(user);
    }
});
