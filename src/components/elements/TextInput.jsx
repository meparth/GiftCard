import styles from './textInput.module.css'

const TextInput = ({
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    label,
    error
}) => {
    return (
        <div className={`${styles.inputGroup}`}>
            {label && <label className={`${styles.label}`} htmlFor={name}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${styles.input} ${error ? 'input-error' : ''}`}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default TextInput;