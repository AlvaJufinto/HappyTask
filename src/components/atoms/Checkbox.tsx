import { useState, FC } from 'react';

interface IState {
    id?: number;
    isChecked?: boolean;
    onClickFunction?: () => void;
}

const Checkbox: FC<IState> = ({ id, isChecked: isCheckedState = false, onClickFunction }) => {
    const [isChecked, setIsChecked] = useState(isCheckedState);

    const checkboxOnCheck = () => {
        console.log(id)
    }

    return (    
        <div className="CheckboxContainer" onClick={onClickFunction}>
            <input className='CheckboxContainer-checkbox' type="checkbox" onChange={checkboxOnCheck} checked={isCheckedState} id="checkbox" />
            <label className='CheckboxContainer-label' htmlFor="checkbox"></label>
        </div>
    );
}

export default Checkbox;