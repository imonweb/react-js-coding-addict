import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  }
  
  useEffect(() =>{
    // getUsers();
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        // console.log(users);
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
     
    }
    fetchData();
  }, [])

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}

      </ul>
       
    </>
    
    ) 

    
};
export default FetchData
