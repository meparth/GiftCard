'use client'

import GeneratedCard from "@/components/generatedCard/generatedCard";
import styles from './resultHolder.module.css'

const ResultHolder = ({generatedText}) => {


    return (
        <>
            <div className={`${styles.textWrapperTop}`}>
                We got you these cards, click on the one you fancy, and we will go from there
            </div>
            <div className={`${styles.cardHolder}`}>
                <GeneratedCard
                    generatedText={generatedText}
                    className={`${styles.card}`}
                    cardSource='/pre-generated-cards/random_1.png'>
                </GeneratedCard>
                <GeneratedCard
                    generatedText={generatedText}
                    className={`${styles.card}`}
                    cardSource='/pre-generated-cards/random_2.png'>
                </GeneratedCard>
                <GeneratedCard
                    generatedText={generatedText}
                    className={`${styles.card}`}
                    cardSource='/pre-generated-cards/random_3.png'>
                </GeneratedCard>
                <GeneratedCard
                    generatedText={generatedText}
                    className={`${styles.card}`}
                    cardSource='/pre-generated-cards/random_4.png'>
                </GeneratedCard>
            </div>
            <div className={`${styles.textWrapperBottom}`}>
                dont like what you see? then go away
            </div>
        </>

    )
}

export default ResultHolder