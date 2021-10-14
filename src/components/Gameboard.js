import { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/Gameboard.css';

export default function Gameboard(props) {

    const [colors, setColors] = useState([
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
    ]);

    useEffect(() => {
        const newColors = [...colors];
        shuffleCards(newColors)
        setColors(newColors);
    }, [props.currentScore]);

    function shuffleCards(array) {
        let currentIndex = array.length, randomIndex;

        // While there are elements to shuffle...
        while (currentIndex !==0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // Swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        };
        return array;
    };

    return (
        <section className='gameboard'>
            {/* <button onClick={newGame}>New Game! </button> */}
            {colors.map(color=>{
                return (
                    <Card colors={colors} setColors={setColors}
                    shuffleCards={shuffleCards}
                    key={color} color={color}
                    currentScore={props.currentScore} setCurrentScore={props.setCurrentScore}
                    highScore={props.highScore} setHighScore={props.setHighScore}
                    setIsGameOver={props.setIsGameOver} />
                );
            })}
        </section>
    );
};