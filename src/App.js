import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";


import BotCard from "./BotCard";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
    const [bots, setBots] = useState([]);
    const [army, setArmy] = useState([]);
    useEffect(() => {
        fetch("/db.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => setBots(data.bots)) 
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <Router>
            <div>
                <h1>Bot Battlr</h1>
                <nav>
                    <Link to="/">Home</Link>
                    {" | "}
                    <Link to="/your-army">Your Bot Army</Link>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={<BotCollection bots={bots} setArmy={setArmy} />}
                    />
                    <Route
                        path="/your-army"
                        element={<YourBotArmy army={army} setArmy={setArmy} />}
                    />
                </Routes>

            </div>
        </Router>
    )
}

export default App;