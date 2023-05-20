import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();


function TodoProvider({ children }) {

    const defaultTodos = [

        {text: 'Crear mi primer ToDo', completed : false},
      
      
        
      ];
    const {item:todos,saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', defaultTodos);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
  
  
    const [searchValue,setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(true);
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
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };