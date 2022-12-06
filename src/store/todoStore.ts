import { useEffect } from "react";
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
    addTodo: (title: string, description: string) => void;
    removeTodo: (id: string) => void;
    toggleDoneState: (id: string) => void;
}


const getLocalStorage = (key: string) => JSON.parse(window.localStorage.getItem(key) as any)
const setLocalStorage = (key: string, value: Todo[]) => window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create<TodoState>((set) => ({
    // initial state    
    todos: getLocalStorage("collection") || [],
    // methods for manipulating state
    addTodo: (title, description) => {
        set((state) => {
            const todos = [
                ...state.todos,
                {
                    id: uuidv4(),
                    title,
                    description,
                    isDone: false,
                } as Todo,
            ]
            setLocalStorage("collection", todos);
     
            return { 
                todos: todos
            }
        });
    },
    removeTodo: (id) => {
        set((state) => {
            const todos = state.todos.filter((todo) => todo.id !== id);
            setLocalStorage("collection", todos);
    
            return {
                todos: todos
            }
        });
    },
    toggleDoneState: (id) => {
        set((state) => {
            const todos = state.todos.map((todo) =>
                todo.id === id
                    ? ({ ...todo, isDone: !todo.isDone })
                    : todo
            );
            setLocalStorage("collection", todos);

            return {
                todos: todos
            }
        });
    },
}))