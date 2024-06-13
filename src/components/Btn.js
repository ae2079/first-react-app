import {useState} from "react";

function Btn(props) {
    const [ numberOfClicks, setNumberOfClicks ] = useState(0);
    const clickHandler = () => {
        console.log("button clicked!");
        setNumberOfClicks(numberOfClicks + 1);
    }
    const [ numberOfMOvers, setNumberOfMOvers ] = useState(0);
    const mouseOverHandler = () => {
        console.log("mouse over the button!");
        setNumberOfMOvers(numberOfMOvers + 1);
    }
    return (
        <div className="card">
            <button className='button' onClick={clickHandler} onMouseOver={mouseOverHandler}>
                {props.text}
            </button>
            <p>this button clicked {numberOfClicks} times</p>
            <p>the mouse pass through this button {numberOfMOvers} times</p>
        </div>
    );
}

export default Btn;