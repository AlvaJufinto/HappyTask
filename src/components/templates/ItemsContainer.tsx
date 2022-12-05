import { FC } from 'react';

import { useStore } from '../../store/todoStore';

import Text from '../atoms/Text';
import TodoCard from "../organisms/TodoCard";
import NewTodoTask from '../organisms/NewTodoTask';

import { TextType } from "../atoms/Text";

interface IState {
    title?: string;
}


const TodoContainer: FC<IState> = () => {
    const { removeTodo, todos } = useStore();

    return (
        <div className='TodoContainer bg-grey-default mb-[10px]'>
            <Text text="To Do" textType={TextType.Title} /> 
            <div className='flex gap-[40px] flex-wrap'>
                {
                    todos.map((task, i) => (
                        <div>
                        <TodoCard id={task.id} title={task.title} description={task.description} isDone={task.isDone} key={`${i}-${task.title}`} />
                        </div>
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