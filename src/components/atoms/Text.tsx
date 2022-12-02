import { FC } from 'react';

interface IState {
    text: string,
    textType: string,
}

export enum TextType {
    Title = "title",
    Small = "small",
}


const Text: FC<IState> = ({ text, textType }) => {
    return (
        <div className={`Text-${textType}`}>
            {text}
        </div>
    );
}

export default Text;