import React from 'react';

const PersonForm = ({newName, newNumber, onChangeName,onNumberChange,onSubmitHandler}) =>{
    return(
    <form onSubmit={onSubmitHandler}>
        <div>
          name: <input value={newName} onChange={onChangeName}/>
        </div>
        <div>
          number <input value={newNumber} onChange={onNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )}

export default PersonForm