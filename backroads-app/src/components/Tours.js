import React from 'react'
import Title from './Title'
import { ourTours } from './Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      {/* <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div> */}

      <div className="section-center featured-center">
        {ourTours.map((tour) => {
          const {id, image, date, title, paragraph, location, duration, price } = tour
          return (
         
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt={title} />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>
                    {paragraph}
                  </p>
                  <div className="tour-footer">
                    <p>
                      <span><i className="fas fa-map"></i></span> {location}
                    </p>
                    <p>{duration} days</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
          
          )
        })}
        
      </div>
    </section>
  )
}

export default Tours