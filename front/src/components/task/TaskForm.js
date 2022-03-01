import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/taskContext';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const { tasks, addTask, updateTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [task, setTask] = useState({
    id: '',
    description: '',
    completed: false,
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      description: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
    navigate('/task');
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id == id);

    if (taskFound) {
      setTask({
        id: taskFound.id,
        description: taskFound.description,
        completed: taskFound.completed,
      });
    }
  }, [id, tasks]);

  return (
    <div>
      <h1 className='title-form'>
        {task.id ? `Editing - ${task.description}` : 'Creating a Task'}
      </h1>
      <form className='task__form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add Task...'
          required
          name='description'
          onChange={handleChange}
          autoComplete='off'
          value={task.description}
        />

        <button type='submit'>{task.id ? 'Edit' : 'Add'} Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
