
import React from 'react';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';
import { TodoList } from './Components/TodoList/TodoList';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';
import { TodoItem } from './Components/TodoItem/TodoItem';
import './App.css';





const defaultTodos = [

  {text: 'Crear mi primer ToDo', completed : false},


  
];


// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');


function App() {
  let parsedTodos;

  const localStorageTodos = localStorage.getItem('TODOS_V1')

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
    parsedTodos=[];
    
  }
  else{

    parsedTodos = JSON.parse(localStorageTodos);


  }

  const [todos,setTodos] = React.useState(parsedTodos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;


  const [searchValue,setSearchValue] = React.useState("");

  const searchedTodos = todos.filter( (todo) => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));


  const saveTodos = (newTodos) =>{

    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos);

  }
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
    <React.Fragment>
  
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      

      <TodoList>
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






export default App;
