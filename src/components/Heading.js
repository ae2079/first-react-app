import Nav from "./Nav";
import ModeToggler from "./ModeToggler";

function Heading(props) {
    console.log("heading variables:", props);
    const headingStyle = {
        background: props.color,
        width: "100%",
    };
    return (
        <div style={headingStyle} className="heading">
            <ModeToggler/>
            <h1> Welcome To My Site </h1>
            <Nav/>
        </div>
    );
}

export default Heading;