import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, haldleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country);

  const haldleVisited = () => {
    // 1st basic system
    // if(visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }

    // 2nd System
    // setVisited (visited ? false : true)

    // 3rd System
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Country Code: {country.cca3.cca3}</p>
      <p>
        Area: {country.area.area},{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <p>Population: {country.population.population}</p>
      <button onClick={haldleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={()=>{haldleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
    </div>
  );
};

export default Country;

/**
 *
 * 1. inline css (style object)
 * 2.
 */
