import { ContextProvider } from './context/taskContext';
import TaskList from './components/task/TaskList';
import { AppRouter } from './router/AppRouter';

const App = () => {
  return (
    <ContextProvider>
      <div className='App'>
        <AppRouter />
      </div>
    </ContextProvider>
  );
};

export default App;
