import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definintion">{definition.definition}</div>

            <p className="example">
              <em>{definition.example}</em>
            </p>
            <Synonyms synonyms={definition.synonyms} Synonyms />
          </div>
        );
      })}
    </div>
  );
}
