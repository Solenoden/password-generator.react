import './PasswordGeneratorPage.scss';
import copyIcon from '../../assets/images/icon-copy.svg';
import SliderInput from "../slider-input/SliderInput";
import CheckboxInput from "../checkbox-input/CheckboxInput";
import PasswordStrengthIndicator from "../password-strength-indicator/PasswordStrengthIndicator";
import { PasswordStrength } from "../../enums/password-strength.enum";
import { PasswordService } from "../../services/password.service";
import React from "react";
import Button from "../button/Button";
import SvgIcon from "../svg-icon/SvgIcon";

const PASSWORD_PLACEHOLDER = 'P4$5W0rD!';

function PasswordGeneratorPage() {
    const passwordService = PasswordService.getInstance();

    const [password, setPassword] = React.useState<string>('');
    const [passwordStrength, setPasswordStrength] = React.useState<PasswordStrength | null>(null);

    const [length, setLength] = React.useState<number>(4);
    const [shouldIncludeUppercase, setShouldIncludeUppercase] = React.useState<boolean>(false);
    const [shouldIncludeLowercase, setShouldIncludeLowercase] = React.useState<boolean>(false);
    const [shouldIncludeSymbols, setShouldIncludeSymbols] = React.useState<boolean>(false);
    const [shouldIncludeNumbers, setShouldIncludeNumbers] = React.useState<boolean>(false);

    function generatePassword() {
        const newPassword = passwordService.generatePassword({
            length,
            shouldIncludeLowercase,
            shouldIncludeNumbers,
            shouldIncludeUppercase,
            shouldIncludeSymbols
        });
        setPassword(newPassword);

        const assessedStrength = passwordService.assessPasswordStrength(newPassword);
        setPasswordStrength(assessedStrength);
    }

    function determineCanGeneratePassword(): boolean {
        return length > 2 && [
            shouldIncludeLowercase, shouldIncludeUppercase, shouldIncludeNumbers, shouldIncludeSymbols
        ].includes(true);
    }

    function copyPasswordToClipboard(): void {
        navigator.clipboard.writeText(password).then(() => alert('Password Copied to Clipboard'));
    }

    return (
        <div id="page-container">
            <div id="content-container">
                <div id="floating-title-container">
                    <h6 id="title" className="heading-medium">Password Generator</h6>
                </div>

                <div id="password-card" className="card">
                    <div className="row justify-content-between align-items-center">
                        { password ?
                            <h6 className="heading-large">{ password }</h6> :
                            <h6 className="heading-large placeholder">{ PASSWORD_PLACEHOLDER }</h6>
                        }
                        <div id="copy-icon" onClick={copyPasswordToClipboard}>
                            <SvgIcon
                                isClickable={true}
                                viewboxWidth="21"
                                viewboxHeight="24"
                                svgInnerId="root"
                                iconPath="/images/icon-copy.svg"
                            />
                        </div>

                    </div>
                </div>

                <div id="generate-password-card" className="card">
                    <div id="inputs">
                        <div className="input-container">
                            <SliderInput label="Character Length" min={0} max={16} onChange={setLength}></SliderInput>
                        </div>
                        <div className="input-container">
                            <CheckboxInput label="Include Uppercase Letters" onChange={setShouldIncludeUppercase}></CheckboxInput>
                        </div>
                        <div className="input-container">
                            <CheckboxInput label="Include Lowercase Letters" onChange={setShouldIncludeLowercase}></CheckboxInput>
                        </div>
                        <div className="input-container">
                            <CheckboxInput label="Include Numbers" onChange={setShouldIncludeNumbers}></CheckboxInput>
                        </div>
                        <div className="input-container">
                            <CheckboxInput label="Include Symbols" onChange={setShouldIncludeSymbols}></CheckboxInput>
                        </div>
                    </div>
                    <div className="card card-dark">
                        <PasswordStrengthIndicator strength={passwordStrength}></PasswordStrengthIndicator>
                    </div>

                    <Button onClick={generatePassword} isDisabled={!determineCanGeneratePassword()} shouldAppendArrow={true}>GENERATE</Button>
                </div>
            </div>
        </div>
    );
}

export default PasswordGeneratorPage;
