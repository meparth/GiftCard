import styles from './dropdownInput.module.css'
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

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
            <CreatableSelect
                isClearable
                className={`${styles.input}`}
                name={name}
                options={options}
                menuPlacement='auto'
                styles={{
                    control: (baseStyles, state) => ({
                        display: 'flex',
                        border: 'none',
                        boxShadow: 'none',
                    }),
                    valueContainer: (base) => ({
                        ...base,
                        textAlign: 'left',
                    })
                }}
            />

        </div>
    );
};

export default DropdownInput;