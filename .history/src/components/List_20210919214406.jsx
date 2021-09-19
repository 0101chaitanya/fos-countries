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
            languages
            {countries[0].languages.map((lang) => {
              return <p>{lang.name}</p>;
            })}
          </ul>
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
