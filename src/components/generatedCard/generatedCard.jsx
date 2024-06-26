'use client'
import styles from './generatedCard.module.css'


const GeneratedCard = ({cardSource}) => {


    const handleClick = () => {
        console.log('clicked')
    };

    return (
        <img
            className={`${styles.img}`}
            src={cardSource || '/pre-generated-cards/random_1'}
            onClick={handleClick}
        />
    )
}

export default GeneratedCard