import "./TodoSearch.css"
import React from "react"
import { TodoContext } from "../../TodoContext/TodoContext"
function TodoSearch(){

    const {setSearchValue, searchValue} = React.useContext(TodoContext)
    return(

        <div id="todo-search">

            <input placeholder="Ingrese su ToDo" value={searchValue} onChange={(e)=>{
                setSearchValue(e.target.value);
                
            }}/>
        </div>
    )
}

export {TodoSearch}