import { useState } from "react"

const useWordle = ( solution ) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState([]);  // [{'letter' : 'a', 'color' : ''}]
    const [history, setHistory] = useState([])   //["ninja", "steal"]
    const [isCorrect, setIsCorrect] = useState(false);

    const handleKeys = ({ key }) => {
		console.log(key);
	};

	return { handleKeys };
}

export default useWordle