import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "react-perfect-scrollbar/dist/css/styles.css";
import "assets/styles/custom.css";
import "assets/styles/login.css";
import "moment/locale/es";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

serviceWorkerRegistration.unregister();
