import { useContext, useMemo } from 'react';
import { TodoContext, removeTodo, toggleTodo, updateTodo } from '../store';

function TodoList() {
  const contextValue = useContext(TodoContext);
  const memoValue = useMemo(() => contextValue, [contextValue]);

  const handleTodoToggle = (id: number) => {
    memoValue.setTodoList(toggleTodo(memoValue.todoList, id));
  };

  const handleTodoUpdate = (id: number, value: string) => {
    memoValue.setTodoList(updateTodo(memoValue.todoList, id, value));
  };

  const handleTodoRemoval = (id: number) => {
    memoValue.setTodoList(removeTodo(memoValue.todoList, id));
  };

  return (
    <div>
      {memoValue.todoList.map((todo) => (
        <div
          key={ todo.id }
          className="flex gap-4 items-center my-3"
        >
          <input
            // className="w-1/12"
            type="checkbox"
            checked={ todo.done }
            onChange={ () => handleTodoToggle(todo.id) }
          />
          <input
            type="text"
            value={ todo.text }
            className="w-11/12 bg-slate-100 text-xl px-4 py-1 rounded-lg"
            onChange={ (e) => handleTodoUpdate(todo.id, e.target.value) }
          />
          <button
            className="w-1/12 px-4 py-1.5 bg-slate-300 rounded-lg hover:bg-slate-400
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
