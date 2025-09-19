import { use } from "react";
import Country from "./Country/Country";

const Countries = ({ CountriesPromise }) => {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
//   console.log(countries);

  return (
    <div>
      <h1>I the Countries: {countries.length}</h1>
      {countries.map((country) => (
        <Country 
        key={country.cca3.cca3}
        country = {country}></Country>
      ))}
    </div>
  );
};

export default Countries;
