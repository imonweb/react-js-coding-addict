import { data } from '../../../data';
import { useState } from 'react';  

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    console.log(id);
    // const newPeople = people.filter((person) => person.id !== id )
    setPeople(people.filter((person) => person.id !== id))
  }
  const clearAllItems = () => {
    setPeople([]);
  }

  return ( 
    <>
      {people.map((person) => {
        const {id, name} = person  
          // console.log(person);
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button type='button' onClick={() => removeItem(id)}>remove</button>
            </div>
          )
      }) }
      <button 
        type='button' 
        style={{marginTop: '2rem'}} 
        className='btn' 
        onClick={clearAllItems}
      >clear items
      </button>
    </>
  );
};

export default UseStateArray;
