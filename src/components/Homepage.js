import Btn from "./Btn";
import ModeToggler from "./ModeToggler";
import NumberGuessing from "./NumberGuessing";
import {Input, TextInputWithFocusButton} from "./Input";
import Shop from "./Shop";
import logoImage from "./../assets/images/logo.png";

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
    const homepageStyle = {
        background: props.color,
        color: "white",
        width: "100%",
        paddingTop: "180px",
        paddingBottom: "20px",
    };
    return (
        <div style={homepageStyle}>
            <Logo />
            <p>the background color should be {props.color}</p>
            <Btn text="click on botton"/>
            <ModeToggler/>
            <NumberGuessing/>
            <Input/>
            <TextInputWithFocusButton/>
            <Shop/>
        </div>
    );
}

export default Homepage;