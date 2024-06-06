const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], //initial state with tasks loaded from localStorage or an empty array if none exist
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = { ...action.payload, completed: false }; //creating a new task object with completion status set to false
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // updating tasks in localStorage
      return {
        ...state,
        tasks: updatedTasks, // updating state with the new tasks array
      };
    case "DELETE_TASK":
      const filteredTasks = state.tasks.filter(
        (task, index) => index !== action.payload // filtering out the task to be deleted based on its index
      );
      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    case "EDIT_TASK":
      const editedTasks = state.tasks.map((task, index) =>
        index === action.payload.index //updating the text and date of the task with the specified index
          ? { ...task, text: action.payload.text, date: action.payload.date }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(editedTasks));
      return {
        ...state,
        tasks: editedTasks, //Updating state with the edited tasks array
      };
    case "TOGGLE_TASK":
      const toggledTasks = state.tasks.map((task, index) =>
        index === action.payload //toggling the completion status of the task with the specified index
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(toggledTasks)); //updating tasks in localStorage
      return {
        ...state,
        tasks: toggledTasks,
      };
    default:
      return state; //reeturning current state if action type is not recognized
  }
};

export default taskReducer;
