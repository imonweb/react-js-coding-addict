import React from 'react'

const SingleColor = ({index, color}) => {
  // console.log(color);
  const {hex, weight} = color;

  return (
    <>
    <article className='color' style={{ background: `#${hex}`}}>
      Single Color
    </article>
    </>
  )
}

export default SingleColor