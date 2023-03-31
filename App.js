
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("deleted succesfully!!!",todo);
    //deleting this way is not possible in react
    //let index=todos.indexOf(setTodos);
    //todos.splice(index,1);

  setTodos(todos.filter((e)=>{
    return e!==todo
  
  }));
  }
  const addTodo = (title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno=todos[todos.length-1].sno + 1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([
    {
     sno:1,
     title:"Go To The Market",
     desc:"You need to go to the market to get this job done"
    },
    {
      sno:2,
      title:"Go To The Mall",
      desc:"You need to go to the mall to get this job done"
    },
    {
      sno:3,
      title:"Go To The Home",
      desc:"You need to go to the home to get this job done"
    }
  ]);
  return (
    <>
    <Header title="BOOK STORE" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
   
    </>
  );
}

export default App;
