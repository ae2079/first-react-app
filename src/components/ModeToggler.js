import {useState} from "react";

function ModeToggler() {
    const [ darkModeOn, setDarkModeOn] = useState(true);
    const darkMode = <h1>Dark Mode is On</h1>;
    const lightMode = <h1>Light Mode is On</h1>;

    function handleClick() {
        setDarkModeOn(!darkModeOn);
        console.log("mode changed!");
    }
    return (
        <div className="card">
            {darkModeOn ? darkMode : lightMode}
            <button className='button' onClick={handleClick}>
                change mode
            </button>
        </div>
    );
}

export default ModeToggler;