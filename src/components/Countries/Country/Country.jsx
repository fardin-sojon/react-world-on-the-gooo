
const Country = ({country}) => {
    // console.log(country);
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Country Code: {country.cca3.cca3}</p>
            <p>Area: {country.area.area}</p>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;



/**
 * 
 * 1. inline css (style object)
 * 2. 
 */