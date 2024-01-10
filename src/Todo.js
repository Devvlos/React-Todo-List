import React, { useState } from 'react'
import './style.css'

export const Todo = () => {
  const[todos, setTodos] = useState([]);
  const[input, setInput] = useState("");

  const handleSubmit = () =>
  {
    if (input !== "")
    {
      setTodos([...todos, input]);
      setInput("");
    }
  }
  const removeTodo = (input) =>
  {
    setTodos((todos) => todos.filter((t) => t !== input));

  }
  return (
    <>
    <div className='container'>
      <div className='card'>
          <input className='input' type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter Your Activity'></input>
                <button className='btn' onClick={handleSubmit}>Submit</button>
                    <ul>
                      {todos.map((input) => (
                        <li className='activity' key={Math.random()}><span>{input}</span>
                          <button className='btn2' onClick={() => removeTodo(input)}>X</button>
                        </li>
                      ))}
                    </ul>
      </div>
    </div>
    </>
  )
}
