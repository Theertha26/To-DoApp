import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../redux/actions/taskActions";
import "./TaskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDate, setEditDate] = useState("");

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (index) => {
    //setting index of task being edited
    setEditIndex(index);
    setEditText(tasks[index].text);
    setEditDate(tasks[index].date);
  };

  const handleSave = (index) => {
    dispatch(editTask(index, editText, editDate)); //dispatching action to save edited task
    setEditIndex(null);
    setEditText("");
    setEditDate("");
  };
  //function to handle key press event during editing
  const handleKeyPress = (event, index) => {
    if (event.key === "Enter") {
      handleSave(index);
    }
  };

  const handleToggle = (index) => {
    dispatch(toggleTask(index)); //dispatching action to toggletask completion status
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                className="edit-input"
              />
              <input
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
              />
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <span>{task.date}</span>
            </>
          )}
          <div>
            {editIndex === index ? ( //conditional rendering of buttons based on editing status
              <button className="save" onClick={() => handleSave(index)}>
                Save
              </button>
            ) : (
              <>
                <button className="edit" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
                <button
                  className={task.completed ? "undo" : "complete"}
                  onClick={() => handleToggle(index)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
