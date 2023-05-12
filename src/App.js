
import React from 'react';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';
import { TodoList } from './Components/TodoList/TodoList';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';
import { TodoItem } from './Components/TodoItem/TodoItem';
import './App.css';





const defaultTodos = [

  {text: 'Jugar Lol', completed : false},
  {text: 'mimir', completed : true},
  {text: 'mimir2', completed : true},
  {text: 'mimir3', completed : true},
  {text: 'Jugar MC', completed : false},
  {text: 'Jugar MC2', completed : false},
  {text: 'mimir13', completed : true},
  {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', completed : false},
  {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore mana aliqua. Ut enim ad minim veniam, quis nostrud', completed : false},

  
];


localStorage.setItem('TODOS_v1', defaultTodos)


function App() {

  const [todos,setTodos] = React.useState(defaultTodos);

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
    setTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=> todo.text === text);

    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
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
