'use client'
import styles from './generatedCard.module.css'


const GeneratedCard = ({cardSource, generatedText}) => {


    const handleClick = () => {
        console.log('clicked')
    };

    return (
        <div className={`${styles.imgWrapper}`}>
            <img
                className={`${styles.img}`}
                src={cardSource || '/pre-generated-cards/random_1'}
                onClick={handleClick}
            />
            <div
                className={`${styles.overlayText}`}
            >
                {generatedText}

            </div>
        </div>

    )
}

export default GeneratedCard