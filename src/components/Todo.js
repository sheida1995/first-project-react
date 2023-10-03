import React, { useState } from 'react'
import "../App.css"

const Todo = () => {
    const [inputData,setInputData]= useState('');
    const [items, setItems]=useState([])
    const addItem =()=>{
        setItems(inputData);
    }
  return (
    <>
    <h1>TODO LIST</h1>
    <section className="container">
      <div className="form-container">
        <form className="todo-form">
          <input type="text" placeholder='Add todo' className="todo-input" value={inputData}
          onChange={(e)=>setInputData(e.target.value)} />
          <button className="todo-button" type="submit">
            <i className="fa-solid fa-square-plus" onClick={addItem}></i>
          </button>
        </form>

        <div class="select">
          <select class="filter-todos" name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
      <div class="todo-container">
        <ul class="todolist">
        <li class="todo">
        <p class="todo-title">work1</p>
        <button class="check-button"><i class="fa-sharp fa-solid fa-check"></i></button>
        <button class="trash-button"><i class="fa-solid fa-trash"></i></button>
      </li>
        </ul>
        </div>
      </section>
    </>
  )
}

export default Todo
