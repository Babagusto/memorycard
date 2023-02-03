
import '../Cards.css';
import uniqid from "uniqid"
import React, {useState} from "react"
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
import { render } from '@testing-library/react';



const Cards = () => {

    const [cards, setCards] = useState(cardArray);

    const cardArray = [
        {title:'Gameboy', imgsrc: Gameboy, id:uniqid()},
        {title:'Nes', imgsrc: Nes,id:uniqid()},
        {title:'Gamecube', imgsrc: Gamecube, id:uniqid()},
        {title:'Nintendo DS', imgsrc: Nintendods, id:uniqid()},
        {title:'Playstation 5', imgsrc: Ps5, id:uniqid()}, 
        {title:'Sega', imgsrc: Sega, id:uniqid()}, 
        {title:'Switch', imgsrc: Switch, id:uniqid()}, 
        {title:'Xbox', imgsrc: Xbox, id:uniqid()}, 
        {title:'Playstation', imgsrc: Playstation, id:uniqid()}
    ]
    
    const shuffleCards = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        
        // return array;
        console.log(array)
        
        
        
    }
    // const test = () => {
    //     console.log('Im working!')
    // }
    return(
    <div id="cardContainer">
        {cardArray.map((card) => {
            return <div key={card.id} className='cardDiv' onClick={() => shuffleCards(cardArray)}>
                        <img className ='cardImg'src={card.imgsrc}></img>
                        <div>{card.title}</div>
                   </div>
        })}
    </div>
    )
}


export default Cards