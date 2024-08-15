import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";
import ToDoContainer from "./ToDoContainer";

function AllItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="items-container ">
      {todoItems.map((item) => (
        <ToDoContainer
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
        ></ToDoContainer>
      ))}
    </div>
  );
}

export default AllItems;
