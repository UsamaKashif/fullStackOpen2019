import React from 'react';
import Details from './Details'

const CountriesList = ({ countryList, searchCountryName }) => {
    const data = countryList.filter(country =>
      country.name
        .toLowerCase()
        .includes(searchCountryName.toLowerCase())
    );
  
    if (data.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }
  
    return (
      <ul>
        {data.map(i=><Details key={i.name} name={i.name}/>)}
      </ul>
    );
  }

export default CountriesList