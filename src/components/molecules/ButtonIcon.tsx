import { FC } from 'react';
import Image from '../atoms/Image';

interface IState {
    buttonIconSrc: string;
    buttonIcon?: string,
    onClickFunction?: () => void,
}

export enum ButtonIconType {
    Add = "add",
    Custom = "custom",
}

const ButtonIcon: FC<IState> = ({ buttonIconSrc, buttonIcon = ButtonIconType.Add, onClickFunction }) => {

    return (
        <button onClick={onClickFunction} className='bg-white grid place-content-center hover:bg-grey-default text-black h-[44px] w-[44px] rounded-full focus:ring'>
            <Image imageSrc={buttonIconSrc}  />
        </button>
    );
}

export default ButtonIcon;