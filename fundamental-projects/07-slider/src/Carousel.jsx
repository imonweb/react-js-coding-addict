import React from 'react'
import { shortList, list, longList } from './data'
import { useState } from 'react'
import {FaQuoteRight, FaQuoteLeft} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { useEffect } from 'react'

// [React Slick Docs](https://react-slick.neostack.com/)
// npm install react-slick slick-carousel --save

const Carousel = () => {
  const [people, setPeople] = useState(list)
  const [currentPerson, setCurrentPerson] = useState(0);
  
  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
    const result = (oldPerson - 1 + people.length) % people.length;
    return result;
    })
  }

  const nextSlide = () => { 
    setCurrentPerson((oldPerson) => {
    const result = (oldPerson + 1 ) % people.length;
    return result;
    })
  }

  useEffect( () => {
    let sliderId = setInterval(() => {
      nextSlide()
    }, 2000)
    return () => { clearInterval(sliderId)}
  }, [currentPerson])

  return (
    <section className='slider-container'>
      
      {people.map((person, personIndex) => {
        console.log(person)
        const {id, image, name, title, quote} = person;
        return ( 

        <arcticle 
          className='slide' 
          style={{
            transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            opacity: personIndex === currentPerson ? 1 : 0,
            visibility: personIndex === currentPerson ? 'visible' : 'hidden'
          }} 
          key={id}
        >
          <img src={image} alt={name} className='person-img' />
          <h5 className='name'>{name}</h5>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className='icon' />
        </arcticle>

        )
      } )}
      <button
        type='button'
        className='prev'
        onClick={prevSlide}
      >
        <FiChevronLeft />
      </button>
     <button
        type='button'
        className='next'
        onClick={nextSlide}
        >
        <FiChevronRight />
      </button>
    
    </section>
  )
}

export default Carousel