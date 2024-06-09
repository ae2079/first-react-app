function Footer(props) {
    console.log("Footer props:", props);
    return (
        <div className="copyright">
            <h1>This is footer header, {props.header}</h1>
            <p>This is footer component!, {props.text}</p>
            <p>this is props.children of footer: {props.children}</p>
        </div>
    );
}

export default Footer;