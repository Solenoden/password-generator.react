import passwordGenerator from 'generate-password-browser';
import passwordStrengthAssessor from 'zxcvbn';
import {PasswordGenerationOptions} from "../interfaces/password-generation-options.interface";
import {PasswordStrength} from "../enums/password-strength.enum";

let _instance: PasswordService;

export const PASSWORD_STRENGTHS_RANKED = [
    PasswordStrength.Weakest,
    PasswordStrength.Weak,
    PasswordStrength.Medium,
    PasswordStrength.Strong,
];

export class PasswordService {
    static getInstance(): PasswordService {
        if (!_instance) _instance = new PasswordService();
        return _instance;
    }

    public generatePassword(options: PasswordGenerationOptions): string {
        const newPassword = passwordGenerator.generate({
            length: options.length,
            uppercase: options.shouldIncludeUppercase || false,
            lowercase: options.shouldIncludeLowercase || false,
            numbers: options.shouldIncludeNumbers || false,
            symbols: options.shouldIncludeSymbols || false
        });

        return newPassword;
    }

    public assessPasswordStrength(password: string): PasswordStrength {
        const assessment = passwordStrengthAssessor(password);
        const strengthPercentage = (assessment.score + 1) / 5 * 100;
        const strengthIndex = Math.floor((strengthPercentage / 100) * (PASSWORD_STRENGTHS_RANKED.length - 1));
        return PASSWORD_STRENGTHS_RANKED[strengthIndex];
    }
}
