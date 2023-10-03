import { useAtom } from 'jotai';
import { addTodoAtom, todoItemAtom } from '../store';

function TodoAdd() {
  const [todoText, setTodoText] = useAtom(todoItemAtom);
  const [, setTodoList] = useAtom(addTodoAtom);

  return (
    <div className="w-full my-3">
      <div className="flex gap-4">
        <input
          id="text-input"
          type="text"
          value={ todoText }
          onChange={ (e) => setTodoText(e.target.value) }
          className="w-5/6 bg-slate-100 text-xl px-4 py-1 rounded-lg"
        />
        <button
          onClick={ setTodoList }
          className="w-1/6 px-4 bg-slate-300 rounded-lg hover:bg-slate-400"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default TodoAdd;
