import { FC, useState } from 'react';

import { useStore } from '../../store/todoStore';

import Text from "./../atoms/Text";
import Checkbox from "./../atoms/Checkbox";
import Button from "../molecules/Button"
import Textbox from '../atoms/Textbox';

import { TextType } from "./../atoms/Text";
import { ButtonType } from "../molecules/Button";

import TrashIcon from "./../../assets/icon/trash-icon.svg";
import EditIcon from "./../../assets/icon/edit-icon.svg";

export interface IState {
    id: string;
    title: string;
    description: string;
    isDone: boolean;
}

const TodoCard: FC<IState> = ({ id, title, description, isDone }) => {
    const [titleState, setTitleState] = useState(title);
    const [descriptionState, setDescriptionState] = useState(description);
    const [isEdit, setIsEdit] = useState(false);
    const [isFaded, setIsFaded] = useState(false);
    const { editTodo, removeTodo, toggleDoneState } = useStore();

    const removeHandler = () => {
        setIsFaded(true); 
        setTimeout(() => {
            removeTodo(id);
            setIsFaded(false);
        }, 300)
    }

    const checkboxHandler = () => {
        setIsFaded(true);
        setTimeout(() => {
            toggleDoneState(id);
            setIsFaded(false);
        }, 300);
    }

    const editHandler = (e: any) => {
        e.preventDefault();
        editTodo(id, titleState, descriptionState);
        setIsEdit(false);
    }

    const cancelHandler = () => {
        setIsEdit(false);
    }
    
    return (
        <div className={` bg-white rounded-[10px] p-[35px] gap-[45px] w-[365px] max-w-[95%] min-h-[225px] transition ease-in-out  duration-300 ${isFaded ? 'opacity-0 translate-y-[30px]' : ''}`}>
            {
                !isEdit &&
                <div className="h-[100%] w-[100%] flex flex-col justify-between ${}">
                    <div>
                        <Text text={title} textType={TextType.Title} />
                        <Text text={description} textType={TextType.Small} />
                    </div>
                    <div className="flex justify-between">
                        <Checkbox 
                            isChecked={isDone} 
                            onClickFunction={checkboxHandler} /> 
                        <div className="flex gap-[15px]">
                            <Button 
                                buttonSrc={TrashIcon} 
                                buttonType={ButtonType.Custom} 
                                onClickFunction={removeHandler} />
                            <Button 
                                buttonSrc={EditIcon} 
                                buttonType={ButtonType.Custom}
                                onClickFunction={() => setIsEdit(!isEdit)} />
                        </div>
                    </div>
                </div>
            }
            {
                isEdit &&
                <form className="flex flex-col justify-between gap-[20px] h-[100%] ">
                    <div className="flex flex-col gap-[20px]">
                        <Textbox placeholder="Title" value={titleState} onChangeFunction={(e: any) => setTitleState(e.target.value)} />
                        <Textbox placeholder="Description" applyClass={`text-[14px] ${TextType.Small}`} value={descriptionState} onChangeFunction={(e: any) => setDescriptionState(e.target.value)} />
                    </div>
                    <div className="flex sm:flex-col sm:gap-[10px] justify-between">
                        <Button buttonType={ButtonType.OnlyText} text="Save" applyClass="hover:bg-grey-default border-[1px] bg-black hover:text-black text-white sm:w-[100%] sm:h-[50px]" onClickFunction={editHandler} />
                        <Button buttonType={ButtonType.OnlyText} text="Cancel" applyClass="border-[1px] bg-white sm:w-[100%] sm:h-[50px]" onClickFunction={cancelHandler} />
                    </div>
                </form>
            }
        </div>
    );
}

export default TodoCard;