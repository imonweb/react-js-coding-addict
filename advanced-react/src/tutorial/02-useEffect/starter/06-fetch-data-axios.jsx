import { useState, useEffect } from 'react'
import axios from 'axios';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch(err => {
        setError(err.message);
      });
  }, []);
  return (
    <>
      {error && <p className='text-danger'>{error}</p>}
      <ul className='users'>
        {users.map((user) => {
         const { id, login, avatar_url, html_url } = user;
         return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </div>
          </li>
         )
        })}
      </ul>
    </>
  )
}

export default FetchData