import { useRef } from "react";
import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";

function AddTodo() {
  //   const [todoName, setTodoName] = useState("");

  //   const [todoDate, setTodoDate] = useState("");

  //   const handleOnChangeName = (event) => {
  //     setTodoName(event.target.value);
  //   };

  //   const handleOnChangeDate = (event) => {
  //     setTodoDate(event.target.value);
  //   };

  // const handleAddButtionClicked = () => {
  //   handleInputBox(todoName, todoDate);
  //   setTodoName("");
  //   setTodoDate("");
  // };
  const { addInputBox } = useContext(TodoItemsContext);
  const todoNameComponent = useRef();
  const todoDateComponent = useRef();

  const handleAddButtionClicked = () => {
    const todoName = todoNameComponent.current.value;
    const todoDate = todoDateComponent.current.value;

    todoNameComponent.current.value = "";
    todoDateComponent.current.value = "";
    addInputBox(todoName, todoDate);
  };

  // let textInputBox = () => {
  //   let inputValue1 = document.querySelector(".input");
  //   let inputValue = inputValue1.value;
  //   inputValue1.value = "";
  //   return inputValue;
  // };
  // let textDateBox = () => {
  //   let dateValue1 = document.querySelector(".date");
  //   let dateValue = dateValue1.value;
  //   dateValue1.value = "";
  //   return dateValue;
  // };

  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameComponent}
            className="input"
            placeholder="Inter Todo Here"
            // value={todoName}
            // onChange={handleOnChangeName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateComponent}
            className="date"
            // value={todoDate}
            // onChange={handleOnChangeDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            // onClick={() => handleInputBox(textInputBox(), textDateBox())}

            onClick={handleAddButtionClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
