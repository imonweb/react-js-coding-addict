import { useState } from "react";
import data from './data'
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(typeof count)
    // console.log(1)
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }

  return ( 
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form 
        className="lorem-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="amount">paragraph:</label>
        <input 
          type="number" 
          name="amount" 
          id="amount" 
          min="1" 
          step="1" 
          max="8" 
          value={count} 
          onChange={ (e) => {
            setCount(e.target.value);
          }}
        />
        <button
          className="btn"
          type="submit"
        >
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          // return <p key={index}>{item}</p>
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  )
};
export default App;
