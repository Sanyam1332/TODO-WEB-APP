import TodoName from "./components/TodoName";
import AddToDo from "./components/AddToDo";
import WelcomeMsg from "./components/WelcomeMsg";
import "./app.css";
import AllItems from "./components/AllItems";
import TodoItemsContextProvider from "./store/Todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <TodoName />
        <AddToDo></AddToDo>
        <WelcomeMsg></WelcomeMsg>
        <div className="container">
          <AllItems></AllItems>
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
