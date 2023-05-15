import "./styles.css"
import demoImg from "./assets/img_demo.jpg"
import { createRoot} from "react-dom/client";
import React, {StrictMode} from "react";
import App from "./App";


createRoot(document.getElementById("App")).render(
   // <StrictMode>
        <App />
    //</StrictMode>
)

console.log(demoImg);