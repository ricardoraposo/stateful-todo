import { useState } from 'react';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import { type Todo } from './store';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <div className="h-screen w-screen bg-slate-800 flex flex-col items-center">
      <div className="w-3/4">
        <TodoAdd todoList={ todoList } setTodoList={ setTodoList } />
        <TodoList todoList={ todoList } setTodoList={ setTodoList } />
      </div>
    </div>
  );
}

export default App;
