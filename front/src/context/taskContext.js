import { createContext, useReducer } from 'react';
import { taskReducer } from './taskReducer';

const initialState = {
  tasks: [
    {
      id: 1,
      description: 'Primer task',
      completed: false,
    },
    {
      id: 2,
      description: 'Testeano desde el context',
      completed: false,
    },
  ],
};

export const TaskContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        ...task,
        id: Math.random(),
      },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: task,
    });
  };

  const toggleCompleted = (id) => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: id,
    });
  };

  return (
    <TaskContext.Provider
      value={{ ...state, addTask, deleteTask, updateTask, toggleCompleted }}>
      {children}
    </TaskContext.Provider>
  );
};
