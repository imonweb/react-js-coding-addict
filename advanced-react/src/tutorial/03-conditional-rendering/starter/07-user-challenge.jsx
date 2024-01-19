import { useState } from "react";


const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    setUser({name: 'Johnny English'});
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <>
      {user ?  (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>Logout</button>
        </div>
      ) : (
         <div>
          <h4>please login</h4>
          <button className="btn" onClick={login}>login</button>
        </div>
      )
      }
    </>
  )
};

export default UserChallenge;
