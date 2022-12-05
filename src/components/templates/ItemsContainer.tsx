import { FC, ReactNode } from 'react';

import Text from '../atoms/Text';
import TodoCard from "../organisms/TodoCard";
import NewTodoTask from '../organisms/NewTodoTask';

import { TextType } from "../atoms/Text";

interface IState {
    title?: string;
}

const TodoContainer: FC<IState> = () => {
    return (
        <div className='TodoContainer bg-grey-default mb-[10px]'>
            <Text text="To Do" textType={TextType.Title} /> 
            <div className='flex gap-[40px] flex-wrap'>
                <TodoCard />
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