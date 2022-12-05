import { FC } from 'react';
import Image from '../atoms/Image';

import AddIcon from "./../../assets/icon/plus-icon.svg"

interface IState {
    buttonIconType?: ButtonIconType,
    buttonIconSrc?: string | any;
    onClickFunction?: () => void,
}

export enum ButtonIconType {
    Add = "add",
    Custom = "custom",
}

const ButtonIcon: FC<IState> = ({ buttonIconSrc, buttonIconType = ButtonIconType.Add, onClickFunction }) => {
    switch(buttonIconType) {
        case 'add':
            return (
                <button onClick={onClickFunction} className='bg-white grid place-content-center hover:opacity-50 rounded-[10px] text-black h-[44px] w-[44px] focus:ring'>
                    <Image imageSrc={AddIcon} imageWidth="42px" />
                </button>
            )
        case 'custom':
            return (
                <button onClick={onClickFunction} className='bg-white grid place-content-center hover:bg-grey-default text-black h-[44px] w-[44px] rounded-full focus:ring'>
                    <Image imageSrc={buttonIconSrc}  />
                </button>
            );
        default:
            return (
                <>Masukkin type coy</>
            )
    }

}

export default ButtonIcon;