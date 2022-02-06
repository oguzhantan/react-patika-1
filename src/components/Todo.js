import React from 'react';
import "./Todo.css"

function Todo({text,todo,todos,setTodos}) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }

            return item;
        }))
    }

  return <div className='todo'>
      <div className={`todo-item${todo.completed ? "-completed" : ''}`}>
          <input type="radio" onClick={completeHandler} className='complete-btn' />
          {text}
          <button onClick={deleteHandler} className='complete-btn'> X </button>
      </div>
  </div>;
}

export default Todo;
