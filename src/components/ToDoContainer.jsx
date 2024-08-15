import { RiDeleteBin5Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/Todo-items-store";
import { useContext } from "react";

function ToDoContainer({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container ">
      <div className="row">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <div className="col ">
          <button
            type="button"
            className="btn btn-danger btn-col"
            onClick={() => deleteItem(todoName)}
          >
            <RiDeleteBin5Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoContainer;
