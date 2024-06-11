"use client"
import styles from './textInput.module.css'
import {Controller} from "react-hook-form";

const TextInput = ({
    type = 'text',
    name,
    control,
    value,
    placeholder,
    label,
    error
}) => {
    return (
        <div className={`${styles.inputGroup}`}>
            {label && <label className={`${styles.label}`} htmlFor={name}>{label}</label>}
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <input
                        {...field}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        className={`${styles.input} ${error ? 'input-error' : ''}`}
                    />
                )}
            >
            </Controller>
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default TextInput;