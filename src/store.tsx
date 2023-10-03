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
  setTodoList: (list: Todo[]) => void;
};

export const TodoContext = createContext({} as ContextType);

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={ { todoList, setTodoList } }>
      {children}
    </TodoContext.Provider>
  );
}
