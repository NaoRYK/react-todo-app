import React from "react";
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoList } from '../Components/TodoList/TodoList';
import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton';
import { TodoItem } from '../Components/TodoItem/TodoItem';

function AppUi(
    {
        error,
        loading,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo
    }
){
    return (
        <React.Fragment>
      
          <TodoCounter completed={completedTodos} total={totalTodos} />
    
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
          
    
          <TodoList>
              {loading && <p>Estamos cargando..</p>}
              {error && <p>Estamos la cagamos</p>}
              {(!loading && searchedTodos.length < 1) && <p>Crea un nuevo ToDo</p>}
            {
            searchedTodos.map(todo =>(
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                onComplete={ () => {completeTodo(todo.text)}}
    
                onDelete={() => {deleteTodo(todo.text)}}
                />
              ))
    
            }
          </TodoList>
    
          <CreateTodoButton/>
        </React.Fragment>
      );
}

export {AppUi};