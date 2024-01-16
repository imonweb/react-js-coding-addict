import { useState } from "react";

const ErrorExample = () => {
  const {counter,setCounter} = useState();
  let count = 0;

  const handleClick = ({counter}) => {
    count++;
    console.log(count);
  }
  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn">increase</button>
    </>

  )
};

export default ErrorExample;
