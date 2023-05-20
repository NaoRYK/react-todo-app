import React, { useContext } from "react"
import { TodoContext } from "../../TodoContext/TodoContext"


function TodoForm(){
    const {setOpenModal,addTodo} = React.useContext(TodoContext)


    const changeTodoValue= (event) =>{
        setNewTodoValue(event.target.value)

    }
    const [newTodoValue,setNewTodoValue] = React.useState("");
    return(
        <div>
            
            <form onSubmit={(event) =>{
                event.preventDefault();
                addTodo(newTodoValue);
                setOpenModal(false)
                document.getElementById("modal-container").classList.add("hidden")

            }}>
                <label >Ingrese el titulo de su nuevo ToDo</label>
                <input value={newTodoValue} onChange={changeTodoValue} type="text" placeholder="Escribir ToDo"></input>
        </form>
            <div id="modal-buttons">
                
                <button type="" onClick={()=>{
            addTodo(newTodoValue);
            setOpenModal(false)
            document.getElementById("modal-container").classList.add("hidden")
            }} className="confirm-todo fa-solid fa-plus"></button>
                <button type="" onClick={()=>{setOpenModal(false)
                document.getElementById("modal-container").classList.add("hidden")
                }} className="close-modal fa-solid fa-xmark"></button>
            </div>
        </div>
    )
}

export {TodoForm}