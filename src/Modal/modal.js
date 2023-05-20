import React from "react";
import ReactDOM from "react-dom";
import './modal.css'
import { TodoContext } from "../TodoContext/TodoContext";

function Modal({children}){
    const {setOpenModal, openModal} = React.useContext(TodoContext)
    return ReactDOM.createPortal(
        <div className="modal">

            <form>
                <label for="">Ingrese el titulo de su nuevo ToDo</label>
                <input type="text" placeholder="Escribir ToDo"></input>
            </form>
            <div id="modal-buttons">
                
                <button type="" className="confirm-todo fa-solid fa-plus"></button>
                <button type="" onClick={()=>{setOpenModal(false)
                document.getElementById("modal-container").classList.add("hidden")
                }} className="close-modal fa-solid fa-xmark"></button>
            </div>
            {children}
        </div>,
        document.getElementById("modal-container")
    );
}

export {Modal};