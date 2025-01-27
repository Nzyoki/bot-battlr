import React from 'react';
//import reactDom from 'react-dom';

function BotCard({bot, setArmy, inArmy}){ 
    const handleClick = () => {
        setArmy((prevArmy) => {
            if(inArmy){
                return prevArmy.filter((b) => b.id !== bot.id); 
            } else {
                return prevArmy.find((b)=> b.id === bot.id) ? prevArmy : [...prevArmy, bot]; 
            }
        });
        }
    return(
        <div className='bot-card' onClick ={handleClick}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
        </div>
    );
};

export default BotCard;