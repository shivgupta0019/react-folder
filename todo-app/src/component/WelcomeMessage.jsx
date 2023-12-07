import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return todoItems.length === 0 && <h3>Enjoy Your Day</h3>;
};
export default WelcomeMessage;
