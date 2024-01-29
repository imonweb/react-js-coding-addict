import { useEffect } from "react";
import { useState } from "react";

const url = 'https://course-api.com/react-tours-project';
 

const App = () => {
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);

  

  useEffect( () => {
    const fetchTours = async () => {
      try {
        const response = await fetch(url);
        const tours = await response.json();
        
        setTours(tours);
      } catch(error){
        console.log(error);
      }
    }
    fetchTours();
  }, [])

  // if(isLoading) {
  //   return <h2>Loadding...</h2>
  // }

  // if(isError) {
  //   return <h2>There was an error!</h2>
  // }

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id))
  }


  return (
    <main>
      <h1>Our Tours</h1>
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
      </ul>
    </main>
  )
};
export default App;
