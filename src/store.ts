import { create } from 'zustand';

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

type StoreType = {
  todoList: Todo[];
  todoText: string;
  setTodoText: (value: string) => void;
  addTodo: () => void;
  updateTodo: (id: number, text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export const useTodoStore = create<StoreType>((set) => ({
  todoList: [],
  todoText: '',
  setTodoText: (value: string) => set(() => ({ todoText: value })),
  addTodo: () => set((s) => ({
    todoList: addTodo(s.todoList, s.todoText), todoText: '',
  })),
  updateTodo: (id: number, text: string) => set((s) => ({
    todoList: updateTodo(s.todoList, id, text),
  })),
  removeTodo: (id: number) => set((s) => ({ todoList: removeTodo(s.todoList, id) })),
  toggleTodo: (id: number) => set((s) => ({ todoList: toggleTodo(s.todoList, id) })),
}));
