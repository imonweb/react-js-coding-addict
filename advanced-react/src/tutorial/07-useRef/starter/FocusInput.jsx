import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef(null)

  useEffect( () => {
    // focus the input element
    inputRef.current.focus()
  }, [])

  return (
    <>
      <div>FocusInput</div>
      <input ref={inputRef} type="text" />
    </>

  )
}

export default FocusInput