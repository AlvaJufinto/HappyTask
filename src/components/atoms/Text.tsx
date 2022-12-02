import { FC } from 'react';

interface IState {
    text: string,
    textType: string,
}

export enum TextType {
    Title = "Text-title",
    Small = "Text-small",
}

const Text: FC<IState> = ({ text, textType }) => {
    return (
        <div className={textType}>
            {text}
        </div>
    );
}

export default Text;