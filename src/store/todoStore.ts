import create from "zustand";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
    id: string;
    title: string;
    description: string;
    isDone: boolean;
}

interface TodoState {
    todos: Todo[];
    addTodo: (description: string) => void;
    removeTodo: (id: string) => void;
    toggleDoneState: (id: string) => void;
}

export const useStore = create<TodoState>((set: any) => ({
    // initial state
    todos: [],
    // methods for manipulating state
    addTodo: (title: string, description: string) => {
        set((state: any) => ({
            todos: [
                ...state.todos,
                {
                    id: uuidv4(),
                    title,
                    description,
                    isDone: false,
                } as Todo,
            ],
        }));
    },
    removeTodo: (id: number) => {
        set((state: any) => ({
            todos: state.todos.filter((todo: any) => todo.id !== id),
        }));
    },
    toggleDoneState: (id: number) => {
        set((state: any) => ({
            todos: state.todos.map((todo: any) =>
                todo.id === id
                    ? ({ ...todo, completed: !todo.completed } as Todo)
                    : todo
            ),
        }));
    },
}));