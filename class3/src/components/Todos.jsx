// import React, { useContext, useReducer, useRef, useState } from "react";
// // import { BiSolidTrashAlt } from "react-icons/bi";
// // import { BiEditAlt } from "react-icons/bi";
// // OR
// import { BiSolidTrashAlt, BiEditAlt } from "react-icons/bi";
// import { NameContext } from "./Parent";
// const ADD = "ADD";
// const DELETE = "DELETE";
// // const initialTodos = [
// //   {
// //     id: 1,
// //     title: "Todo 1",
// //     complete: false,
// //   },
// //   {
// //     id: 2,
// //     title: "Todo 2",
// //     complete: false,
// //   },
// //   {
// //     id: 3,
// //     title: "Todo 3",
// //     complete: false,
// //   },
// // ];

// const initialTodos = [];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) =>
//         todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
//       );
//     // return state.map((todo) => {
//     //   if (todo.id === action.id) {
//     //     return {
//     //       ...todo,
//     //       complete: !todo.complete,
//     //     };
//     //   } else {
//     //     return todo;
//     //   }
//     // });
//     // case "ADD":
//     case ADD:
//       return [action.todo, ...state];
//     case "EDIT":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     case DELETE:
//       return state.filter((todo) => todo.id !== action.id);
//     case "DELETE_ALL":
//       return [];
//     case "DELETE_DONE":
//       return state.filter((todo) => todo.id !== action.id);
//     case "FILTER":
//       console.log({ state, action });
//       if (action.filter === "ALL") {
//         return state;
//       } else if (action.filter === "DONE") {
//         return state.filter((todo) => todo.complete);
//       } else if (action.filter === "UN_DONE") {
//         return state.filter((todo) => !todo.complete);
//       }
//     default:
//       return state;
//   }
// };

// export const Todos = () => {
//   const value = useContext(NameContext);
//   console.log(value, "value");
//   const [todos, dispatch] = useReducer(reducer, initialTodos);
//   const copiedTodos = [...todos];
//   const titleInputRef = useRef();
//   const [todo, setTodo] = useState(null);
//   const [filter, setFilter] = useState("ALL");
//   // const descriptionInputRef = useRef();
//   console.log(todos, "todos");
//   const handleComplete = (todo) => {
//     // console.log("todo: ", todo);
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };
//   const handleAdd = (event) => {
//     event.preventDefault();

//     // console.log("todo: ", todo, { value: titleInputRef.current.value });
//     // dispatch({ type: "ADD", todo: todo });
//     // const value = titleInputRef.current.value;
//     let { value } = titleInputRef.current;
//     if (value) {
//       const todo = {
//         id: todos.length + 1,
//         title: value,
//         // description: descriptionInputRef.current.value,
//         complete: false,
//       };
//       dispatch({ type: ADD, todo: todo });
//       titleInputRef.current.value = "";
//     } else {
//       alert("To add a todo please enter todo title first!");
//     }
//   };
//   const handleDelete = (id) => {
//     // console.log("id: ", id);
//     const isAllowDelete = window.confirm(
//       `Are you sure? you want to delete this todo with id (${id})`
//     );
//     if (isAllowDelete) {
//       dispatch({ type: DELETE, id: id });
//     }
//   };
//   const handleEdit = (todo) => {
//     // console.log("todo: ", todo);
//     setTodo(todo);
//     dispatch({ type: "EDIT", id: todo.id });
//   };
//   const handleDeleteAll = () => {
//     const isAllowDelete = window.confirm(
//       `Are you sure? You want to delete all todos?`
//     );
//     if (isAllowDelete) {
//       dispatch({ type: "DELETE_ALL" });
//     }
//   };
//   const handleDeletDone = () => {
//     dispatch({ type: "DELETE_DONE" });
//   };
//   const handleFilter = (selectedFilter) => {
//     console.log("selectedFilter", selectedFilter);
//     dispatch({ type: "FILTER", filter: selectedFilter });
//   };
//   console.log("todo: ", todo);
//   console.log({ copiedTodos, todos });
//   // console.log(filter, "filter");
//   return (
//     <>
//       <form
//         onSubmit={handleAdd}
//         style={{ display: "flex", alignItems: "center", gap: "1rem" }}
//       >
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input type="text" id="title" ref={titleInputRef} />
//         </div>
//         {/* <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             rows={5}
//             cols={15}
//             id="description"
//             ref={descriptionInputRef}
//           />
//         </div> */}
//         <button>Add Todo</button>
//       </form>
//       <section
//         style={{
//           margin: "1rem",
//           display: "flex",
//           flexDirection: "column",
//           gap: "1rem",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "1rem",
//           }}
//         >
//           <button
//             style={{ flexGrow: 1 }}
//             onClick={() => {
//               handleFilter("ALL");
//             }}
//           >
//             All
//           </button>
//           <button style={{ flexGrow: 1 }} onClick={() => handleFilter("DONE")}>
//             Done
//           </button>
//           <button
//             style={{ flexGrow: 1 }}
//             onClick={() => handleFilter("UN_DONE")}
//           >
//             Undone
//           </button>
//         </div>
//         {copiedTodos.length > 0 ? (
//           copiedTodos.map((todo, index) => {
//             // const doneTodoStyle = {
//             //   textDecoration: "line-through",
//             //   color: "red",
//             // };
//             return (
//               <div
//                 key={todo.id}
//                 style={{
//                   padding: "0.5rem",
//                   border: "1px solid gray",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <label
//                   // style={{
//                   //   textDecoration: todo.complete && "line-through",
//                   //   color: todo.complete && "red",
//                   // }}
//                   style={{
//                     ...(todo.complete && {
//                       textDecoration: "line-through",
//                       color: "red",
//                     }),
//                     // ...(todo.complete
//                     //   ? {
//                     //       textDecoration: "line-through",
//                     //       color: "red",
//                     //     }
//                     //   : {}),
//                   }}
//                 >
//                   {index + 1} - {/* <strong> Title:</strong> */}
//                   {todo.title} {todo.id}
//                 </label>
//                 {/* <p>
//                 {" "}
//                 <strong>Description:</strong>
//                 {todo.description}
//               </p> */}
//                 <div>
//                   <input
//                     type="checkbox"
//                     checked={todo.complete}
//                     onChange={() => handleComplete(todo)}
//                     style={{
//                       width: 20,
//                       height: 20,
//                       accentColor: "yellowgreen",
//                     }}
//                   />
//                   <BiEditAlt
//                     color="orange"
//                     size={25}
//                     style={{ cursor: "pointer" }}
//                     onClick={() => handleEdit(todo)}
//                   />
//                   <BiSolidTrashAlt
//                     color="red"
//                     size={25}
//                     style={{ cursor: "pointer" }}
//                     onClick={() => handleDelete(todo.id)}
//                   />
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <h1>
//             There is no todo's created yet, please add from the above form!
//           </h1>
//         )}
//         <div>
//           <button>Delete done todos</button>
//           <button onClick={handleDeleteAll} style={{ margin: "0 0 0 1rem" }}>
//             Delete All todos
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("Todos render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
