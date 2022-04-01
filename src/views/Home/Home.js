import React, { useEffect, useState } from 'react';
import { changeToDo, createTodo, deleteToDo, fetchToDo } from '../../services/fetchutils';
import './Home.css';
import { useParams, useHistory } from 'react-router-dom';

export default function Home() {
  const [todo, setToDo] = useState([]);
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');
  // const [complete, setComplete] = useState(false);
  const params = useParams();
  const id = params.id;
  const history = useHistory('');

  useEffect(()=> {
    const grabToDo = async () => {
      const data = await fetchToDo();
      setToDo(data);
    };
    grabToDo();
  }, []);

  const submitToDo = async () => {
    try {
      await createTodo({ description });
      history.go(0);
    } catch (e) {
      setError('you broke it');
    }
  };

  const setToTrue = async (data) => {
    try {
      await changeToDo({ ...data, complete: true });
      history.go(0);
      console.log('click');
    } catch (e) {
      setError('tisk tisk you broke it');
    }
  };




  return (
    <div> Home
      {error && <p>{error}</p>}
      <div>
        <label className='bio'> Background:
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
