import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoapp/actions";
import { handleEditSubmit } from "../redux/todoapp/actions";
const Form = ({ editFromVisibility, editTodo, goBack }) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const [editValue, setEditValue] = useState("");
  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    // to get unique id
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    dispatch(addTodo(todoObj));
    // to clear the form
    setTodoValue("");
  };

  const editSubmit = (e) => {
    e.preventDefault();
    //getting the new object with updated value
    let editObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editObj));
  };

  return (
    <>
      {editFromVisibility === false ? (
        <form className="form-group custom-form" onSubmit={handleSubmit}>
          <label>Add your Todo</label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md">
              ADD
            </button>
          </div>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={editSubmit}>
          <label>Update TODO</label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md">
              Update
            </button>
          </div>
          <button className="btn btn-dark btn-md back-btn" onClick={goBack}>
            GO back
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
