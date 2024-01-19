
import { Person } from './Person';
import { people } from '../../../data';
import React, { useState, useEffect } from 'react'

const List = () => {
 
  return (
    <>    
      {people.map((person) => {
        // const { name, id } = person;
        // console.log(name)
        return (
          <>
            <Person key={person.name} {...person} />
          </>
        )
      })}
    </>
  )
}

export default List