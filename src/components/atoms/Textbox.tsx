import { FC } from 'react';

interface IState {
    value: string;
    placeholder: string;
    required?: boolean;
    applyClass?: string;
    onChangeFunction: (e: any) => void;
}

export enum TextType {
    Title = "Text-title",
    Small = "Text-small",
}

const Textbox: FC<IState> = ({ applyClass, value, placeholder, required, onChangeFunction }) => {
    
    return (
        <input className={`textbox border-b-[1px] outline-none text-[22px] ${applyClass}`} value={value} onChange={onChangeFunction} placeholder={placeholder} type="text" required={required}/>
    );
}

export default Textbox;