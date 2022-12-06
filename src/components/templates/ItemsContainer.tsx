import { FC, ReactNode } from 'react';

import Text from '../atoms/Text';
import { TextType } from "../atoms/Text";


interface IState {
    title: string;
    children: ReactNode;
}


const TodoContainer: FC<IState> = ({ title, children }) => {
    return (
        <div className='TodoContainer min-h-[300px] bg-grey-default mb-[50px]'>
            <Text text={title} textType={TextType.Title} /> 
            <div className='flex gap-[40px] flex-wrap'>
                {children}
            </div>
        </div>
    );
}

export default TodoContainer;