import React from "react";

export default function AudioPlayer(props){

    function playAudio(){
        let audio = new Audio(props.audio);
        audio.play();
    }

    return <button onClick={playAudio}>Listen</button>;

}