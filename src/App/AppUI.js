 import React from "react";
 import { TodoCounter } from "../Components/TodoCounter/TodoCounter";
 import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
 import { TodoList } from "../Components/TodoList/TodoList";
 import { CreateTodoButton } from "../Components/CreateTodoButton/CreateTodoButton";
 import { TodoItem } from "../Components/TodoItem/TodoItem";
 import { TodoError } from "../Components/TodoError/TodoError";
 import { TodoLoading } from "../Components/TodoLoading/TodoLoading";
 import { TodoContext } from "../TodoContext/TodoContext";
import { Modal } from "../Modal/modal";
 function AppUI() {
   const { error, loading, searchedTodos, completeTodo, deleteTodo,openModal,setOpenModal} =
     React.useContext(TodoContext);
   return (
     <React.Fragment>
       <TodoCounter />
       <TodoSearch />

         <TodoList>
           {loading && <TodoLoading></TodoLoading>}
           {error && <TodoError></TodoError>}
           {searchedTodos.map((todo) => (
             <TodoItem
               key={todo.text}
               text={todo.text}
               completed={todo.completed}
               onComplete={() => {
                 completeTodo(todo.text);
               }}
               onDelete={() => {
                 deleteTodo(todo.text);
               }}
             />
           ))}
         </TodoList>

       <CreateTodoButton />
       {openModal && (
       <Modal></Modal>
       )}
     </React.Fragment>
   );
 }
 export { AppUI };





// import React from "react";
// import { TodoCounter } from "../Components/TodoCounter/TodoCounter";
// import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
// import { TodoList } from "../Components/TodoList/TodoList";
// import { TodoItem } from "../Components/TodoItem/TodoItem";
// import { TodoLoading } from "../Components/TodoLoading/TodoLoading";
// import { TodoError } from "../Components/TodoError/TodoError";
// import { CreateTodoButton } from "../Components/CreateTodoButton/CreateTodoButton";
// import { Modal } from "../Modal/modal";
// import { TodoContext } from "../TodoContext/TodoContext";

// function AppUI() {
//   const {
//     loading,
//     error,
//     searchedTodos,
//     completeTodo,
//     deleteTodo,
//     openModal,
//     setOpenModal,
//   } = React.useContext(TodoContext);

//   return (
//     <>
//       <TodoCounter />
//       <TodoSearch />

//       <TodoList>
//         {loading && <TodoLoading></TodoLoading>}
//         {error && <TodoError></TodoError>}
//         {searchedTodos.map((todo) => (
//           <TodoItem
//             key={todo.text}
//             text={todo.text}
//             completed={todo.completed}
//             onComplete={() => {
//               completeTodo(todo.text);
//             }}
//             onDelete={() => {
//               deleteTodo(todo.text);
//             }}
//           />
//         ))}
//       </TodoList>

//       <CreateTodoButton />

//       {openModal && <Modal>La funcionalidad de agregar TODO</Modal>}
//     </>
//   );
// }

// export { AppUI };
