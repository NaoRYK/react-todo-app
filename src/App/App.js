
import React from 'react';
import { AppUI } from './AppUI';



import './App.css';
import { TodoProvider } from '../TodoContext/TodoContext';







// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');




function App() {

  return(

    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    

  )
}






export default App;
