import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Certifique-se que o CSS está aqui

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);