import React from 'react';
import Content from './Content'
import Header from './Header'

const Course = ({course})=>{
    const total = course.parts.reduce((a, b) =>{
        return ({exercises: a.exercises + b.exercises})
    });

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <b>number of excercises {total.exercises}</b>
        </div>
    )
}


export default Course