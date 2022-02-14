import React, { useState } from "react";
const ParsedCountries = ({ country }) => {
  const [show, setShow] = useState(false);
  return (
    <div key={country.population}>
      <button onClick={() => setShow(!show)}>Show</button>
      {!show && <p>{country.name}</p>}

      {show && (
        <div>
          <h1>{country.name}</h1>

          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <ul>
            <h3>
              <strong>languages</strong>
            </h3>
            {country.languages.map((lang, i) => {
              return <li key={i}>{lang.name}</li>;
            })}
          </ul>
          <img src={country.flag} className="flag" alt="flag" />
        </div>
      )}
    </div>
  );
};
export default ParsedCountries;