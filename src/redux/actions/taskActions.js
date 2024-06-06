export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task, //payload contains the new task to be added
});

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index, // Payload contains the new task to be added
});

export const editTask = (index, text, date) => ({
  type: EDIT_TASK,
  payload: { index, text, date }, // Payload contains the index of the task to be edited along with the new text and date
});

export const toggleTask = (index) => ({
  type: TOGGLE_TASK,
  payload: index, //Payload contains the index of the task to be toggled (completed/uncompleted)
});
