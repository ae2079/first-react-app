import React, { useContext } from "react";
import { CountContext } from "./CountContext"; // Adjust the import according to your file structure

function Item(props) {
    const { state, dispatch } = useContext(CountContext);

    const handleDecrement = () => {
        dispatch({ type: 'decrement', name: props.name });
    };

    const handleCharge = () => {
        const chargeAmount = props.chargeNumber ? props.chargeNumber : 1;
        dispatch({ type: 'charge', name: props.name, count: chargeAmount });
    };

    return (
        <div>
            <h3> {props.name} </h3>
            <button className='button' onClick={handleDecrement}>buy</button>
            <button className='button' onClick={handleCharge}>charge</button>
            <p>Remained count {state.items[props.name] || 0}</p>
        </div>
    );
}

export default Item;
