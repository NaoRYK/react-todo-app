import React from "react";
import ReactDOM from "react-dom";
import './modal.css'
import { TodoContext } from "../TodoContext/TodoContext";

function Modal({children}){
    const {setOpenModal, openModal} = React.useContext(TodoContext)
    return ReactDOM.createPortal(
        <div className="modal">

            
            {children}
        </div>,
        document.getElementById("modal-container")
    );
}

export {Modal};