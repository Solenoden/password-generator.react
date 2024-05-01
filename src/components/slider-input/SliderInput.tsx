import './SliderInput.scss';
import { Slider } from "@mui/material";
import React from "react";

type SliderInputProps = { min: number, max: number, label: string };

function SliderInput(props: SliderInputProps) {
    const [value, setValue] = React.useState(0);

    function handleValueChange(event: Event, newValue: number | number[]): void {
        setValue(newValue as number);
    }

    return (
        <div className="column">
            <div className="row justify-content-between align-items-center">
                <h6 className="body">{ props.label }</h6>
                <span id="character-count" className="heading-large">{value}</span>
            </div>
            <Slider id="internal-slider"
                    value={value}
                    onChange={handleValueChange}
                    min={props.min}
                    max={props.max}
            ></Slider>
        </div>
    );
}

export default SliderInput;
