import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <Synonyms synonyms={props.meaning.synonyms} />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <Examples example={definition.example} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
