import { FC } from 'react';

import Text from "./../atoms/Text";
import Checkbox from "./..//atoms/Checkbox";
import ButtonIcon from "./../molecules/ButtonIcon"

import { TextType } from "./../atoms/Text";
import { ButtonIconType } from "./../molecules/ButtonIcon";

import TrashIcon from "./../../assets/icon/trash-icon.svg";
import EditIcon from "./../../assets/icon/edit-icon.svg";

const NewTodoTask: FC = () => {
    return (
        <div className="grid border-[1px]  border-black bg-white rounded-[10px] p-[35px] gap-[45px] w-[365px] max-w-[85%] min-h-[225px]">
            <div className="flex flex-col gap-[20px] justify-center items-center">
                <Text text="Make New Task" textType={TextType.Title} />
                <ButtonIcon buttonIconType={ButtonIconType.Add} />
            </div>
        </div>
    );
}

export default NewTodoTask;