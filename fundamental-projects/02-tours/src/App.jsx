import { useEffect } from "react";
import { useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project';
 

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      
      setTours(tours);
    } catch(error){
      console.log(error);
    }
    setIsLoading(false);
  }
  

  useEffect( () => {
    
    fetchTours();
  }, [])

  
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id))
  }

  if(isLoading){
    return ( 
    <main>
      <Loading />
    </main>
    )
  }

  return (
    <main>
      <Tours tours={tours}/>
      {/* <h1>Our Tours</h1>
      <ul className="tours">
      {tours.map((tour) => {
        return (
            <li className="single-tour">
              <span>
                <div className="tour-price">{tour.price}</div>
                <img src={tour.image} className="img" alt="" />
              </span>
              <h5>{tour.name}</h5>
              <div className="tour-info">
                {tour.info}
              </div>
              <button className="btn" onClick={() => removeTour(id)}>Not Interested</button>

            </li>
        )
      })}
      </ul> */}
    </main>
  )
};
export default App;
