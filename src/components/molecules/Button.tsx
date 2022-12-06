import { FC } from 'react';
import Image from '../atoms/Image';

import AddIcon from "./../../assets/icon/plus-icon.svg"

interface IState {
    buttonType?: ButtonType,
    buttonSrc?: string | any;
    text?: string;
    applyClass?: string;
    onClickFunction?: () => void,
}

export enum ButtonType {
    Add = "add",
    Custom = "custom",
    OnlyText= 'onlyText',
}

const Button: FC<IState> = ({ buttonSrc, buttonType = ButtonType.Add, text, applyClass, onClickFunction }) => {
    switch(buttonType) {
        case 'add':
            return (
                <button onClick={onClickFunction} className='bg-white grid place-content-center hover:opacity-50 rounded-[10px] text-black h-[44px] w-[44px] focus:ring'>
                    <Image imageSrc={AddIcon} imageWidth="42px" />
                </button>
            )
        case 'custom':
            return (
                <button onClick={onClickFunction} className='bg-white grid place-content-center hover:bg-grey-default text-black h-[44px] w-[44px] rounded-full focus:ring'>
                    <Image imageSrc={buttonSrc}  />
                </button>
            );
        default:
            return (
                <button className={`bg-white grid place-content-center h-[40px] w-[140px] rounded-full focus:ring ${applyClass}`} onClick={onClickFunction}>
                    {text}
                </button>
            )
    }

}

export default Button;