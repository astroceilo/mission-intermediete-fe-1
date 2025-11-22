import "./index.css";
import "flowbite";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { AuthProvider } from "./context/AuthContext";
// import { makeServer } from "./lib/mirage/server";
import App from "./App";


// if (process.env.NODE_ENV === "development") {
//   makeServer();
// }

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
