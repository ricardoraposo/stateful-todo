import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="h-screen w-screen bg-slate-800 flex flex-col items-center">
      <div className="w-3/4">
        <TodoAdd />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
