import { FC } from 'react';

interface IState {
    placeholder: string;
    required?: boolean;
    applyClass?: string;
}

export enum TextType {
    Title = "Text-title",
    Small = "Text-small",
}

const Textbox: FC<IState> = ({ applyClass, placeholder, required }) => {
    
    return (
        <input className={`textbox border-b-[1px] outline-none text-[22px] ${applyClass}`} placeholder={placeholder} type="text" required={required}/>
    );
}

export default Textbox;