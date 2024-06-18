import {useContext} from "react";
import {DarkModeContext} from "./DarkModeContext";

function AboutMe() {
    const { isDarkMode } = useContext(DarkModeContext);
    const backgroundColor = isDarkMode ? "black" : "white";
    const textColor = isDarkMode ? "white" : "black";
    const aboutMeStyle = {
        background: backgroundColor,
        color: textColor,
        width: "100%",
        paddingTop: "180px",
        paddingBottom: "1000px",
    };
    return (
      <div style={aboutMeStyle}>
          <h1>Welcome to my site!</h1>
          <p>This site was developed by me. My name is Ali Ebrahimi and I am learning React.js</p>
      </div>
    );
}

export default AboutMe;