import { FC, ReactNode } from 'react';

import Text from '../atoms/Text';
import TodoCard from "../organisms/TodoCard";
import NewTodoTask from '../organisms/NewTodoTask';

import { TextType } from "../atoms/Text";

interface IState {
    title?: string;
}

const tasks = [
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
]

const TodoContainer: FC<IState> = () => {
    return (
        <div className='TodoContainer bg-grey-default mb-[10px]'>
            <Text text="To Do" textType={TextType.Title} /> 
            <div className='flex gap-[40px] flex-wrap'>
                {
                    tasks.map((task, i) => (
                        <TodoCard id={task.id} title={task.title} description={task.description} isDone={task.isDone} key={`${i}-${task.title}`} />
                    ))
                }
                <NewTodoTask />
                {/* <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard /> */}

            </div>
        </div>
    );
}

export default TodoContainer;