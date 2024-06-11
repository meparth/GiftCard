import styles from './dropdownInput.module.css'
import Select from "react-select";

const DropdownInput = ({
                       name,
                       options,
                       selectedOption,
                       value,
                       onChange,
                       placeholder,
                       label,
                       error
                   }) => {

    return (
        <div className={`${styles.inputGroup}`}>
            {label && <label className={`${styles.label}`} htmlFor={name}>{label}</label>}
            <Select
                className={`${styles.input}`}
                name={name}
                value={selectedOption}
                onChange={onChange}
                options={options}
                menuPlacement='auto'
                styles={{
                    control: (baseStyles, state) => ({
                        display: 'flex',
                        border: 'none',
                        boxShadow: 'none',
                    }),
                }}
            />
            {/*<select
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
            </select>*/}
        </div>
    );
};

export default DropdownInput;