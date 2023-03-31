import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title ||!desc){
            alert("Title or Description cannot be blank");
        }
        addTodo(title,desc);
       // setTitle("");
        //setDesc("");
    }
return (
    <div className="container my-3">
        <h3>Add a Book</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Book Title</label>
                <input type="text" value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}} 
                id="title" aria-describedby="emailHelp" />
                
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Book Author</label>
                <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc" />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Book Category</label>
                <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-sm btn-success">Add Book</button>
        </form>
    </div>
    )
}
