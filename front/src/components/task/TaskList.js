import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../../context/taskContext';
import Task from './Task';

import './Tasks.css';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <h1 className='tasks-title'>To-do App</h1>
      <ul className='tasks'>
        {tasks.map((task) => {
          return <Task key={task.id} {...task} />;
        })}
      </ul>
      <Link to='/add' style={{ textDecoration: 'none' }}>
        <button className='tasks-btn'>Add Task</button>
      </Link>
    </>
  );
};

export default TaskList;
