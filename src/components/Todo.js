import React, { useState } from 'react'
import "../App.css"

const Todo = () => {
    const [inputData,setInputData]= useState('');
    const [items, setItems]=useState([]);


    const addItem = () => {
      if (!inputData){

      }else {
        setItems([...items, inputData]);
        setInputData('')
      } 
    }
    const deleteItem = () => {
      const updatedItems = items.filter((elem , ind) => {
        return 

      });
      setItems(updatedItems);
    }



    const submitHandler =(e) =>{
      e.preventDefault();
    }
    
  return (
    <>
    <h1>TODO LIST</h1>
    <section className="container">
      <div className="form-container">
        <form className="todo-form" onSubmit={submitHandler}>
          <input type="text" placeholder='Add todo' className="todo-input" value={inputData}
          onChange={(e)=>setInputData(e.target.value)} />
          <button className="todo-button" type="submit">
            <i className="fa-solid fa-square-plus" title='add' onClick={addItem}></i>
          </button>
        </form>

        <div className="select">
          <select className="filter-todos" name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
      <div className="todo-container">
        {
          items.map((elem, ind)=>{
            return(
<ul className="todo-list" key={ind}>
        <li className="todo">
        <p className="todo-title">{elem}</p>
        <button className="check-button"><i className="fa-sharp fa-solid fa-check" ></i></button>
        <button className="trash-button"><i className="fa-solid fa-trash" onClick={
          () => deleteItem(ind)}></i></button>
      </li>
      </ul>
            )
          })

        }
        
        
        </div>
      </section>
    </>
  )
}

export default Todo
