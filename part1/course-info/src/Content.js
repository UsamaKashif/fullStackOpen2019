import React from 'react';
import Part from './Part'


function Content (props) {
    return(
        <div>
            <Part part={props.part[0].name} ex={props.part[0].exercises}/>
            <Part part={props.part[1].name} ex={props.part[1].exercises}/>
            <Part part={props.part[2].name} ex={props.part[2].exercises}/>
        </div>
    )
}

export default Content