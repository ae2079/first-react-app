function AboutMe(props) {
    const aboutMeStyle = {
        background: props.color,
        color: "white",
        width: "100%",
        paddingTop: "180px",
        paddingBottom: "20px",
    };
    return (
      <div style={aboutMeStyle}>
          <h1>Welcome to my site!</h1>
          <p>This site was developed by me. My name is Ali Ebrahimi and I am learning React.js</p>
      </div>
    );
}

export default AboutMe;