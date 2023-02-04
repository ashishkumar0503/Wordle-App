import React, { useState } from 'react';
import letters from "../data/keyboard.json";


export default function Keypad() {
    const [letter, setLetter] = useState(letters);

    console.log(letter.letters);
    

   
    

    return (
        <div className='keypad'>
            
        </div>
    )
}
