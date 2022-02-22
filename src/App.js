import React, { useReducer, useState, useEffect } from 'react'
import './App.css';
import { reduser } from './reduser';
import Todo from './Component/Todo';
import Context from './Component/Context';

function App() {
  const [state, dispatch] = useReducer(reduser, JSON.parse(localStorage.getItem('todo')))
  const [inp, setInp] = useState('')
  useEffect((e) => {
    localStorage.setItem('todo', JSON.stringify(state))
  }, [state])

  function add(e) {
    if (e.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: inp
      })
      setInp('')
    }


  }
  return (
    <Context.Provider value={{ dispatch }}>
      <h2 className='Todo-Title'>Todo App</h2>
      <div className='Todo-input-block'>

        <input type='text' value={inp} onChange={(e) => setInp(e.target.value)} onKeyPress={add} placeholder = 'Enter Title' />
        <Todo todo={state} />

      </div>
    </Context.Provider>
  );
}

export default App;
