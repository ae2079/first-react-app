import Nav from "./Nav";

function Heading(props) {
    console.log("heading variables:", props);
    const headingStyle = {
        background: props.color,
        width: "100%",
    };
    return (
        <div style={headingStyle} className="heading">
            <h1> Hello { props.name } </h1>
            <p> The background color should be { props.color }</p>
            <Nav/>
        </div>
    );
}

export default Heading;