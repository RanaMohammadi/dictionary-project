import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";
export default function Results(props) {
  if (props.result) {
    return (
      <div className="results">
        <section>
          <h2>{props.result.word}</h2>
          {props.result.phonetics.map(function (phonetic, index) {
            return (
              <span key={index}>
                <Phonetic phonetic={phonetic} />
              </span>
            );
          })}
        </section>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
