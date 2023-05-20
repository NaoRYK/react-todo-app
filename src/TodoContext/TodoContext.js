import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();


function TodoProvider({ children }) {

    const defaultTodos = [

        {text: 'Crear mi primer ToDo', completed : false},
      
      
        
      ];
    const {item:todos,saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', defaultTodos);

    let completedTodos = todos.filter(todo => todo.completed).length;
    let totalTodos = todos.length;
  
  
    const [searchValue,setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const searchedTodos = todos.filter( (todo) =>{ return(todo.text.toLowerCase().includes(searchValue.toLowerCase()))});
  
  
   
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

    const addTodo = (text) =>{
        const newTodos = [...todos];
        console.log(newTodos)
        newTodos.unshift({
            text,
            completed:false
        })
        console.log(newTodos)
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
      addTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };