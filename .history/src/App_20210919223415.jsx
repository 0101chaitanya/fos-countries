import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./components/List";
const App = () => {
  const [input, setInput] = useState("usa");

  const [countries, setCountries] = useState([]);
  console.log("env", process.env.REACT_APP_API_KEY);
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${input}`)
      .then((response) => {
        console.log(response);
        const data = response.data;
        setCountries(data);
      });
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <p>Find countries</p>
      <form>
        <input type="text" name="input" onChange={handleChange} value={input} />
      </form>
      <List countries={countries} />
    </div>
  );
};

export default App;
