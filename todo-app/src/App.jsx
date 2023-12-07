import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";

import WelcomeMessage from "./component/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useReducer } from "react";
import TodoItemsContext from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    let obj = {
      name: action.payload.textInputBox,
      duedate: action.payload.textDateBox,
    };
    newTodoItems = [...currTodoItems, obj];
  } else if (action.type === "DELET_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }

  return newTodoItems;
};

function App() {
  // let [todoItems, printInputBox] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addInputBox = (textInputBox, textDateBox) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        textInputBox,
        textDateBox,
      },
    };
    dispatchTodoItems(newItemAction);

    //   let obj = {
    //     name: textInputBox,
    //     duedate: textDateBox,
    //   };

    //   printInputBox([...todoItems, obj]);
  };

  const DeleteItems = (todoItemName) => {
    const newDItemAction = {
      type: "DELET_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(newDItemAction);
    // const newToDoItems = todoItems.filter((item) => item.name !== todoItemName);
    // printInputBox(newToDoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addInputBox,
        DeleteItems,
      }}
    >
      <center>
        <div className="container ">
          <div className="row main-container">
            <div className="col-6">
              <AppName></AppName>
              <AddTodo></AddTodo>
              <WelcomeMessage></WelcomeMessage>
              <TodoItems></TodoItems>
            </div>
          </div>
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
