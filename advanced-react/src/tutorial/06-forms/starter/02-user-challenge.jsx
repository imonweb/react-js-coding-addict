import { useState } from 'react';
import { data } from '../../../data';

 
const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!name) return;
    const fakeId = Date.now()
    // console.log(fakeId);
    const newUser = {id: fakeId, name}
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    setName('');
  }

  // function handleRemoveUser(e){
  //   setUsers(users.filter((_, i) => i !== e))
  // }

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id)
    setUsers(updatedUsers)
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input 
            type='text' 
            className='form-input' 
            id='name' 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button 
          type='submit' 
          className='btn btn-block'
          onClick={ ( ) => {
             
          }}
        >
          submit
        </button>
      </form>
      {users.map((user) => {
            // console.log(users)
        return (
          <>
            <div>
              <h4 key={user.id}> 
                {user.name}
              </h4>
              <button onClick={() => removeUser(user.id)} className='btn'>Remove</button>
            </div>
          </>
        )

      })}
    </>
  );
};
export default UserChallenge;
