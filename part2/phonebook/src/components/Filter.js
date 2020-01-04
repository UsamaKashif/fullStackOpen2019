import React from 'react';


const Filter = ({ns,changeHandler})=>{
    return(
    <div>
        filter shown with:<input value={ns} onChange={changeHandler}/>
    </div>
    )}


export default Filter