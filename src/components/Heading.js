function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function Heading(props) {
    console.log("heading variables:", props);
    const headingStyle = {
        background: props.color,
        width: "calc(100% - 20px)",
        marginLeft: "10px",
    };
    return (
        <div style={headingStyle}>
            <h1> Hello { props.name } </h1>
            <p>Here is a random number form 0 to 10 : {getRandomNumber()}</p>
            <p> The background color should be { props.color }</p>
        </div>
    );
}

export default Heading;