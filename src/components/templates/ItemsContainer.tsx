import { FC, ReactNode } from 'react';

import Text from '../atoms/Text';
import TodoCard from "../organisms/TodoCard";
import NewTodoTask from '../organisms/NewTodoTask';

import { Todo } from '../../store/todoStore';
import { TextType } from "../atoms/Text";


interface IState {
    title: string;
    children: ReactNode;
}


const TodoContainer: FC<IState> = ({ title, children }) => {

    return (
        <div className='TodoContainer bg-grey-default mb-[50px]'>
            <Text text={title} textType={TextType.Title} /> 
            <div className='flex gap-[40px] flex-wrap'>
                {children}
            </div>
        </div>
    );
}

export default TodoContainer;