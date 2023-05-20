
import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../../TodoContext/TodoContext'

function TodoCounter(){
  
  const {total, completed} = React.useContext(TodoContext)
  if (total === completed && total !== 0) {
    return(<h2>¡Felicidades! No hay más ToDo's 🎉</h2>)
  }
  else if(total === 0 ){
    return(

      <h2>¡Agrega algun ToDo!</h2> 
    )
  }
  else{
    return(      <h2>
      Haz Completado {completed}/{total} ToDos
    </h2>)
  }
  
}

export {TodoCounter};
