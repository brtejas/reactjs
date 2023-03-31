import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  let btncolor={
    backgroundColor:"red",
  }
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn-sm btn-btn-danger" style={btncolor} onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
