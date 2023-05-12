
import "./TodoItem.css"

function TodoItem({text, completed, onComplete,onDelete}){
    return(
      <li className="todo">

        

        <span className={`todo-text ${completed && "completed" }`}>{text}</span>
        <span className="completed-button" onClick={ !completed ? onComplete : null}>

          {completed ? null : <i className="fa-solid fa-check checked"></i> }

        </span>
        <span className="delete-button" onClick={onDelete}>
        <i className="fa-solid fa-xmark delete"></i>
        </span>
      </li>
    );
  }




  
  export {TodoItem};
