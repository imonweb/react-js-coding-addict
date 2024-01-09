import React from 'react'

const ContactForm = () => {
  const handleFormInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  }
  const handleButtonClick = (e) => {
    console.log(e.target.name)
   }

  const EventExamples = () => {
    return <h1>Events</h1>
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }
  return (
    <div className='book'>
      {/* <form onSubmit={handleFormSubmit}> */}
      <form>
        <h2>Contact Me:</h2>
        <input 
          type="text"
          name="product"
          onChange={handleFormInput}
          // onChange={(e) => {console.log(e.target.value)}}
          style={{ margin: '1rem 0'}} 
        />
      <button onClick={handleButtonClick} type="button">Click</button>
      <button onClick={handleFormSubmit} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm