import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const Statistic = ({text , value}) => {
    return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
  
  
  const Statistics = ({good,neutral,bad,all}) => {
  
    if ((good || bad || neutral)===0 ){
      return(
        <div>No feedback given</div>
      )
    }
  
    return(
      <table>
        <tbody>
          <Statistic text={"good"} value={good}/>
          <Statistic text={"neutral"} value={neutral}/>
          <Statistic text={"bad"} value={bad}/>
          <Statistic text={"all"} value={all}/>
          <Statistic text={"positive"} value={(good/all)*100}/>
          <Statistic text={"good"} value={(good+bad*(-1))/all}/>
        </tbody>
      </table>
    )
  }
  
  
  const Button = ({handleBtn,text}) => {
    return(
      <button onClick={handleBtn}>
        {text}
      </button>
    )
  }
  
  const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
  
    const handleGood = () => {
      setGood(good +1)
      setAll(all +1)
    }
    const handleBad = () => {
      setBad(bad +1)
      setAll(all +1)
    }
    const handleNeutral = () => {
      setNeutral(neutral +1)
      setAll(all +1)
    }
  
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button text={"good"} handleBtn={handleGood}/>
        <Button text={"bad"} handleBtn={handleBad}/>
        <Button text={'neutral'} handleBtn={handleNeutral}/>
  
  
        <h3>Statistics</h3>
        <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
        
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));
