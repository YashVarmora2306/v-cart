import "./index.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)