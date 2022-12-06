import { useState, FC } from 'react';

interface IState {
    isChecked?: boolean;
    onClickFunction?: () => void;
}

const Checkbox: FC<IState> = ({ isChecked, onClickFunction }) => {

    return (    
        <div className="CheckboxContainer" onClick={onClickFunction}>
            <input className='CheckboxContainer-checkbox' type="checkbox" checked={isChecked} id="checkbox" disabled />
            <label className='CheckboxContainer-label' htmlFor="checkbox"></label>
        </div>
    );
}

export default Checkbox;