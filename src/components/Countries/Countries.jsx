import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ CountriesPromise }) => {

  const [visitedCountries, setVisitedCountries] = useState([])
  const [visitedFlags, setVisitedFlags] = useState([])

  const handleVisitedCountries = (country)=>{
    console.log("Clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }

  const haldleVisitedFlag = (flag)=>{
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag)
  }

  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);

  return (
    <div>
      <h1>In the Countries: {countries.length}</h1>
      <h2>Total Country Visited: {visitedCountries.length}</h2>
      <h3>Total Flags Visited: {visitedFlags.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li
          key={country.cca3.cca3}
          >{country.name.common}</li>)
        }
      </ol>

        <div className="visited-flag-container">
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
        </div>

      <div className="countries">
        {
        countries.map((country) => (
          <Country key={country.cca3.cca3} 
          country={country}
          handleVisitedCountries = {handleVisitedCountries}
          haldleVisitedFlag = {haldleVisitedFlag}
          ></Country>))
        }
      </div>
    </div>
  );
};

export default Countries;
