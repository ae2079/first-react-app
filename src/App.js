import './App.css';

function Header(props) {
    return ( <
        h1 > Hello { props.name } < /h1> 
    );
}

function App() {
    const name = "Ali";
    return ( <
        div className = "App" >
        this is the starting code
        for my first componenet in react <
        Header name = { name }
        /> <
        /div>
    );
}

export default App;