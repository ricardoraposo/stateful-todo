import { useContext } from 'react';
import { TodoContext } from '../store';

function TodoList() {
  const { todoList, toggleItem, updateItem, removeItem } = useContext(TodoContext);

  return (
    <div>
      {todoList.map((todo) => (
        <div
          key={ todo.id }
          className="flex gap-4 items-center my-3"
        >
          <input
            // className="w-1/12"
            type="checkbox"
            checked={ todo.done }
            onChange={ () => toggleItem(todo.id) }
          />
          <input
            type="text"
            value={ todo.text }
            className="w-11/12 bg-slate-100 text-xl px-4 py-1 rounded-lg"
            onChange={ (e) => updateItem(todo.id, e.target.value) }
          />
          <button
            className="w-1/12 px-4 py-1.5 bg-slate-300 rounded-lg hover:bg-slate-400
            transition"
            onClick={ () => removeItem(todo.id) }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
