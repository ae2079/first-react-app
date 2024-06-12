import './App.css';
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Body from "./components/Body";
import ModeToggler from "./components/ModeToggler";
import NumberGuessing from "./components/NumberGuessing";
import {Input, TextInputWithFocusButton} from "./components/Input";
import Shop from "./components/Shop";
import "./components/Card.css";
import Btn from "./components/Btn";

function App() {
    const name = "ALI";
    return (
        <div className = "App" >
            <Heading name = { name } color = "LightSkyBlue"/>
            <Body color = "black">
                <Btn text="click on botton"/>
                <ModeToggler/>
                <NumberGuessing/>
                <Input/>
                <TextInputWithFocusButton/>
                <Shop/>
            </Body>
            <Footer header = "HEADER" color = "lightblue" text = "this is the text from parent component">
                And this is the text in the parent component
            </Footer>
        </div>
    );
}

export default App;