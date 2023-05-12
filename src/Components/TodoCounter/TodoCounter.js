
import './TodoCounter.css'

function TodoCounter({total, completed}){
    
  return(

    total === completed ? <h2>¡Felicidades! No hay más ToDo's 🎉</h2>:
      <h2>
        Haz Completado {completed}/{total} ToDos
      </h2>
    )
}

export {TodoCounter};
