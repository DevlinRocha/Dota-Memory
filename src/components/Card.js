import '../styles/Card.css';

export default function Card(props) {
    const handleClick = () => {
        
        props.setLastClicked(props.card);

        if (props.card.clicked) {
            props.setIsGameOver(true);
        } else {
            const newScore = props.currentScore+1;
            props.setCurrentScore(newScore);
            
            const cardIndex = props.cards.findIndex(element => element.id === props.card.id);
            let newCards = [...props.cards];
            newCards[cardIndex] = {...newCards[cardIndex], clicked: !newCards[cardIndex].clicked}
            props.setCards(newCards);

            if (newScore > props.highScore) {
                props.setHighScore(newScore);
            };
        };
    };

    return (
        <div className='cardContainer' onClick={handleClick}>
            <figure className='card'>
                <img src={props.card.icon} alt={props.card.name}></img>
                <figcaption>{props.card.name}</figcaption>
            </figure>
        </div>
    );
};