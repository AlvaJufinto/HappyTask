import { FC, useState } from 'react';

import { useStore } from "./../../store/todoStore";

import Text from "./../atoms/Text";
import Button from "../molecules/Button"
import Textbox from '../atoms/Textbox';

import { TextType } from "./../atoms/Text";
import { ButtonType } from "../molecules/Button"; 

const NewTodoTask: FC = () => {
    const { addTodo } = useStore();
    const [isActive, setIsActive] = useState(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const saveHandler = (e: any) => {
        e.preventDefault();
        if(title && description) {
            addTodo(title, description);
            setTitle("");
            setDescription("");   
            setIsActive(false);
        }
    }

    const cancelHandler = (e: any) => {
        e.preventDefault();
        setIsActive(!isActive);
    }

    return (
        <div className="border-[1px] border-black bg-white rounded-[10px] p-[35px] w-[365px] max-w-[95%] min-h-[225px]">
            {
                !isActive && 
                <div className="flex flex-col gap-[20px] h-[100%]  justify-center items-center">
                    <Text text="Make New Task" textType={TextType.Title} />
                    <Button buttonType={ButtonType.Add} onClickFunction={() => setIsActive(!isActive)} />
                </div>
            }
            {
                isActive &&
                <form className="flex flex-col justify-between gap-[20px] h-[100%] ">
                    <div className="flex flex-col gap-[20px]">
                        <Textbox placeholder="Title" value={title} onChangeFunction={(e: any) => setTitle(e.target.value)}  />
                            <Textbox placeholder="Description" applyClass={`text-[14px] ${TextType.Small}`} value={description} onChangeFunction={(e: any) => setDescription(e.target.value)} />
                    </div>
                    <div className="flex sm:flex-col sm:gap-[10px] justify-between">
                        <Button buttonType={ButtonType.OnlyText} text="Save" applyClass="hover:bg-grey-default border-[1px] bg-black hover:text-black text-white sm:w-[100%] sm:h-[50px]" onClickFunction={saveHandler} />
                        <Button buttonType={ButtonType.OnlyText} text="Cancel" applyClass="border-[1px] bg-white sm:w-[100%] sm:h-[50px]" onClickFunction={cancelHandler} />
                    </div>  
                </form>
            }
        </div>
    );
}

export default NewTodoTask;