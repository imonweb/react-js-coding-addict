import { useState } from "react";

const UseStateTimeOut = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000)
    console.log(value);
  }
  return (
    <>
      <h2>useState with setTimeOut</h2>
      <h4>{value}</h4>
      <button type="button" onClick={handleClick}>Increase</button>
    </>
  )
};

export default UseStateTimeOut;
