import create from "zustand";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
    id: number;
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

export const useStore = create<TodoState>(set => ({
    todos: [
        {
            id: 32134,
            title: 'SaaS : Membuat Program',
            description: "Tugasnya pak danial",
            isDone: false,
        },
        {
            id: 21234,
            title: 'IaaS : Membuat Modul',
            description: "Tugasnya bu kuri ternyata",
            isDone: false,
        },
        {
            id: 54622,
            title: 'MTK : Belajar PAS',
            description: "Pak Dadang marah",
            isDone: false,
        }
    ],
    addTodo: () => {

    },
    removeTodo: () => {
        
    },
    toggleDoneState: () => {
        
    }
}))