import React,{useState, useEffect} from 'react';
import './App.css';
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, SetShowAll] = useState(true)
  const [nameSearch, setNameSearch] = useState('')
  const [notificationMsg, setNotificationMsg] = useState(null)
  const [msgType, setMsgType] = useState('')

  useEffect(()=>{
    personService.getAll()
    .then(res=>{
      setPersons(res)
    })
  })

  const personExists = (n, data) => {
    let exists = data.find(p => p.name===n)
    if (exists===undefined){
      return false
    }else{
      return true
    }
    
  }

  const onChangeName = (event)=>{
    setNewName(event.target.value)
  }

  const onNumberChange = (event)=>{
    setNewNumber(event.target.value)
  }

  const filterPersons = (event)=>{
    if (nameSearch.length>0){
      SetShowAll(false)
    }
    setNameSearch(event.target.value)
  }

  const contactsToShow = showAll ? persons : persons.filter(p => {
    let search = nameSearch.toLowerCase()
    let filter = p.name.toLowerCase()
    return filter.includes(search)
  })
  // on form submit
  const formSubmitted = (event) => {
    event.preventDefault()
    
    
    if (personExists(newName,persons)){
      alert(`${newName} already exists`)
      const personUpdate = persons.filter(per=>{
        return per.name.includes(newName)
      })
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)){
        personService.update(personUpdate[0].id,{
          ...personUpdate[0],
          number: newNumber
        })
        .then(res=>{
          let personUpdated = persons.filter(p => p.id !== res.id)
          personUpdated = [...personUpdated, res]
          setPersons(personUpdated);
          setMsgType("success")
          setNotificationMsg(`${newName} updated`)
          setTimeout(()=>{
            setNotificationMsg(null)
          },
            5000
          )
          setNewName('')
          setNewNumber('')
        })
        .catch(error=>{
          setMsgType('error')
          setNotificationMsg(`information on ${newName} was already removed from server`)
          setTimeout(()=>{
            setNotificationMsg(null)
          },5000)
        })
      }
    }else{
      const personObj = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      personService.create(personObj)
      .then(response=>{
        setMsgType('success')
        setPersons(persons.concat(response))
        setNotificationMsg(`${personObj.name} added`)
        setTimeout(()=>{
          setNotificationMsg(null)
        },
          5000
        )
      })
      .catch(error=>{
        setMsgType('error')
        setNotificationMsg(`information on ${newName} was already removed from server`)
          setTimeout(()=>{
            setNotificationMsg(null)
          },5000)
        })
    }
    
    setNewName("")
    setNewNumber("")
  }

  const onDelete=(id)=>{
    personService.remove(id)
    .then(()=>{
      const updated = persons.filter(per=>per.id !== id)
      const name = persons.find(p=>p.id === id)
      setPersons(updated)
      setMsgType('success')
      setNotificationMsg(`${name.name} deleted`)
      setTimeout(()=>{
        setNotificationMsg(null)
      },
        5000
      )
    })
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMsg} type={msgType}/>
      <Filter ns={nameSearch} changeHandler={filterPersons}/>

      <h2>Add A new</h2>

      <PersonForm newName={newName} newNumber={newNumber} onSubmitHandler={formSubmitted} onChangeName={onChangeName} onNumberChange={onNumberChange}/>
      
      <h2>Numbers</h2>
      <Persons persons={contactsToShow} onDelete={onDelete}/>
      
    </div>
  )
}

export default App;
