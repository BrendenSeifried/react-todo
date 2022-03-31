import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../../services/fetchutils';

export default function Authorize({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signInUser(email, password);
      setCurrentUser(data.email);
      history.push('/');
    } catch (e){
      setError(e.message);
    }
  };

  return (
    <div>Authorize
      <h1>Sign into account</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <label>Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

        </label>
        <button>Submit</button>

      </form>


    </div>
  );
}