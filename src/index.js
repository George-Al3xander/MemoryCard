import "./styles.css"
import demoImg from "./assets/img_demo.jpg"
import { createRoot} from "react-dom/client";
import React, {StrictMode} from "react";
import App from "./App";

let img = document.getElementById("test");
img.src = demoImg;


createRoot(document.getElementById("App")).render(
    <StrictMode>
        <App />
    </StrictMode>
)

console.log(demoImg);