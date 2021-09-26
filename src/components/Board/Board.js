import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Counter from '../Counter/Counter';
import './Board.css';

const Board = () => {
    const [billionaires, setBillionaires] = useState([]);
    const [counter, setCounter] = useState([]);

    useEffect( () => {
        fetch('./billionaires.JSON')
        .then(res => res.json())
        .then(data => {
            setBillionaires(data);
        });
    }, [])

     
    const handleAddCounter = (person) => {
        const newCounter = [...counter, person];
        setCounter(newCounter); 
    }

    return (
        <div className="board-container">
            <div className="card-container">
                {
                    billionaires.map(billionaires => <Cards
                        key={billionaires.key}
                        billionaires={billionaires}
                        handleAddCounter={handleAddCounter}                        
                    >
                    </Cards>)
                }
            </div>
            <div className="counter-container">
                <Counter counter={counter}></Counter>
            </div>
        </div>
    );
};

export default Board;