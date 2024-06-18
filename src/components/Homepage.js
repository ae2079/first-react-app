import React, { useContext } from 'react';
import Btn from "./Btn";
import NumberGuessing from "./NumberGuessing";
import {Input, TextInputWithFocusButton} from "./Input";
import Shop from "./Shop";
import Media from "./Media";
import logoImage from "./../assets/images/logo.png";
import { DarkModeContext } from './DarkModeContext';

function Logo() {
    const logoStyle = {
        width: '50%', // Make the logo take up the full width of its container
        maxWidth: '500px', // Set a maximum width to prevent it from being too large
        height: 'auto' // Maintain the aspect ratio
    };

    return <img src={logoImage} alt="logo" style={logoStyle} />;
}

function Homepage(props) {
    console.log("body variables:", props);
    const { isDarkMode } = useContext(DarkModeContext);
    const backgroundColor = isDarkMode ? "black" : "white";
    const textColor = isDarkMode ? "white" : "black";
    const homepageStyle = {
        background: backgroundColor,
        color: textColor,
        width: "100%",
        paddingTop: "180px",
        paddingBottom: "20px",
    };
    return (
        <div style={homepageStyle}>
            <Logo />
            <p>the background color should be {props.color}</p>
            <Btn text="click on botton"/>
            <NumberGuessing/>
            <Input/>
            <TextInputWithFocusButton/>
            <Shop/>
            <Media/>
        </div>
    );
}

export default Homepage;