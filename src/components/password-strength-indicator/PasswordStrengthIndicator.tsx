import "./PasswordStrengthIndicator.scss"
import { PasswordStrength } from "../../enums/password-strength.enum";
import { ReactElement } from "react";

type PasswordStrengthIndicatorProps = { strength: PasswordStrength | null };

function PasswordStrengthIndicator(props: PasswordStrengthIndicatorProps) {
    const TOTAL_STRENGTH_LINES = 4;
    const STRENGTH_TO_LINE_COUNT_MAP: { [key in PasswordStrength]: number } = {
        [PasswordStrength.Weakest]: 1,
        [PasswordStrength.Weak]: 2,
        [PasswordStrength.Medium]: 3,
        [PasswordStrength.Strong]: 4,
    };
    const STRENGTH_TO_TITLE_MAP: { [key in PasswordStrength]: string } = {
        [PasswordStrength.Weakest]: 'TOO WEAK!',
        [PasswordStrength.Weak]: 'WEAK',
        [PasswordStrength.Medium]: 'MEDIUM',
        [PasswordStrength.Strong]: 'STRONG',
    }

    function buildStrengthLines(): ReactElement[] {
        const lines = [];
        for (let strengthLineNumber = 1; strengthLineNumber < TOTAL_STRENGTH_LINES + 1; strengthLineNumber++) {
            const isActive = props.strength && strengthLineNumber <= STRENGTH_TO_LINE_COUNT_MAP[props.strength];
            lines.push(
                <div className={ "strength-block " + (isActive ? "active" : "") }
                     key={ "strength-block-" + strengthLineNumber }
                ></div>
            );
        }
        return lines;
    }

    return (
        <div id="strength-indicator" className={ "row justify-content-between " + props.strength }>
            <h6 className="body">STRENGTH</h6>
            <div className="row">
                { props.strength ?
                    <h6 className="strength-title heading-medium">{ STRENGTH_TO_TITLE_MAP[props.strength]}</h6> : null }
                <div id="strength-lines-container" className="row">
                    { buildStrengthLines() }
                </div>
            </div>
        </div>
    );
}

export default PasswordStrengthIndicator;
