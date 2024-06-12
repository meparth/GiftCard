"use client"
import styles from './pill.module.css'
import anime from "animejs";

const Pill = ({
    option,
    onClick,
    selected,
}) => {

    const bounce = () => {
        console.log('bounced')
        anime({
            targets: `.${styles.pill}`,
            translateY: '10px',
            duration: 1000,
            loop: 4,
            direction: 'alternate',
            easing: 'easeInCubic',
            autoplay: false
        })
    }

    const handleClick = () => {
        onClick(option)
        bounce()
    }


    return (
        <div onClick={handleClick} className={`${styles.pill} ${selected ? styles.selected : ''}`}>
            {option.label}
        </div>

)
    ;
};

export default Pill;