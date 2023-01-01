import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }
  return (
    <div className="Dictionary mt-3">
      <section>
        <h2>What word do you want to look up?</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeyword} />
        </form>
      </section>
      <Results result={result} />
    </div>
  );
}
