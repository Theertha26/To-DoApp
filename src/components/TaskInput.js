import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import "./TaskInput.css";

const TaskInput = () => {
  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const dispatch = useDispatch();
  //function to add task to redux store
  const handleAddTask = () => {
    if (taskText.trim() !== "" && taskDate.trim() !== "") {
      dispatch(addTask({ text: taskText, date: taskDate })); //dispatching action to add task
      setTaskText("");
      setTaskDate("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask(); //calling handleAddTask function to add task
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} //Updating task text state on change
        onKeyPress={handleKeyPress}
      />
      <input
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <button className="add" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
