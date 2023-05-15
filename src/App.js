import React, { useEffect, useState } from "react";
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
import logo from "./logo.svg"

const App = () => {
    const [scoreCurrent, setScoreCurrent] = useState(0);
    const [scoreBest, setScoreBest] = useState(0);
    const [isLost, setIsLost] = useState(false);
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

    const shuffle = () => {        
        let tempArray = [...array];
        let currentIndex = tempArray.length, randomIndex;
        while(currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [tempArray[currentIndex], tempArray[randomIndex]] = [
                tempArray[randomIndex], tempArray[currentIndex]];
        }
        setArray(tempArray);
    }

    const checkLoss = () => {
        let cond = new Set(clicked).size !== clicked.length;
        setIsLost(cond);

        return cond
    }
    
    

    
useEffect(()=> {
    let cond = checkLoss();
    if(cond == true) {
        setScoreCurrent(0);    
        if(scoreCurrent == scoreBest) {
            setScoreBest(scoreBest - 1);
        }
        setClicked([]);
    }

},[scoreCurrent])

    const click = (e) => {      
        let val = e.target.parentElement.id;        
        let tempArray = [...clicked];
        tempArray.push(val);
        setClicked(tempArray);     
        if(scoreCurrent == scoreBest) {
            setScoreBest(scoreBest + 1);
        }
        setScoreCurrent(scoreCurrent + 1);
        checkLoss();        
        shuffle();        
    }

    return(
        <div className="content">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h1>Memory Card Game</h1>
                </div>

                <div id="score">
                    <p>Current: {scoreCurrent}| Best: {scoreBest}</p>
                </div>
            </div>

            <div className="main">
                 <Mercs onclick={click} array={array}/>
            </div>
            
        </div>
    )
}

export default App