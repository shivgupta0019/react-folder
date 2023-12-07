import { useState } from "react";
import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";

function TodoItemName({ todoname, tododate, todoItemName }) {
  let sendTodoName = () => {
    todoItemName(todoname);
  };

  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6"> {todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={sendTodoName}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItemName;
