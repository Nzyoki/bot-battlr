import React from 'react';
//import reactDom from 'react-dom';

import BotCard from './BotCard';



function BotCollection({bots, setArmy}){ // Changes bots to an army
    return(
        <div>
            <h2>Bot Collection</h2>
            <div className = "bot-collection">
                {bots.map((bot)=>(
                    <BotCard key={bot.id} bot={bot} setArmy={setArmy} />
                ))}
            </div>
        </div>
    );
};

export default BotCollection;