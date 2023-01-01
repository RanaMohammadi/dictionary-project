import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <span className="definition">{definition.definition}</span>
              <br />
              <span className="example">
                <Examples example={definition.example} />
              </span>
            </p>
          </div>
        );
      })}
      <div className="synonyms">
        {/* <span className="similar">Similar:</span> */}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
