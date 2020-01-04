import React from 'react';
import Part from './Part'


function Content ({parts}) {
//     const p = parts.map(part => (
//         return <Part key={part.id} name={part.name} ex={part.exercises}/>
// ))
    return(
        <>
        {parts.map(part => (
            <Part  key={part.id} name={part.name} ex={part.exercises}/>
        ))} 
        </>
    )
}

export default Content