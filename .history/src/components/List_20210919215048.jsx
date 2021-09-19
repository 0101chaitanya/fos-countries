import React from "react";
const List = ({ countries }) => {
  console.log(countries);

  const parsedCountries = () => {
    if (countries.length > 10) {
      return "Too many matches,specify another filter";
    }
    if (countries.length === 1) {
      console.log(countries);
      return (
        <div>
          <h1>{countries[0].name}</h1>
          <p>capital {countries[0].capital}</p>
          <p>population {countries[0].population}</p>
          <ul>
            <h3>
              <strong>languages</strong>
            </h3>
            {countries[0].languages.map((lang, i) => {
              return <p key={i}>{lang.name}</p>;
            })}
          </ul>
          <img
            src={countries[0].flag}
            style="width: 20px;height: 20px;"
            alt="flag"
          />
        </div>
      );
    }

    return countries.map((country) => {
      return <p key={country.population}>{country.name}</p>;
    });
  };
  return <div>{parsedCountries()}</div>;
};

export default List;
