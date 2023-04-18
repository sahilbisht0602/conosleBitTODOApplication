import "./index.css";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";
import { useState } from "react";
function App() {
  const [editFromVisibility, setEditFromVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  const handleEditClick = (todo) => {
    setEditFromVisibility(true);
    setEditTodo(todo);
  };
  const goBack = () => {
    setEditFromVisibility(false);
  };
  return (
    <div className="wrapper">
      <br />
      <img src="data:image/png;base64,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" />
      {/* <h1 className="text-center">CONSOLE BIT TODO APP</h1> */}
      <Form
        editTodo={editTodo}
        editFromVisibility={editFromVisibility}
        goBack={goBack}
      />
      <Todos
        editFromVisibility={editFromVisibility}
        handleEditClick={handleEditClick}
      />
      {todos.length > 0 && (
        <button
          className="btn btn-warning btn-md delete-all"
          onClick={() => {
            dispatch(deleteAll());
          }}
        >
          EMPTY ALL
        </button>
      )}
    </div>
  );
}

export default App;
