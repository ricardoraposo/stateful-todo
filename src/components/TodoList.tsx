import { useTodoStore } from '../store';

function TodoList() {
  const todoList = useTodoStore((state) => state.todoList);
  const handleTodoToggle = useTodoStore((state) => state.toggleTodo);
  const handleTodoUpdate = useTodoStore((state) => state.updateTodo);
  const handleTodoRemoval = useTodoStore((state) => state.removeTodo);

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
