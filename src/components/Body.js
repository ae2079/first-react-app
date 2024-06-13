function Logo() {
    const logoStyle = {
        width: '50%', // Make the logo take up the full width of its container
        maxWidth: '500px', // Set a maximum width to prevent it from being too large
        height: 'auto' // Maintain the aspect ratio
    };

    return <img src="/logo512.png" alt="logo" style={logoStyle} />;
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