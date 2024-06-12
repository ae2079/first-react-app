function Logo(props) {
    return <img src="/logo512.png" alt="logo"/>;
}

function Body(props) {
    console.log("body variables:", props);
    const bodyStyle = {
        background: props.color,
        color: "white",
        width: "calc(100% - 20px)",
        marginLeft: "10px",
    };
    return (
        <div style={bodyStyle}>
            <Logo />
            <p>the background color should be {props.color}</p>
            {props.children}
        </div>
    );
}

export default Body;