import { useState, FC } from 'react';

interface IState {
    isChecked?: boolean;
}

export enum CheckboxType {
    Title = "Checkbox-title",
    Small = "Checkbox-small",
}

const Checkbox: FC<IState> = ({ isChecked: isCheckedState = false }) => {
    const [isChecked, setIsChecked] = useState(isCheckedState);

    return (
        <div className="CheckboxContainer">
            <input className='CheckboxContainer-checkbox' type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} id="checkbox" />
            <label className='CheckboxContainer-label' htmlFor="checkbox"></label>
        </div>
    );
}

export default Checkbox;