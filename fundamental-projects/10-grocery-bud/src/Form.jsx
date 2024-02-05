import React from 'react'
import { useState } from 'react'

const Form = ({addItem}) => {
  const [newItemName, setNewItemName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(newItemName)
    if(!newItemName) {
      toast.error('please provide value')  
      return
    };
    addItem(newItemName)
    setNewItemName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input 
          type="text" 
          className='form-input'
          value={newItemName} 
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          type='submit'
          className='btn'
        >
          submit
        </button>
      </div>
    </form>
  )
}

export default Form