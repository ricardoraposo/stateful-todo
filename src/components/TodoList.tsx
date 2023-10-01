import { useAtom } from 'jotai';
import { removeTodoAtom, todoListAtom, toggleTodoAtom, updateTodoAtom } from '../store';

function TodoList() {
  const [todoList] = useAtom(todoListAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);
  const [, removeTodo] = useAtom(removeTodoAtom);

  return (
    <div>
      {todoList.map((todo) => (
        <div
          key={ todo.id }
          className="flex gap-4 items-center my-3"
        >
          <input
            type="checkbox"
            checked={ todo.done }
            onChange={ () => toggleTodo(todo.id) }
          />
          <input
            type="text"
            value={ todo.text }
            className="w-full bg-slate-100 text-xl px-4 py-1 rounded-lg"
            onChange={ (e) => updateTodo({ id: todo.id, text: e.target.value }) }
          />
          <button
            className="w-1/12 px-4 py-1.5 bg-slate-300 rounded-lg hover:bg-slate-400
            transition"
            onClick={ () => removeTodo(todo.id) }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
