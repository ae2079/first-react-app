import React, {useState} from "react";
import ReactPlayer from "react-player";
import "./Media.css";

function Media() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const song = new Audio("https://ts1.tarafdari.com/contents/user202821/content-sound/hozier-take-me-to-church.mp3");

    function toggle() {
        if (song.paused) {
            song.play();
        } else {
            song.pause();
        }
    };

    return (
            <div className="card">
                <h1>Media Center</h1>
                <button className='button' onClick={toggleVisibility}>
                    {isVisible ? "Close Media Center" : "Open Media Center"}
                </button>
                {isVisible && (
                    <div className="image-container">
                        <img src={require('./../assets/images/logo.png')} height={200} alt="logo"></img>
                        <img src={"https://picsum.photos/200"} alt="random"></img>
                        <h2>React Player</h2>
                        <ReactPlayer
                            url={"https://youtu.be/CpCN9lTFHc4"}
                            playing={false} // for autoplaying
                            height={200}
                            width={300}
                            volume={0.2}
                        />
                        <h2>Music player</h2>
                        <button className={"button"} onClick={toggle}>Play "Take me to church"</button>
                    </div>)}
            </div>
    );
}

export default Media;
