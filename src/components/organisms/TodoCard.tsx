import { FC, useState } from 'react';

import { useStore } from '../../store/todoStore';

import Text from "./../atoms/Text";
import Checkbox from "./../atoms/Checkbox";
import Button from "../molecules/Button"

import { TextType } from "./../atoms/Text";
import { ButtonType } from "../molecules/Button";

import TrashIcon from "./../../assets/icon/trash-icon.svg";
import EditIcon from "./../../assets/icon/edit-icon.svg";

export interface IState {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
}

const TodoCard: FC<IState> = ({ id, title, description, isDone }) => {
    const [isFaded, setIsFaded] = useState(false);
    const { removeTodo, toggleDoneState } = useStore();

    const removeHandler = () => {
        setIsFaded(true); 
        setTimeout(() => {
            removeTodo(id);
            setIsFaded(false);
        }, 300)
    }

    const checkboxHandler = () => {
        toggleDoneState(id);
    }
    
    return (
        <div className={`flex flex-col bg-white rounded-[10px] p-[35px] gap-[45px] w-[365px] max-w-[85%] min-h-[225px] transition ease-in-out  duration-300 ${isFaded ? 'opacity-0 translate-y-[30px]' : ''}`}>
            <div>
                <Text text={title} textType={TextType.Title} />
                <Text text={description} textType={TextType.Small} />
            </div>
            <div className="flex justify-between">
                <Checkbox 
                    id={id}
                    isChecked={isDone} 
                    onClickFunction={checkboxHandler} /> 
                <div className="flex gap-[15px]">
                    <Button 
                        buttonSrc={TrashIcon} 
                        buttonType={ButtonType.Custom} onClickFunction={removeHandler} />
                    <Button 
                        buttonSrc={EditIcon} 
                        buttonType={ButtonType.Custom} />
                </div>
            </div>
        </div>
    );
}

export default TodoCard;