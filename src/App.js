import './App.css';
import Heading from "./components/Heading";
import Footer from "./components/Footer";


function App() {
    const name = "ALI";
    return (
        <div className = "App" >
            <Heading name = { name } color = "red"/>
            <Footer header = "HEADER" text = "this is the text from parent component">
                And this is the text in the parent component
            </Footer>
        </div>
    );
}

export default App;