import React, { useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BotCollection from "./BotCollection";
import YourBotArmy from  "./YourBotArmy";

function App (){
    const [bots, setBots] = useState([]);
    const [army, setArmy] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8001/bots")
        .then((response)=>response.json())
        .then((data)=>setBots(data))
        
    }, []);

    return(
        <Router>
            <div>
                <h1>Bot Battlr</h1>
                <Routes>
                    <Route 
                    path = "/"
                    element={<BotCollection bots={bots} setArmy={setArmy}/>}
                    />
                    <Route
                    path="/your-army"
                    element={<YourBotArmy army={army} setArmy={setArmy}/>}
                    />
                </Routes>

            </div>
        </Router>
    )
}

export default App;