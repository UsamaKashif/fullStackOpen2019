import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import Content from './Content'
import Total from './Total'


const App = () => {
    // const course = 'Half Stack application development'

    // const part1 = {
    //     name: 'Fundamentals of React',
    //     exercises: 10
    //   }
    // const part2 = {
    //     name: 'Using props to pass data',
    //     exercises: 7
    //   }
    // const part3 = {
    //     name: 'State of a component',
    //     exercises: 14
    //   }

    // const parts = [
    //     {
    //       name: 'Fundamentals of React',
    //       exercises: 10
    //     },
    //     {
    //       name: 'Using props to pass data',
    //       exercises: 7
    //     },
    //     {
    //       name: 'State of a component',
    //       exercises: 14
    //     }
    //   ]


    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
  
    return (
      <div>
        <Header course={course.name}/>
        {/* <Content pOne={part1.name} pTwo={part2.name} pThree={part3.name} eOne={part1.exercises} eTwo={part2.exercises} eThree={part3.exercises}/> */}
        <Content part={course.parts}/>
        {/* <Total one={part1.exercises} two={part2.exercises} three={part3.exercises}/> */}
        <Total part={course.parts}/>
      </div>
    );
  }



ReactDOM.render(<App />, document.getElementById('root'));