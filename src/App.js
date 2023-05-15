import React, { useState } from "react";
import src_demo from "./assets/img_demo.jpg"
import src_engineer from "./assets/img_engineer.jpg"
import src_heavy from "./assets/img_heavy.jpg"
import src_medic from "./assets/img_medic.jpg"
import src_pyro from "./assets/img_pyro.jpg"
import src_scout from "./assets/img_scout.jpg"
import src_sniper from "./assets/img_sniper.jpg"
import src_soldier from "./assets/img_soldier.jpg"
import src_spy from "./assets/img_spy.jpg"
import Mercs from "./components/Mercs";

const App = () => {
    const [clicked, setClicked] = useState([]);
    const [array,setArray] = useState([
        {
            id: "demo",
            src:  src_demo,
        },
        {
            id: "engineer",
            src:  src_engineer,
        },
        {
            id: "heavy",
            src:  src_heavy,
        },
        {
            id: "medic",
            src:  src_medic,
        },
        {
            id: "pyro",
            src:  src_pyro,
        },
        {
            id: "scout",
            src:  src_scout,
        },
        {
            id: "sniper",
            src:  src_sniper,
        },
        {
            id: "soldier",
            src:  src_soldier,
        },
        {
            id: "spy",
            src:  src_spy,
        },

    ]);

    return(
        <div>
            <Mercs array={array}/>
        </div>
    )
}

export default App