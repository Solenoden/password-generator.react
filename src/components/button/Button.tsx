import nextArrowIcon from "../../assets/images/icon-arrow-right.svg";
import "./Button.scss";

type ButtonProps = { children: any, onClick: () => void, isDisabled?: boolean, shouldAppendArrow?: boolean }

function Button(props: ButtonProps) {
    return (
        <button id="button-component"
                className="row justify-content-center align-items-center"
                onClick={props.onClick}
                disabled={props.isDisabled}>
            <h6 className="body">{ props.children }</h6>
            { props.shouldAppendArrow ?
                <img src={nextArrowIcon} alt="next arrow"/> :
                null
            }
        </button>
    )
}

export default Button;
