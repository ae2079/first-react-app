import { useState, useRef } from 'react';

function Input() {
    const [inputText, setText] = useState('hello');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="card">
            <h2>input section</h2>
            <input value={inputText} onChange={handleChange} />
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('hello')}>
                Reset
            </button>
        </div>
    );
}

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <div className="card">
            <h2>Input with focus</h2>
            <input ref={inputEl} type="text" placeholder="Click the button to focus me"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}

export {Input, TextInputWithFocusButton}