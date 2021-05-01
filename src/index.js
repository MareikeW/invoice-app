import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider} from "./context";

import {firebase} from "./firebase";
import {FirebaseContext} from "./context/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{firebase}}>
    <ContextProvider>
      <App />
    </ContextProvider>
    </FirebaseContext.Provider>,
  document.getElementById('root')
);

