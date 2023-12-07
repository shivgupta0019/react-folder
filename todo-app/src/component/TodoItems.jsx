import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";
import TodoItemName from "./TodoItemName";

const TodoItems = ({ todoItemName }) => {
  let i = 1;

  const { todoItems, DeleteItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItemName
            key={i++}
            todoname={item.name}
            tododate={item.duedate}
            todoItemName={DeleteItems}
          ></TodoItemName>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
