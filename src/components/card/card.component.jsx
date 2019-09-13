import React from 'react';
import './card.styles.css';

const Card = props => {
    return (
        <div className="card-container">
            <img alt="Cat"
                src={`https://robohash.org/MQ9.png?set=set${props.id}`} />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div >);
};

export default Card;
