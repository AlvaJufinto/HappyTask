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

export const useStore = create<TodoState>((set) => ({
    // initial state
    todos: [
        {
            id: '1',
            title: 'SaaS : Membuat Program',
            description: "Tugasnya pak danial",
            isDone: false,
        },
        {
            id: '2',
            title: 'IaaS : Membuat Modul',
            description: "Tugasnya bu kuri ternyata",
            isDone: false,
        },
        {
            id: '3',
            title: 'MTK : Belajar PAS',
            description: "Pak Dadang marah gara2 jerman kalah",
            isDone: false,
        },
        {
            id: '4',
            title: 'LKS Bhs Indo',
            description: "Selamat pagi, semangat pagi",
            isDone: false,
        }
    ],
    // methods for manipulating state
    addTodo: (title, description) => {
        set((state) => ({
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
    removeTodo: (id) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        }));
    },
    toggleDoneState: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id
                ? ({ ...todo, isDone: !todo.isDone })
                : todo
            ),
        }));
    },
}))