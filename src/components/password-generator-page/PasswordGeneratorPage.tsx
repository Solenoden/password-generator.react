import './PasswordGeneratorPage.scss';
import copyIcon from '../../assets/images/icon-copy.svg';
import SliderInput from "../slider-input/SliderInput";
import CheckboxInput from "../checkbox-input/CheckboxInput";
import PasswordStrengthIndicator from "../password-strength-indicator/PasswordStrengthIndicator";
import { PasswordStrength } from "../../enums/password-strength.enum";

function PasswordGeneratorPage() {
    return (
        <div id="page-container">
            <div id="content-container">
                <h6 id="title" className="heading-medium">Password Generator</h6>

                <div id="password-card" className="card">
                    <div className="row justify-content-between align-items-center">
                        <h6 className="heading-large">PTx1f5DaFX</h6>
                        <img src={copyIcon} alt="Copy to Clipboard"/>
                    </div>
                </div>

                <div id="generate-password-card" className="card">
                    <div id="inputs">
                        <div className="input-container">
                            <SliderInput label="Character Length" min={4} max={16}></SliderInput>
                        </div>
                        <div className="input-container">
                            <CheckboxInput label="Include Uppercase Letters"></CheckboxInput>
                        </div>
                        <div className="input-container">
                            <CheckboxInput label="Include Lowercase Letters"></CheckboxInput>
                        </div>
                        <div className="input-container">
                            <CheckboxInput label="Include Numbers"></CheckboxInput>
                        </div>
                        <div className="input-container">
                            <CheckboxInput label="Include Symbols"></CheckboxInput>
                        </div>
                    </div>
                    <div className="card card-dark">
                        {/* TODO: Pass strength estimation through */}
                        <PasswordStrengthIndicator strength={PasswordStrength.Strong}></PasswordStrengthIndicator>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordGeneratorPage;
