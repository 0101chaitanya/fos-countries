const ParsedCountries = ({ countries }) => {
  if (countries.length > 10) {
    return "Too many matches,specify another filter";
  }
  return (
      <div>
          {
      {countries.map((country) => {
        <div key={country.population}>
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
          <img src={countries[0].flag} className="flag" alt="flag" />
        </div>;
      })
              }
          }
    </div>
  );
};
export default ParsedCountries;
