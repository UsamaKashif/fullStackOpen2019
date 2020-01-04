import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import CountriesList from './components/CountriesList'



const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountryName, setSearchCountryName] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  const onChangeHandler = event => {
    setSearchCountryName(event.target.value);
  }

  return (
    <div>
      find countries
      <input onChange={onChangeHandler}/>
      <CountriesList countryList={countries} searchCountryName={searchCountryName}/>
    </div>
  )
}

export default App;
