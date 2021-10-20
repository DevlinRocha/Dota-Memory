import '../styles/GameOver.css';

export default function GameOver(props) {
    return (
        <div className='gameOver'>
            <div>
            <h2>Game over</h2>

            {props.currentScore === props.highScore
                ? <p>New high score!</p>
                : null
            }
            </div>

            <figure className='defeated'>
                <img src={props.lastClicked.icon} alt={props.lastClicked.name} />
                <figcaption><i><b>{props.lastClicked.name}</b> defeated you!</i></figcaption>
            </figure>

            <div>
            <p>You scored {props.currentScore} {props.currentScore > 1 ? 'points' : 'point'}</p>
            <p>Your high score is {props.highScore} points</p>
            <button onClick={props.newGame}>New Game</button>
            </div>
        </div>
    );
};