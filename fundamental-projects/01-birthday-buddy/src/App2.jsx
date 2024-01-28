import { useState } from 'react';
import data from './data'
  
const App = () => {
  const [people, setPeople] = useState(data)

  const clearAllPeople = (e) => {
    e.preventDefault()
    setPeople([])
  }

  // let count = 0;
  // for(let i = 0; i < people.length; i++) {
  //   if(people[i].status === '0') count++;
  // }

  // console.log(count)

  let total = data.length;
  console.log(total)

  return (
  <>
      <form className='form'>

        <h1>{total} Birthdays Today</h1>
        <br />
    {people.map((person) => {
      console.log('person')
      return (
        <>
            <ul>
              <li className='person'>
                <img className="img" src={person.image}  alt="" />
                <div className="main">
                  <h4>{person.name} </h4> 
                  <p>{person.age} years </p>
                </div>
              </li>
            </ul>
        </>
      )
    })}
        <button className='btn btn-block' onClick={clearAllPeople}>Clear All</button>
    </form>
  </>
  )
};
export default App;
