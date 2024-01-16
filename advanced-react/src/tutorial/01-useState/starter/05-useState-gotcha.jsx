import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    // setValue(value + 1);
    setValue((currentState) => {
      const newState = currentState + 1
      return newState;
      // console.log(currentState);
    });
    console.log(value);
  }
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h4>{value}</h4>
      <button type="button" onClick={handleClick}>Increase</button>
    </>
  )
};

export default UseStateGotcha;
