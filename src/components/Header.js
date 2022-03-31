import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../services/fetchutils';

export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };
  return (
    <div> Header
      <div onClick={handleLogout}>
        <button>logout</button>
      </div>
      {currentUser && 
        <>
          <NavLink className='nav' exact to = '/'>
            <h1>Admin Page</h1>
          </NavLink>
      
          
        </>
      }
        
    </div>
  );
}