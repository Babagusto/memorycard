import React from 'react';
import {
    Gameboy,
    Nes,
    Gamecube,
    Nintendods,
    Ps5, 
    Sega, 
    Switch, 
    Xbox, 
    Playstation
} from '../../src/images'



const Cards = () => {


    return(
    <div id="cardContainer">
        <div id="gameboy" className="card">
            <img src={Gameboy}></img>
        </div>
    </div>
    )
}


export default Cards