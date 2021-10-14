import { useState } from 'react';
import '../styles/Card.css';

export default function Card(props) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked) {
            props.setIsGameOver(true);
        } else {
            const newScore = props.currentScore+1;
            props.setCurrentScore(newScore);
            setClicked(true);
            if (newScore > props.highScore) {
                props.setHighScore(newScore);
            };
        };
    };

    return (
        <div className='card'
            onClick={handleClick}
            style={{ backgroundColor: props.color }}
        />
    );
};