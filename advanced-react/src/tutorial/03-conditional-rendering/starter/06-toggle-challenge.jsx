import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  const toggleAlert = () => {
    if(showAlert) {
      setShowAlert(false);
      return;
    } 
    setShowAlert(true);
  }

  return (
    <>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={toggleAlert}>toggle</button> <span></span>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>improved toggle</button>
      {showAlert && <Alert />}
     
    </>
  )
};

const Alert = () => {
  return <div className="alert alert-danger">Hello World!</div>
}

export default ToggleChallenge;
