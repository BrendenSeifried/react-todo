import React, { useEffect, useState } from 'react';
import { fetchToDo } from '../../services/fetchutils';

export default function Home() {
  const [todo, setToDo] = useState([]);
  

  useEffect(()=> {
    const grabToDo = async () => {
      const data = await fetchToDo();
      setToDo(data);
    };
    grabToDo();
  }, []);

  return (
    <div> Home
      <div>
      </div>
      {todo.map ((data) =>(
        <div key={data.id}>
          <h1>{data.description}</h1>
        </div>
      ))}
    </div>
  );
}
