import React, { useState } from 'react'

// [HTML Color Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)

const Form = () => {
  const [color, setColor] = useState('')
  const handleSubmit = () => {}

  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form 
        className='color-form'
        onSubmit={handleSubmit}
      >
        <input 
          type="color" 
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input 
          type="text" 
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button
          className='btn'
          type='submit'
          style={{background:color}}
        >
          submit
        </button>
      </form>
    </section>
  )
}

export default Form