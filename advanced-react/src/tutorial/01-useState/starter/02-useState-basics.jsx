import { useState } from "react";

const UseStateBasics = () => {
  // const value = useState('hello')[0];
  // const func = useState('hello')[1];
  // console.log(value);
  // console.log(func);

  const [count,setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1);
  }

  return (
    <>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>Click</button>
    </>
  )
};

export default UseStateBasics;
