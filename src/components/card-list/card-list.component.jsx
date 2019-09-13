import React from 'react'
import Card from '../card/card.component';
import './card-list.styles.css';


export const CardList = props => {
    return (
        <div className="card-list">
            {(props.heroes.slice(0, -2)).map(hero =>
                <Card key={hero.id} name={hero.name} id={hero.id} email={hero.email} />
            )}
        </div>
    );
}

