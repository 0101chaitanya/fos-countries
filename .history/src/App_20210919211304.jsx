import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [input, setInput] = useState("");

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response);
    });
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const parseMessage = () => {
    return "";
  };

  return (
    <div className="App">
      <p>Find countries</p>
      <form>
        <input type="text" name="input" onChange={handleChange} value={input} />
      </form>
      <p>{parseMessage()}</p>
    </div>
  );
};

export default App;
