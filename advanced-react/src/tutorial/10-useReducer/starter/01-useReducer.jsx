import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
  isLoading: false
}

// const CLEAR_LIST = 'CLEAR_LIST'
// const RESET_LIST = 'RESET_LIST'
// const REMOVE_ITEM = 'REMOVE_ITEM'

{/*
const reducer = (state, action) => {
  // console.log(action)
  if(action.type === CLEAR_LIST){
    return {...state, people:[]}
  }
  if(action.type === RESET_LIST){
    return {...state, people: data}
  }
  if(action.type === REMOVE_ITEM){
    // console.log(action)
    // return state
    let newPeople = state.people.filter((person) => person.id !== action.payload.id);
    return {...state, people: newPeople}
  }
  // return state
  throw new Error(`No matching "${action.type}" - action type`)
}
*/}

const ReducerBasics = () => {

  const [state, dispatch] = useReducer(reducer, defaultState); 

  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({type: REMOVE_ITEM, payload: { id }});
  };

  const clearList = () => {
    // setPeople([]);
    dispatch({type: CLEAR_LIST});
  }

  const resetList = () => {
    // setPeople(data);
    dispatch({type: RESET_LIST});
  }

  console.log(state)
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 
      ? (
           <button
              className='btn'
              style={{ marginTop: '2rem' }}
              onClick={resetList}
            >
            reset
            </button>
      ) : (
            <button
              className='btn'
              style={{ marginTop: '2rem' }}
              onClick={clearList}
            >
            clear
            </button>
          )
     }
     
    </div>
  );
};

export default ReducerBasics;
