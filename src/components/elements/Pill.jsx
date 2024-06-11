"use client"
import styles from './pill.module.css'

const Pill = ({
    option,
    onClick,
    selected,
}) => {
    return (
        <div onClick={() => onClick(option)} className={`${styles.pill} ${selected ? styles.selected : ''}`}>
            {option.label}
        </div>

)
    ;
};

export default Pill;