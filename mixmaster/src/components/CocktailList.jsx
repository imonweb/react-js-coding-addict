import React from 'react'

import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from './CocktailCard'

const CocktailList = ({drinks}) => {
  if(!drinks){
    return <h4 style={{textAlign:"center"}}>No matching cocktail found...</h4>
  }
  const formattedDrinks = drinks.map((item) => {
    const {idDrink, strDrink, strDrinkThumb, srAlcoholic, strGlass} = item 
    return {id:idDrink, name:strDrink, glass:strGlass, image:strDrinkThumb}
  })

  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

export default CocktailList