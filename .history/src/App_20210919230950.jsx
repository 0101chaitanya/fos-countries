import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./components/List";
const App = () => {
  const [input, setInput] = useState("usa");

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${input}`)
      .then((response) => {
        const data = response.data;
        /*      data.forEach((item) => {
          const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: item.name || "New York",
          };
          axios
            .get("http://api.weatherstack.com/current", { params })
            .then((response) => {
              const apiResponse = response.data;
              item.weather = apiResponse;
            })
            .catch((error) => {
              console.log(error);
            });
        });
    */ setCountries(data);
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
