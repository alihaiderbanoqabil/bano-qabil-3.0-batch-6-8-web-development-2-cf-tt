import React, { useReducer, useRef } from "react";

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
//   {
//     id: 3,
//     title: "Todo 3",
//     complete: false,
//   },
// ];

const initialTodos = [];

const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    // return state.map((todo) => {
    //   if (todo.id === action.id) {
    //     return {
    //       ...todo,
    //       complete: !todo.complete,
    //     };
    //   } else {
    //     return todo;
    //   }
    // });
    case "ADD":
      return [action.todo, ...state];
    case "EDIT":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "DELETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  console.log(todos, "todos");
  const handleComplete = (todo) => {
    // console.log("todo: ", todo);
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  const handleAdd = (event) => {
    event.preventDefault();
    const todo = {
      id: todos.length + 1,
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      complete: false,
    };
    console.log("todo: ", todo);
    dispatch({ type: "ADD", todo: todo });
  };
  const handleDelete = (todo) => {
    console.log("todo: ", todo);
    dispatch({ type: "DELETE", id: todo.id });
  };
  const handleEdit = (todo) => {
    console.log("todo: ", todo);
    dispatch({ type: "EDIT", id: todo.id });
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            rows={5}
            cols={15}
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <button>Add Todo</button>
      </form>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id}>
            <label style={{ textDecoration: todo.complete && "line-through" }}>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              <strong> Title:</strong> {todo.title}
            </label>
            <p>
              {" "}
              <strong>Description:</strong>
              {todo.description}
            </p>
          </div>
        ))
      ) : (
        <h1>There is no todo's created yet, please add from the above form!</h1>
      )}
      {}
    </>
  );
};
