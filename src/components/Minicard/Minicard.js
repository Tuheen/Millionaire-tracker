import React from 'react';
import './Minicard.css';

const Minicard = (props) => {
    const { img, name, rank, networth } = props.person;

    return (
        <div>
            <div className="cards-mini">
                <img src={img} className="card-img-top image-mini" alt="..."/>
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                </div>
               
                <ul className="list-group list-group-flush list-class">
                    <li className="list-group-item">Rank: {rank}</li>
                    
                    <li className="list-group-item"><p><small>Net-Worth: ${networth} bn.</small></p></li>
                </ul>
            </div>
        </div>
    );
};

export default Minicard;