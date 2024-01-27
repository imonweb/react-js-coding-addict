import { useState } from 'react';
import data from './data'
  
const App = () => {
  const [people, setPeople] = useState(data)

  return (
  <>
    <h1>Birthdays Today</h1>
    {people.map((person) => {
      console.log('person')
      return (
        <div>
            <ul>
              <li>{person.id} {person.name} {person.age}</li>
            </ul>
        </div>
      )
    })}
  </>
  )
};
export default App;
