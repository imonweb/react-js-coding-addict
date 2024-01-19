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
    const newUser = {id: fakeId}
    
    console.log('form submitted');
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
            <div key={user.id}>
              {user.name}
            </div>
          </>
        )

      })}
    </>
  );
};
export default UserChallenge;
