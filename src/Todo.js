import React, { useState } from 'react'
import { FaShare } from "react-icons/fa6";
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
  const sharee = (input) =>
  {
    if (navigator.share) {
      // Browser supports native share api
      navigator.share({
        text: `${input} - One Of My ToDo Today. Make Yours👇`,
        url: 'https://toodlee.netlify.app/',
      }).then(() => {
      })
        .catch((err) => console.error(err));
    } else {
      // Fallback
      alert("The current browser does not support the share function. Please, manually share the link")
    }
  }
  const shareeAll = () =>
  {
    if (navigator.share) {
      // Browser supports native share api
      navigator.share({
        text: `${todos} - My ToDos Of Today. Make Yours👇`,
        url: 'https://toodlee.netlify.app/',
      }).then(() => {
      })
        .catch((err) => console.error(err));
    } else {
      // Fallback
      alert("The current browser does not support the share function. Please, manually share the link")
    }
  }
  

  
  return (
    <>
    <div className='container'>
      <div className='card'>
          <input onKeyDown={(e) => {if (e.key === "Enter"){handleSubmit()}}} className='input' type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter Your Activity'></input>
                <button type="submit" className='btn' onClick={handleSubmit}>Submit</button>
                <button className='share' onClick={shareeAll}>Share <FaShare/></button>
                    <ul>
                      {todos.map((input) => (
                        <li className='activity' key={Math.random()}><button className='btn2' onClick={() => sharee(input)}><FaShare /></button><span>{input}</span>
                          <button  className='btn2' onClick={() => removeTodo(input)}>X</button>
                        </li>
                      ))}
                    </ul>
      </div>
    </div>
    </>
  )
}
