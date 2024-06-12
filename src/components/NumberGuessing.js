function NumberGuessing() {
    return (
        <div className="card">
            <h2> number guessing game</h2>
            <button onClick={clickHandler}>
                click for guess a number!
            </button>
            <p/>
        </div>
    )
}

function clickHandler() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log("random number of number guessing game:", randomNum);
    let userInput = prompt("enter a number between 1 to 3:");
    alert(`Computer number: ${randomNum}, your guess: ${userInput}`);
}

export default NumberGuessing;