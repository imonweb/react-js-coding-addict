import React from 'react'
import Title from './Title'
// import { ourTours } from './Tour'
import { ourTours } from './data'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      {/* <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div> */}

      <div className="section-center featured-center">
        {ourTours.map((tour) => {
          return <Tour {...tour} key={tour.id} /> 
        })}
        
      </div>
    </section>
  )
}

export default Tours