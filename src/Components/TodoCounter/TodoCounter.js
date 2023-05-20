
import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../../TodoContext/TodoContext'

function TodoCounter(){
  
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
  console.log("t", totalTodos, "c", completedTodos)
  if (totalTodos === completedTodos && totalTodos !== 0) {
    return(<h2>¡Felicidades! No hay más ToDo's pendientes 🎉</h2>)
  }
  else if(totalTodos === 0 ){
    return(

      <h2>¡Agrega algun ToDo!</h2> 
    )
  }
  else{
    return(      <h2>
      Haz Completado {completedTodos}/{totalTodos} ToDos
    </h2>)
  }
  
}

export {TodoCounter};
