"use client"
import styles from './envelope.module.css'
import anime from "animejs";
import {useCallback, useEffect, useRef, useState} from "react";
import Letter from "@/components/postCard/letter/letter";
import ResultHolder from "@/components/resultHolder/resultHolder";


const animateEnvelopeClose = () => {
    // the z-index isn't properly set if used with others, so setting it at first
    // and then commencing other transformations
    return anime({
        targets: `.${styles.frontflap}`,
        zIndex: 10,
        duration: 1
    }).finished.then(() => {
        anime({
            targets: `.${styles.frontflap}`,
            rotateX: '0deg',
            translateY: '0',
            easing: "easeOutExpo",
            duration: 350
        })
    })
}

const animateEnvelopeOpen = () => {
    return anime({
        targets: `.${styles.frontflap}`,
        rotateX: '180deg',
        easing: "easeOutExpo",
        duration: 350,
        translateY: '10rem',
        zIndex: 1,
    }).finished
}

const animateLetterOut = () => {
    // if we don't translateY before starting animation,
    // the letter seems to open from below the envelope.
    return anime({
        targets: `.${styles.letterholder}`, duration: 0, translateY: '-2rem', scaleY: 0,
    }).finished.then(() => {
        anime({
            targets: `.${styles.letterholder}`,
            easing: "easeOutElastic",
            duration: 500,
            translateY: '-7rem',
            scaleY: 1,
            zIndex: 10,
        })
    })

}
const animateLetterIn = () => {
    return anime({
        targets: `.${styles.letter}`,
        easing: "easeInExpo",
        duration: 350,
        translateY: '12rem',
        scaleY: 0,
    }).finished
}

const animateShakeEnvelope = (duration = 100) => {
    console.log('shaking')
    return anime({
        targets: `.${styles.container}`,
        translateX: [-10, 10],
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration,
        loop: 10,
        complete: () => {
            console.log('after shakes')
            anime({
                targets: `.${styles.container}`, translateX: 0,
            });
        },

    }).finished
}

const animateEnvelopeDown = () => {
    return anime({
        targets: `.${styles.container}`,
        translateY: [0, 1000, 0],
        opacity: 0,
        easing: 'easeOutElastic',
        duration: 1500,
    }).finished
}

const animateCardsOut = () => {
    return anime({
        targets: `.${styles.resultContainer}`,
        duration: 1200,
        scale: [0, 1],
        easing: 'easeOutElastic',
        opacity: 1,
    }).finished
}


const Envelope = () => {
    const [isFlapOpen, setIsFlapOpen] = useState(false);
    // isResultReady manages shaking of envelope, show/hide envelope and result cards
    // todo: should be false, truing only for dev
    const [isResultReady, setIsResultReady] = useState(false);
    const isResultReadyRef = useRef(isResultReady);
    const [generatedText, setGeneratedText] = useState('');

    useEffect(() => {
        isResultReadyRef.current = isResultReady;
    }, [isResultReady]);

    // only for dev
    useEffect(() => {
        // handleOpenFlap()
        // animateShakeEnvelope()
    }, [])

    const handleOpenFlap = () => {
        if (isFlapOpen) {
            // todo: remove before pushing
            handleCloseFlap()
            return;
        }
        animateEnvelopeOpen()
            .then(() => {
                animateLetterOut();
            })
        setIsFlapOpen(true);

    };
    const handleCloseFlap = () => {
        if (!isFlapOpen) {
            return;
        }
        setIsFlapOpen(false)

        return animateLetterIn()
            .then(() => {
                animateEnvelopeClose();
            })
    }

    // redundant
    const handleShakeEnvelope = useCallback(() => {
        // using ref because state isn't getting reflected here
        if (isResultReadyRef.current) {
            return
        }
        animateShakeEnvelope().then(() => {
            // Wait for 2 seconds before shaking again
            setTimeout(handleShakeEnvelope, 2000);
        });

    }, [isResultReady])

    const handleRemoveLetter = () => {
        return new Promise(resolve => {
            setIsResultReady(true)
            resolve()
        })
    }


    const handleGenerateUiEffects = async (generatedData) => {
        // ✅ flap closes
        await handleCloseFlap()
        // ✅ envelope shakes
        await animateShakeEnvelope(100)
        // ✅ letter vanishes
        await handleRemoveLetter()
        // ✅ flap opens
        await animateEnvelopeOpen()
        // ✅ flies out 4 result cards
        await animateCardsOut()
        // ✅ envelope descends and fades away
        await animateEnvelopeDown()

        setGeneratedText(generatedData.text)
        console.log('generated text: ', generatedData.text)

    }

    return (<>
            <div className={styles.container}>
                <img
                    className={`${styles.back} ${styles.envelop}`}
                    src={'/envelop-back.svg'}
                    // onClick={handleOpenFlap}
                />

                {!isResultReady && (<div className={`${styles.letterholder} ${styles.letter} ${styles.envelop}`}>
                    <Letter onGenerate={handleGenerateUiEffects}/>
                </div>)}
                <img
                    className={`${styles.front} ${styles.envelop}`}
                    src={'/envelop-front.svg'}
                    onClick={handleOpenFlap}
                />
                <img
                    className={`${styles.frontflap} ${styles.envelop}`}
                    src={'/envelop-frontflap.svg'}
                    onClick={handleOpenFlap}
                />
            </div>

            {isResultReady && (
                <div className={`${styles.resultContainer}`}>
                    <ResultHolder generatedText={generatedText}></ResultHolder>
                </div>
            )}
        </>

    )


}

export default Envelope