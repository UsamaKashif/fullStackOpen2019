import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Details =({name})=>{
    const [details, setDetails] = useState([])
    const [show, setShow] = useState(false)

    useState(()=>{
        axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response=>{
            setDetails(response.data[0])
        })
    },[name])
    return show
    ? (
        <div>
            <h3>{details.name}</h3>
            <p>capital {details.capital}</p>
            <p>population {details.population}</p>
            <h3>languages</h3>
            <ul>
                {details.languages && details.languages.map(lang=><li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img src={details.flag} height="150" alt={`${details.name} name`}/>
        </div>
    )
    : (
        <p key={details.name}>
            {details.name}
            <button onClick={()=>setShow(!show)}>show</button>
        </p>
    )
}


export default Details