import { FC, useState } from 'react';

import Text from "./../atoms/Text";
import Button from "../molecules/Button"
import Textbox from '../atoms/Textbox';

import { TextType } from "./../atoms/Text";
import { ButtonType } from "../molecules/Button"; 

const NewTodoTask: FC = () => {
    const [isActive, setIsActive] = useState(true);
    
    return (
        <div className="border-[1px] border-black bg-white rounded-[10px] p-[35px] w-[365px] max-w-[85%] min-h-[225px]">
            {
                !isActive && 
                <div className="flex flex-col gap-[20px] h-[100%] w-[100%] justify-center items-center">
                    <Text text="Make New Task" textType={TextType.Title} />
                    <Button buttonType={ButtonType.Add} onClickFunction={() => setIsActive(!isActive)} />
                </div>
            }
            {
                isActive &&
                <div className="flex flex-col justify-between gap-[20px] h-[100%] w-[100%]">
                    <div className="flex flex-col gap-[20px]">
                        <Textbox placeholder="Title" />
                        <Textbox placeholder="Description" applyClass={`text-[14px] ${TextType.Small}`} />
                    </div>
                    <div className="flex justify-between">
                        <Button buttonType={ButtonType.OnlyText} text="Save" applyClass="hover:bg-grey-default border-[1px] bg-black hover:text-black text-white" />
                        <Button buttonType={ButtonType.OnlyText} text="Cancel" applyClass="border-[1px] bg-white" onClickFunction={() => setIsActive(!isActive)} />
                    </div>
                </div>
            }
        </div>
    );
}

export default NewTodoTask;