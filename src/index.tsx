import * as firebase from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { firebaseConfig } from "./config/firebase";
import * as serviceWorker from "./serviceWorker";
import store from "./state/store";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
