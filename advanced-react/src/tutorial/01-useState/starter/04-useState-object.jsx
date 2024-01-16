import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'John',
    age: 24,
    hobby: 'eating'
  })
  // const [name, setName] = useState('John');
  // const [age, setAge] = useState(28);
  // const [hobby, setHobby] = useState('Eating');

  const handleClick = () => {
    // setName('Josh');
    // setHobby('Running');
    // setAge(22);
    setPerson({ name: 'Josh', hobby: 'Running', age: 22 });
    // setPerson({...person, name: 'Jake'})
  }

  const {name, age, hobby} = person;
  return (
    <>
      <h2>useState object example</h2>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{hobby}</h4>
      <button type='button' onClick={handleClick}>Show Josh</button>
    </>
  )
};

export default UseStateObject;
