import { useContext, useState } from 'react';
import { TodoContext, addTodo } from '../store';

function TodoAdd() {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  const handleClick = () => {
    setTodoList(addTodo(todoList, todoText));
    setTodoText('');
  };

  return (
    <div className="w-full my-6">
      <h1 className="text-3xl text-white font-semibold mb-3">Todo List</h1>
      <div className="flex gap-4">
        <input
          id="text-input"
          type="text"
          value={ todoText }
          onChange={ (e) => setTodoText(e.target.value) }
          className="w-5/6 bg-slate-100 text-xl px-4 py-1 rounded-lg"
        />
        <button
          onClick={ handleClick }
          className="w-1/6 px-4 bg-slate-300 rounded-lg hover:bg-slate-400"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default TodoAdd;
