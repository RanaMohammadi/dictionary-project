import React from "react";

export default function Synonyms(props) {
  if (props.synonyms === undefined || props.synonyms.length === 0) {
    return null;
  } else {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </div>
    );
  }
}
