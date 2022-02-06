import React from 'react';



function Form({setInputText,todos,setTodos,inputText,setStatus,filteredTodos}) {

    const inputTextHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,{text: inputText , completed: false, id: Math.random()* 1000 }, 
        ]);
        setInputText('');
    }


  return <form>
        <label > > </label>
        <input  value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            Submit
        </button>
    </form>;
}

export default Form;
