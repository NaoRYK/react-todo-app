import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../../TodoContext/TodoContext'

function CreateTodoButton(){

    const {setOpenModal, openModal} = React.useContext(TodoContext)
    return(

        <div id='createTodo-div'>
                    <button onClick={() =>{
                        setOpenModal(!openModal)
                        document.getElementById("modal-container").classList.toggle("hidden")
                    }} type="submit">

                    <i className="fa-solid fa-plus createTodoI"></i>
                    </button>
        </div>

    )
}

export {CreateTodoButton}