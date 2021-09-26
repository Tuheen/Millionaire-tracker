import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFax } from '@fortawesome/free-solid-svg-icons';
import './Cards.css';
const Cards = (props) => {
    const { name, age, citizen, rank, networth, source, img } = props.billionaires;
    
    return (
       <>
            <div className="cards">
                <img src={img} className="card-img-top image-shape" alt="..."/>
                <div className="card-body card-headline">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small>Age: {age}</small></p>
                </div>
                <br />
                <ul className="list-group list-group-flush list-class">
                    <li className="list-group-item">Rank: {rank}</li>
                    <br />
                    <li className="list-group-item"><p><small>Net-Worth: ${networth} bn.</small></p></li>
                    <li className="list-group-item">
                        <p><small>Source: {source}</small></p>
                        <p><small>Citizen: {citizen}</small></p>
                    </li>
                    <br />                    
                    <li className="list-group-item"><p><small><FontAwesomeIcon icon={faFax}/></small></p></li>
                </ul>
                <div className="card-body">
                <button 
                    onClick={() => props.handleAddCounter(props.billionaires)}  
                    type="button" className="btn btn-dark">Sum Up<span className="dollar">$</span></button> 
                </div>
            </div>
       </> 
    );
};

export default Cards;