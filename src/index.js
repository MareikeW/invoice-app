import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider} from "./context";
import { FirebaseContext } from "./context/firebase";

import {seedDatabase} from "./seed";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKUkvY7HjKq9REt0UmwmvQCcCqkfmqLBc",
    authDomain: "invoice-app-2b2fc.firebaseapp.com",
    databaseURL: "https://invoice-app-2b2fc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "invoice-app-2b2fc",
    storageBucket: "invoice-app-2b2fc.appspot.com",
    messagingSenderId: "1009503899983",
    appId: "1:1009503899983:web:279e221dacab882a98b53a"
};
// Initialize Firebase
const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: firebase }}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

