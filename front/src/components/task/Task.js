import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilSquare } from '@fortawesome/free-solid-svg-icons';
import { TaskContext } from '../../context/taskContext';
import { Link } from 'react-router-dom';

const Task = ({ description, id, completed }) => {
  const { deleteTask, toggleCompleted } = useContext(TaskContext);

  return (
    <li className='tasks__list'>
      <div className='task__list-task'>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        <span>{description}</span>
      </div>
      <div className='task_list-btn'>
        <FontAwesomeIcon
          icon={faTrash}
          className='btn btn-task'
          onClick={() => deleteTask(id)}
        />
        <Link to={`/edit/${id}`} className='btn btn-task'>
          <FontAwesomeIcon icon={faPencilSquare} />
        </Link>
      </div>
    </li>
  );
};

export default Task;
