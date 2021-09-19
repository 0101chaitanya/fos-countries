import React, { useState } from "react";
const ParsedCountries = ({ country }) => {
  const [show, setShow] = useState(false);

  return (
    <div key={country.population}>
      <button onClick={() => setShow(!show)}></button>
      <div id="show">
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <ul>
          <h3>
            <strong>languages</strong>
          </h3>
          {country.languages.map((lang, i) => {
            return <p key={i}>{lang.name}</p>;
          })}
        </ul>
        <img src={country.flag} className="flag" alt="flag" />
      </div>
    </div>
  );
};
export default ParsedCountries;
