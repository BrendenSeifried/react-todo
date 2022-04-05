import React from 'react';
import { logout } from '../services/fetchutils';

export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };
  return (
    <div> 
      {currentUser && 
        <>
          <div onClick={handleLogout}>
            <button>logout</button>
          </div>  
        </>
      } 
    </div>
  );
}