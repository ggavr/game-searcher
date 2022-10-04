import React from "react";
import {useNavigate} from "react-router-dom";

export default function GameCard({game}){
    const navigate = useNavigate()
    function handleClick() {
        navigate(`/about/${game.id}`)
    }

    return (
        <div className="card" key={game.id} onClick={handleClick}>
            <img className="card--image"
                 src={game.background_image}
                 alt={game.name + ' poster'}
            />
            <div className="card--content">
                <h3 className="card--title">{game.name}</h3>
                <p><small>RELEASE DATE: {game.released}</small></p>
                <p><small>RATING: {game.rating}</small></p>
            </div>

        </div>
    )
}