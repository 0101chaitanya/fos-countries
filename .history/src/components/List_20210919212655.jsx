import React from "react";
const List = ({ countries }) => {
  console.log(countries);

  const parsedCountries = () => {
    if (countries.length > 10) {
      return "Too many matches,specify another filter";
    }
    return countries.map((country) => {
      <p key={country.population}>{country.name}</p>;
    });
  };
  return <div>{parsedCountries}</div>;
};

export default List;
