import { createContext, useState } from 'react';

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

type ContextType = {
  todoList: Todo[];
  addItem: (text: string) => void;
  toggleItem: (id: number) => void;
  updateItem: (id: number, text: string) => void;
  removeItem: (id: number) => void;
};

export const TodoContext = createContext({} as ContextType);

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addItem = (text: string) => setTodoList(addTodo(todoList, text));

  const toggleItem = (id: number) => setTodoList(toggleTodo(todoList, id));

  const updateItem = (id: number, text: string) => setTodoList(updateTodo(todoList, id, text));

  const removeItem = (id: number) => setTodoList(removeTodo(todoList, id));

  return (
    <TodoContext.Provider value={ { todoList, addItem, toggleItem, updateItem, removeItem } }>
      {children}
    </TodoContext.Provider>
  );
}
