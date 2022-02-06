import React,{ useState,useEffect } from "react";
import './App.css';
import Feet from "./components/Feet";
import Form from "./components/Form"
import TodoList from './components/TodoList';

function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once when app starts
    /*useEffect(() => {
      getLocalTodos();
    }, []);*/

    //UseEffect
    useEffect(() => {
      filteredHandler();
      //saveLocalTodos();
    }, [todos,status]);

  //Function
  const filteredHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }    
  }

  //Save to local
  /*const saveLocalTodos = () =>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  //Get to local
  const getLocalTodos = () =>{
      
    if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos',JSON.stringify([]));
    }else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
        
    }    
   }*/

  return (
    <div className="App">
      <div className="todoapp">
      <header>
          <h1>React Todo</h1>
      </header>
      <Form
           inputText={inputText} 
           todos={todos} 
           setTodos={setTodos} 
           setInputText={setInputText}
           setStatus={setStatus}
           filteredTodos={filteredTodos}
      />

      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
      
      </div>

      <Feet setStatus={setStatus}/>

    </div>
  );
}

export default App;
