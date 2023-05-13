
import React from 'react';
import { AppUi } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


import './App.css';





const defaultTodos = [

  {text: 'Crear mi primer ToDo', completed : false},


  
];


// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');




function App() {


  const [todos,saveTodos] = useLocalStorage('TODOS_V1', defaultTodos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;


  const [searchValue,setSearchValue] = React.useState("");

  const searchedTodos = todos.filter( (todo) => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));


 
  const completeTodo = (text) =>{

    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo)=> todo.text === text);
    newTodos[todoIndex].completed = true;

    newTodos.splice(newTodos.length, newTodos.length +1, newTodos[todoIndex])
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=> todo.text === text);

    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  return(
    <AppUi
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />


  )
}






export default App;
