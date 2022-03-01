export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.payload],
      };

    case 'DELETE_TASK':
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case 'UPDATE_TASK': {
      const updatedTask = action.payload;

      const updatedTasks = state.tasks.map((task) => {
        if (task.id === updatedTask.id) {
          task.description = updatedTask.description;
          return updatedTask;
        }
        return task;
      });

      return {
        ...state,
        tasks: updatedTasks,
      };
    }

    case 'TOGGLE_COMPLETED':
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

      return {
        ...state,
        tasks: updatedTasks,
      };

    default:
      return state;
  }
};
