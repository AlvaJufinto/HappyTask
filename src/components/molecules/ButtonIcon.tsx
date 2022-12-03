import { FC } from 'react';
import Image from '../atoms/Image';

interface IState {
    buttonIconSrc: string;
    buttonIcon?: string,
}

export enum ButtonIconType {
    Add = "add",
    Custom = "custom",
}

const ButtonIcon: FC<IState> = ({ buttonIconSrc, buttonIcon = ButtonIconType.Add }) => {

    return (
        <button className='bg-blue-500 focus:bg-blue-700 text-black font-bold py-2 px-4 rounded border-1 focus:ring'>
            adssdadsasd
            {/* <Image imageSrc={buttonIconSrc}  /> */}
        </button>
    );
}

export default ButtonIcon;