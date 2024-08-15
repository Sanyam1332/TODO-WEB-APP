import { useContext, useRef, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { TodoItemsContext } from "../store/Todo-items-store";

function AddToDo() {
  const itemNameElement = useRef();
  const itemDateElement = useRef();

  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddBtnClicked = (event) => {
    event.preventDefault();
    const itemName = itemNameElement.current.value;
    const itemDate = itemDateElement.current.value;
    itemNameElement.current.value = "";
    itemDateElement.current.value = "";
    addNewItem(itemName, itemDate);
  };

  return (
    <div className="container ">
      <form className="row" onSubmit={handleAddBtnClicked}>
        <div className="col">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={itemNameElement}
          />
        </div>
        <div className="col">
          <input type="date" ref={itemDateElement} />
        </div>
        <div className="col kg-btn">
          <button className="btn btn-success btn-col ">
            <IoAddCircleSharp />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
