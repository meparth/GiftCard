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
        targets: `.${styles.letterholder}`,
        duration: 0,
        translateY: '-2rem',
        scaleY: 0,
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

const animateShakeEnvelope = () => {
    console.log('shaking')
    return anime({
        targets: `.${styles.container}`,
        // translateX: ['-25px', '25px'],
        // rotate: ['5deg', '-5deg'],
        // duration: 300,
        // direction: 'alternate',
        // loop: 10,
        // easing: 'easeOutBack',
        // easing: 'linear',
        translateX: [-10, 10],
        duration: 100,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: 5,
        complete: () => {
            console.log('after shakes')
            anime({
                targets: `.${styles.container}`,
                translateX: 0,
            });
        },

    })
}

const animateCardsOut = () => {

}

const Envelope = () => {
    const [isFlapOpen, setIsFlapOpen] = useState(false);
    // isResultReady manages shaking of envelope, show/hide envelope and result cards
    // todo: should be false, truing only for dev
    const [isResultReady, setIsResultReady] = useState(true);
    const isResultReadyRef = useRef(isResultReady);

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

    const handleShakeEnvelope = useCallback(() => {
        // using ref because state isn't getting reflected here
        if (isResultReadyRef.current) {
            return
        }
        console.log('handleShakeEnvelope', isResultReady)
        animateShakeEnvelope().finished.then(() => {
            // Wait for 2 seconds before shaking again
            setTimeout(handleShakeEnvelope, 2000);
        });

    }, [isResultReady])


    const handleGenerate = () => {
        handleCloseFlap().then(() => {
            handleShakeEnvelope()
        })

        // wait for a bit, blur out everything/make invisible
        // then show the result images in four cards


        setTimeout(() => {
            setIsResultReady(true)
            // handleShakeEnvelope(false)
            animateCardsOut()
        }, 4000)
    }

    return (
        <>
            {!isResultReady && (
                <div className={styles.container}>
                    <img
                        className={`${styles.back} ${styles.envelop}`}
                        src={'/envelop-back.svg'}
                        // onClick={handleOpenFlap}
                    />

                    <div className={`${styles.letterholder} ${styles.letter} ${styles.envelop}`}>
                        <Letter onGenerate={handleGenerate}/>
                    </div>
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
                    {/*<div className='frontflap-container'>*/}
                    {/*</div>*/}
                </div>
            )}
            {isResultReady && (
                <div>
                    <ResultHolder></ResultHolder>
                </div>
            )}
        </>

    )


}

export default Envelope