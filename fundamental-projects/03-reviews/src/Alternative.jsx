import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import {FaBeer} from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]
  console.log(name);

  // npm i react-icons
  // [Docs](https://react-icons.github.io/react-icons/)

  const checkNumber = (number) => {
    if(number > people.length - 1){
        return 0;
    }
    if(number < 0){
        return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      // if(newIndex > people.length - 1){
      //   return 0;
      // }
      // return newIndex;
      return checkNumber(newIndex);
    })
  }
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      //  if(newIndex < 0){
      //   return people.length - 1;
      // }
      // return newIndex;
      return checkNumber(newIndex);
    })
  }

  const randomPerson = () => {
    // console.log(Math.random())
    let randomNumber = Math.floor(Math.random() * people.length)
    // console.log(randomNumber)
    if(randomNumber === index){
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber));
  }

  return (
    <main>
      <article className='review'>
        <div className="img-container">
          <img src={image} alt={name} className='person-img' />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="btn-container">
          <button 
            className="prev-btn"
            onClick={prevPerson}
          >
            <FaChevronLeft />
          </button>
          <button 
            className="next-btn"
            onClick={nextPerson}
          >
            <FaChevronRight />
          </button>
        </div>

        <button 
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          Surprise me
        </button>
      </article>
      
    </main>
  )
};
export default App;
