import React from 'react';
import Todo from "./Todo"
import "./TodoList.js"

function TodoList({todos,setTodos,filteredTodos}) {
  return <div className='todo-list'>
        <ul className='list'>
          {filteredTodos.map((todo) => (
             <Todo
                  text={todo.text}
                  todo={todo} 
                  setTodos={setTodos}
                  todos={todos}
                  key={todo.id} 
                  />
          ))}
        </ul>
  </div>;
}

export default TodoList;
