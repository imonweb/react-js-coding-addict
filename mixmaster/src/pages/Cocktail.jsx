import React from 'react'
import {useLoaderData, Link} from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({params}) => {
  const {id} = params;
  const data = await axios.get(`${singleCocktailUrl}${id}`)
  // const response = await axios.get(`${singleCocktailUrl}${id}`)
  // console.log(response);
  // return null;
  return {id, data};
}


const Cocktail = () => {
  const {id, data} = useLoaderData()
  const singleDrink = data.drinks[0]
  // console.log(singleDrink);
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  return (
    <Wrapper>
      <header>

      <Link to='/' className='btn'>
        back home
      </Link>
      </header>
      <div className="drink">
        <img src={image} alt={name} className='img' />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: {name}</span>
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail