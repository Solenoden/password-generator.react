import './CheckboxInput.scss';
import React, { useEffect } from "react";
import checkIcon from '../../assets/images/icon-check.svg';

type CheckboxInputProps = { label: string, onChange: (value: boolean) => void };

function CheckboxInput(props: CheckboxInputProps) {
    const [value, setValue] = React.useState<boolean>(false);

    useEffect(() => {
        props.onChange(value);
    }, [value, props.onChange]);

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
