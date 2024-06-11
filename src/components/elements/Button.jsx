import styles from './button.module.css'
import Select from "react-select";

const Button = ({
                    children,
                    name,
                    text,
                    options,
                    onChange,
                    label,
                    error
                }) => {

    return (
        <button
            className={`${styles.button}`}
        >
            {children}
        </button>

)
    ;
};

export default Button;