import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

const ModeToggler = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    const modeTogglerStyle = {
        marginRight: "80%",
    };

    return (
        <button onClick={toggleDarkMode} className="button" style={modeTogglerStyle}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

export default ModeToggler;