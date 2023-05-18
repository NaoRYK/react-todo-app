import React from "react";
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoList } from '../Components/TodoList/TodoList';
import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton';
import { TodoItem } from '../Components/TodoItem/TodoItem';
import {TodoError} from '../Components/TodoError/TodoError'
import {TodoLoading} from '../Components/TodoLoading/TodoLoading'

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
              {loading && <TodoLoading></TodoLoading>}
              {error && <TodoError></TodoError>}
          
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