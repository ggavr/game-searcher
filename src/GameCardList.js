import React from 'react';
import GameCard from "./gameCard";

function GameCardList({games}) {
    return (
        <div className="card-list">
            {games.map(game => (
                <GameCard game={game} key={game.id}/>
            ))}
        </div>
    );
}

export default GameCardList;