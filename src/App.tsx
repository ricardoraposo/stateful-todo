import Title from './components/Title';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import ContextProvider from './store';

function App() {
  return (
    <ContextProvider>
      <div className="h-screen w-screen bg-slate-800 flex flex-col items-center">
        <div className="w-3/4">
          <Title />
          <TodoAdd />
          <TodoList />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
