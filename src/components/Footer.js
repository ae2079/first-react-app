function Footer(props) {
    console.log("Footer props:", props);
    const footerStyle = {
        background: props.color,
        width: "calc(100% - 20px)",
        marginLeft: "10px",
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