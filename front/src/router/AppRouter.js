import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskEdit from '../components/task/TaskEdit';
import TaskForm from '../components/task/TaskForm';
import TaskList from '../components/task/TaskList';

export const AppRouter = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/task' element={<TaskList />} />
          <Route path='/add' element={<TaskForm />} />
          <Route path='/edit/:id' element={<TaskForm />} />
        </Routes>
      </Router>
    </div>
  );
};
