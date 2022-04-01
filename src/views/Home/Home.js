import React, { useEffect, useState } from 'react';
import { changeToDo, createTodo, deleteToDo, fetchToDo } from '../../services/fetchutils';
import './Home.css';


export default function Home() {
  const [todo, setToDo] = useState([]);
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');
 

  useEffect(()=> {
    const grabToDo = async () => {
      const data = await fetchToDo();
      setToDo(data);
    };
    grabToDo();
  }, []);

  const submitToDo = async () => {
   
    try {
      const data = await createTodo({ description });
      setToDo((prevState) => [...prevState, data]);
      
    } catch (e) {
      setError('you broke it');
    }
  };

  const setToTrue = async (data) => {
    try {
      const caugh = await changeToDo({ ...data, complete: true });
  
    } catch (e) {
      setError('tisk tisk you broke it');
    }
  };

  // const takeAway = async () => {
  //   await deleteToDo(id); 
  //   history.push(`/`);
  // };

  return (
    <div>
      {error && <p>{error}</p>}
      <div>
        <label className='bio'> Type a Todo:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <button onClick={submitToDo}>Submit</button>
      </div>
      {todo.map ((data) =>(
        <div key={data.id}>
          <h1 className={data.complete ? 'completed' : ''} onClick={()=>setToTrue(data)}>{data.description}</h1>
        </div>
      ))}
    </div>
  );
}
