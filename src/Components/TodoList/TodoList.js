import './TodoList.css'

function TodoList(props){
    return(

        <div id="todo-list">
            
            
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export {TodoList};