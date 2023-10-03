import { createContext, useReducer } from 'react';

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
};

type ActionType = {
  type: string;
  payload: any;
};

export const TodoContext = createContext({} as [ContextType, React.Dispatch<ActionType>]);

const reducer = (state: ContextType, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: addTodo(state.todoList, payload),
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todoList: updateTodo(state.todoList, payload.id, payload.text),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todoList: removeTodo(state.todoList, payload),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todoList: toggleTodo(state.todoList, payload),
      };
    default:
      return state;
  }
};

const initialState = {
  todoList: [],
} as ContextType;

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <TodoContext.Provider value={ useReducer(reducer, initialState) }>
      {children}
    </TodoContext.Provider>
  );
}
