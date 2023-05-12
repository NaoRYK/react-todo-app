import "./TodoSearch.css"
import React from "react"
function TodoSearch({searchValue,setSearchValue}){

    console.log(searchValue)
    return(

        <div id="todo-search">

            <input placeholder="Ingrese su ToDo" value={searchValue} onChange={(e)=>{
                setSearchValue(e.target.value);
                
            }}/>
        </div>
    )
}

export {TodoSearch}