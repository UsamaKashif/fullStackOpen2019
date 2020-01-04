import React from 'react';

const Persons = ({persons, onDelete})=>{
    const deleteFunction = (id,name)=>{
        if(window.confirm(`Delete ${name}`)){
            onDelete(id)
        }
    }
    const rows = persons.map(p=>{
        return <li key={p.name}>{p.name} {p.number} <button onClick={()=>deleteFunction(p.id,p.name)}>delete</button></li>
      })
    
    return(
        <ul>
            {rows}
        </ul>
    )
}

export default Persons