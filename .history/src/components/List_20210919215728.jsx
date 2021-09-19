import React from "react";
import ParsedCountries from "./ParsedCountries";
const List = ({ countries }) => {
  console.log(countries);

  return (
    <div>
      <ParseCountries countries={countries} />
    </div>
  );
};

export default List;
