import React from 'react';
import Minicard from '../Minicard/Minicard';
import './Counter.css';

const Counter = (props) => {
    const { counter } = props;

    let totalQuantity = 0;
    let total = 0;

    for (const person of counter){
        if(!person.quantity){
            person.quantity = 1;
        }

        total = total + person.networth * person.quantity;        
        totalQuantity = totalQuantity + person.quantity;
    }

        return (
            <>
                <div className="counter">
                    <h3>Total Quantity: {totalQuantity}</h3>
                    <h3>Total Money: {total} bn.</h3>                
                </div>
            {
                counter.map(person => <Minicard
                person={person}
                billionaires={props.billionaires}
                ></Minicard>)
            }
                
        </> 
        
        );
};

export default Counter;