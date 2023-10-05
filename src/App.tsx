import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import Title from './components/Title';
import { ContextProvider } from './store';

function App() {
  return (
    <div className="h-screen w-screen bg-slate-800 flex flex-col items-center">
      <div className="w-3/4">
        <ContextProvider>
          <Title />
          <TodoAdd />
          <TodoList />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
