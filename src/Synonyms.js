import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){

   if(props.synonyms.length){
        return (
            <ul className="Synonyms"> 
            <h3 className="description">similar:</h3>          
                {props.synonyms.map(function(synonym, index){
                    return <li key={index}>{synonym}</li>;
                })}
            </ul>
        );
    }else{
        return null;
    }
}