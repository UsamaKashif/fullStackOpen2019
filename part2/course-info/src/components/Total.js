import React from 'react';

function Total (props) {
    const total = props.part.reduce((s,p) => {
        console.log(s.exercises)
        console.log(p.exercises)
        console.log(s.exercises + p.exercises)
        return {excercises: s.exercises + p.exercises}
    })
    return(
        
        // <b><p>Number of excercises {props.part[0].exercises+ props.part[1].exercises + props.part[2].exercises}</p></b>
        <p>number of excercises {total.excercises}</p>
    )
}

export default Total