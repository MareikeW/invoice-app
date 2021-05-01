import Firebase from "firebase/app";
import "firebase/firestore";

//import {seedDatabase} from "./seed";

const firebaseConfig = {
    apiKey: "AIzaSyBKUkvY7HjKq9REt0UmwmvQCcCqkfmqLBc",
    authDomain: "invoice-app-2b2fc.firebaseapp.com",
    databaseURL: "https://invoice-app-2b2fc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "invoice-app-2b2fc",
    storageBucket: "invoice-app-2b2fc.appspot.com",
    messagingSenderId: "1009503899983",
    appId: "1:1009503899983:web:279e221dacab882a98b53a"
};

const firebase = Firebase.initializeApp(firebaseConfig);
//seedDatabase(firebase);

export {firebase};

