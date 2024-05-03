import "./Button.scss";
import SvgIcon from "../svg-icon/SvgIcon";
import React from "react";

type ButtonProps = { children: any, onClick: () => void, isDisabled?: boolean, shouldAppendArrow?: boolean }

function Button(props: ButtonProps) {
    return (
        <button id="button-component"
                className="row justify-content-center align-items-center"
                onClick={props.onClick}
                disabled={props.isDisabled}>
            <h6 className="body">{ props.children }</h6>
            { props.shouldAppendArrow ?
                <div className="next-arrow">
                    <SvgIcon
                        isClickable={false}
                        viewboxWidth="12"
                        viewboxHeight="12"
                        svgInnerId="root"
                        iconPath="/images/icon-arrow-right.svg"
                    />
                </div> :
                null
            }
        </button>
    )
}

export default Button;
