import styles from './dropdownInput.module.css'
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import {Controller} from "react-hook-form";

const DropdownInput = ({
    name,
    options,
    selectedOption,
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
                render={({field})=>(
                    <CreatableSelect
                        {...field}
                        isClearable
                        className={`${styles.input}`}
                        options={options}
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
                )}
            >

            </Controller>


        </div>
    );
};

export default DropdownInput;