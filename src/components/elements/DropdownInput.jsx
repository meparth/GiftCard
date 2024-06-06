import styles from './dropdownInput.module.css'

const TextInput = ({
    options,
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
            <select
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${styles.input} ${error ? 'input-error' : ''}`}
            >
            {error && <span className="error-message">{error}</span>}
            {options?.map((option, idx) => (
                <option className={`${styles.option}`} key={idx}>
                    {option}
                </option>
            ))}
            </select>
        </div>
    );
};

export default TextInput;