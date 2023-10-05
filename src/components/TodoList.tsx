import { useContext } from 'react';
import { TodoContext } from '../store';

function TodoList() {
  const { todoList, toggleItem, removeItem, updateItem } = useContext(TodoContext);

  const handleTodoToggle = (id: number) => {
    toggleItem(id);
  };

  const handleTodoUpdate = (id: number, value: string) => {
    updateItem(id, value);
  };

  const handleTodoRemoval = (id: number) => {
    removeItem(id);
  };

  return (
    <div>
      {todoList.map((todo) => (
        <div
          key={ todo.id }
          className="flex gap-4 items-center my-3"
        >
          <input
            className="w-1/12"
            type="checkbox"
            checked={ todo.done }
            onChange={ () => handleTodoToggle(todo.id) }
          />
          <input
            type="text"
            value={ todo.text }
            className="w-9/12 bg-slate-100 text-xl px-4 py-1 rounded-lg"
            onChange={ (e) => handleTodoUpdate(todo.id, e.target.value) }
          />
          <button
            className="w-2/12 px-4 py-1.5 bg-slate-300 rounded-lg hover:bg-slate-400
            transition"
            onClick={ () => handleTodoRemoval(todo.id) }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
