import React, { useState ,useEffect, useRef} from 'react'



function TodoForm(props) {
    const [input, setInput]= useState(props.edit? props.edit.value:'')

    const inputRef = useRef(null)
    // useEffect (() =>{
        // inputRef.current.focus  ()
    // })
    const handleChange = e=>{
        setInput(e.target.value);

    }
    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });
        setInput('')
    };
    // console.log("setInput" ,handleSubmit)

  return (
    <form className='todo-form' onSubmit={handleSubmit}  >
        {props.edit?(
        <>
        <input type='text' 
            placeholder='Update your item' 
            value={input} 
            className='todo-button'
            onChange={handleChange}
            ref ={inputRef}
        />
        <button className='todo-button'>Update</button>

        </>
        ):
        (
        <>
        <input type='text' 
            placeholder='Input your name' 
            value={input} 
            className='todo-button'
            onChange={handleChange}
            ref ={inputRef}
        />
        <button className='todo-button'>Add to do</button>

        </>
        )
        }
    </form >
  )
}

export default TodoForm