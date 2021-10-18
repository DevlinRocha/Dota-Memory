export default function GameOver(props) {
    return (
        <div>
            <h2>Game over</h2>
            {props.currentScore === props.highScore
                ? <p>New high score!</p>
                : null
            }
            <p>You scored {props.currentScore} {props.currentScore > 1 ? 'points' : 'point'}</p>
            <p>Your high score is {props.highScore} points</p>
            <button onClick={props.newGame}>New Game</button>
        </div>
    );
};