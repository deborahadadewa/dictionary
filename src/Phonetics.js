import React from "react";
import "./Phonetics.css";
import AudioPlayer from "./AudioPlayer";


export default function Phonetics(props){
    if(props.phonetics){
        return (
            <div className="Phonetics">
                <AudioPlayer audio={props.phonetics.audio}/>
                <span className="text">{props.phonetics.text}</span>
            </div>
        );
    }else{
        return null;
    }
}