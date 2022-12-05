import { FC } from 'react';

import { useStore } from '../../store/todoStore';

import Text from "./../atoms/Text";
import Checkbox from "./../atoms/Checkbox";
import ButtonIcon from "./../molecules/ButtonIcon"

import { TextType } from "./../atoms/Text";
import { ButtonIconType } from "./../molecules/ButtonIcon";

import TrashIcon from "./../../assets/icon/trash-icon.svg";
import EditIcon from "./../../assets/icon/edit-icon.svg";

export interface IState {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
}

const TodoCard: FC<IState> = ({ id, title, description, isDone }) => {
    const { todos, removeTodo, toggleDoneState } = useStore();

    const removeHandler = () => {
        removeTodo(id);
        console.log('delete', id);
    }

    const checkboxHandler = () => {
        toggleDoneState(id);
        console.log(id);
    }
    
    return (
        <div className="flex flex-col bg-white rounded-[10px] p-[35px] gap-[45px] min-w-[365px] min-h-[225px]">
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
                    <ButtonIcon 
                        buttonIconSrc={TrashIcon} 
                        buttonIconType={ButtonIconType.Custom} onClickFunction={removeHandler} />
                    <ButtonIcon 
                        buttonIconSrc={EditIcon} 
                        buttonIconType={ButtonIconType.Custom} />
                </div>
            </div>
        </div>
    );
}

export default TodoCard;