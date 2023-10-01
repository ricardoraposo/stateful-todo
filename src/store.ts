import { atom } from 'jotai';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export const addTodo = (todos: Todo[], text: string) => [
  ...todos,
  {
    id: todos.length,
    done: false,
    text,
  },
];

export const removeTodo = (todos: Todo[], id: number) => (
  todos.filter((todo) => todo.id !== id)
);

export const updateTodo = (todos: Todo[], id: number, text: string) => (
  todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
);

export const toggleTodo = (todos: Todo[], id: number) => (
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }))
);

export const todoItemAtom = atom('');
export const todoListAtom = atom<Todo[]>([]);

export const addTodoAtom = atom(() => '', (get, set) => {
  set(todoListAtom, addTodo(get(todoListAtom), get(todoItemAtom)));
  set(todoItemAtom, '');
});

export const updateTodoAtom = atom(
  () => todoListAtom,
  (get, set, { id, text }: Omit<Todo, 'done'>) => {
    set(todoListAtom, updateTodo(get(todoListAtom), id, text));
  },
);

export const toggleTodoAtom = atom(
  () => todoListAtom,
  (get, set, id: number) => {
    set(todoListAtom, toggleTodo(get(todoListAtom), id));
  },
);

export const removeTodoAtom = atom(
  () => todoListAtom,
  (get, set, id: number) => {
    set(todoListAtom, removeTodo(get(todoListAtom), id));
  },
);
