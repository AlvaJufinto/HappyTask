import { FC } from 'react';

import Text from "./../atoms/Text";
import Checkbox from "./..//atoms/Checkbox";
import ButtonIcon from "./../molecules/ButtonIcon"

import { TextType } from "./../atoms/Text";
import { ButtonIconType } from "./../molecules/ButtonIcon";

import TrashIcon from "./../../assets/icon/trash-icon.svg";
import EditIcon from "./../../assets/icon/edit-icon.svg";


const TodoCard: FC   = () => {
    return (
        <div className="flex flex-col bg-white rounded-[10px] p-[35px] gap-[45px] min-w-[365px] min-h-[225px]">
            <div>
                <Text text="SaaS : Membuat Program" textType={TextType.Title} />
                <Text text="Tugas Bapa Danial Ahadian" textType={TextType.Small} />
            </div>
            <div className="flex justify-between">
                <Checkbox />
                <div className="flex gap-[15px]">
                    <ButtonIcon buttonIconSrc={TrashIcon} buttonIconType={ButtonIconType.Custom} />
                    <ButtonIcon buttonIconSrc={EditIcon} buttonIconType={ButtonIconType.Custom} />
                </div>
            </div>
        </div>
    );
}

export default TodoCard;