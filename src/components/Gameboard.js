import { useState, useEffect } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';
import '../styles/Gameboard.css';

export default function Gameboard(props) {

    const [heroes, setHeroes] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchHeroes();
        const newHeroes = [...heroes];
        shuffleCards(newHeroes)
        setHeroes(newHeroes);
    }, []);

    useEffect(() => {
        const newCards = [...cards];
        shuffleCards(newCards)
        setCards(newCards);
    }, [props.currentScore]);

    useEffect(() => {
        const heroList = [];
        for (let i=0; i<heroes.length; i++) {
            const hero = {
                name: heroes[i].localized_name,
                icon: 'https://api.opendota.com' + heroes[i].icon,
                image: 'https://api.opendota.com' + heroes[i].img,
                id: heroes[i].id,
                clicked: false,
            };
            heroList.push(hero);
        };
        setCards(heroList);
    }, [heroes]);

    function findDuplicates(array) {
        const uniqueElements = Array.from(new Set(array.map(item => item.id)))
        .map(id => {
            return array.find(item => item.id === id);
        });
        return uniqueElements;
    };

    async function fetchHeroes() {
        const fetchedHeroes = await fetch('https://api.opendota.com/api/heroStats/');
        const heroesData = await fetchedHeroes.json();
        const randomHeroes = [];

        while (randomHeroes.length < 6) {
            const randomHero = await heroesData[Math.floor(Math.random() * heroesData.length)];
            randomHeroes.push(randomHero);
        };
        await setHeroes(findDuplicates(randomHeroes));
    };

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
        <section>
            <header>
                <Scoreboard currentScore={props.currentScore} setCurrentScore={props.setCurrentScore} highScore={props.highScore} setHighScore={props.setHighScore} />
            </header>
            <section className='gameboard'>
            {cards.map(card=>{
                return (
                    <Card key={card.id}
                    card={card} cards={cards} setCards={setCards}
                    currentScore={props.currentScore} setCurrentScore={props.setCurrentScore}
                    highScore={props.highScore} setHighScore={props.setHighScore}
                    setIsGameOver={props.setIsGameOver}
                    setLastClicked={props.setLastClicked} />
                );
            })}
            </section>
        </section>
    );
};