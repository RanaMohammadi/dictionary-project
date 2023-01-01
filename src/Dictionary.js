import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDefinitionResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000170de72685f3b4f61b28a685ed03df752";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function handleDefinitionResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }
  function handlePexelsResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }
  return (
    <div className="Dictionary mt-3">
      <section>
        <h2 className="question">What word do you want to look up?</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeyword} />
        </form>
      </section>
      <Results result={result} />
      <Photos photos={photos} />
    </div>
  );
}
