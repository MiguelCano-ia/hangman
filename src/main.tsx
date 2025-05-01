import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Hangman } from "./Hangman";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Hangman />
  </StrictMode>
);
