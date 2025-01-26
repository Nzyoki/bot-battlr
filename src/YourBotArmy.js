import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, setArmy }) {
    return(
        <div>
            <h2>Your Bot Army</h2>
            <div className="your-army">
                {army.map((bot)=>( // Changes bots to an army
                    <BotCard key={bot.id} bot={bot} setArmy={setArmy} inArmy/> // Add inArmy prop
                ))}
            </div>
        </div>
    );
};

export default YourBotArmy;