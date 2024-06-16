function Footer(props) {
    console.log("Footer props:", props);
    const footerStyle = {
        background: props.color,
        width: "100%",
        marginTop: "0px",
        marginBottom: "0",
        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
        bottom: "0",
        padding: "10px 20px",
    };
    return (
        <div style={footerStyle} className="copyright">
            <h1>This is footer header, {props.header}</h1>
            <p>This is footer component!, {props.text}</p>
            <p>this is props.children of footer: {props.children}</p>
            <p>The background color should be: {props.color}</p>
        </div>
    );
}

export default Footer;