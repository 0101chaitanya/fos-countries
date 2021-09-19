import React from "react";
import ParsedCountries from "./ParsedCountries";
const List = ({ countries }) => {
  return (
    <div>
      {countries.length > 10
        ? "Too many matches,specify another filter"
        : countries.map((country) => {
            return <ParsedCountries country={country} />;
          })}
    </div>
  );
};

export default List;
