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
          <p key={countries[0].population}>{countries[0].name}</p>
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
