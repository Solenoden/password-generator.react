import './CheckboxInput.scss';
import React from "react";
import checkIcon from '../../assets/images/icon-check.svg';

type CheckboxInputProps = { label: string };

function CheckboxInput(props: CheckboxInputProps) {
    const [value, setValue] = React.useState<boolean>(false);

    function toggleCheckbox(): void {
        setValue(!value);
    }

    return (
        <div className={value ? 'checked row' : 'unchecked row'}>
            <div id="internal-checkbox" onClick={toggleCheckbox}>{ value ? <img id="check-icon" src={checkIcon} alt="checked"/> : null}</div>
            <h6 className="body">{props.label}</h6>
        </div>
    );
}

export default CheckboxInput;
