// import '../styles/Scoreboard.css';

export default function Scoreboard(props) {
    return (
        <div>
            <h3>Current Score: {props.currentScore}</h3>
            <h3>High Score: {props.highScore}</h3>
        </div>
    );
};