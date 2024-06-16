import './App.css';
import './components/Card.css';
import './components/Botton.css';
import './components/Heading.css';

import {Route, Routes} from "react-router-dom";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";

function App() {
    const name = "ALI";
    return (
        <div className="App">
            <Heading name={name} color="LightSkyBlue"/>
            <Routes>
                <Route path="/" element={<Homepage color="black"/>}/>
                <Route path="/about-me" element={<AboutMe color="black"/>}/>
            </Routes>
            <Footer header="HEADER" color="lightblue" text="this is the text from parent component">
                And this is the text in the parent component
            </Footer>
        </div>
    );
}

export default App;