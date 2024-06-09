function Heading(props) {
    console.log("heading variables:", props);
    return (
        <h1> Hello { props.name }, this part should be { props.color } </h1>
    );
}

export default Heading;