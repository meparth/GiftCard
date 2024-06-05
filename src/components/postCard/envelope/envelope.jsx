"use client"
import styles from './envelope.module.css'
import anime from "animejs";
import {useEffect, useRef, useState} from "react";
import Letter from "@/components/postCard/letter/letter";


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
    })
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
            duration: 350,
            translateY: '-7rem',
            scaleY: 1,
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
    })
}

const Envelope = () => {

    const [isFlapOpen, setIsFlapOpen] = useState(false);

    // only for dev
    useEffect(() => {
        handleOpenFlap()
    }, [])

    const handleOpenFlap = () => {
        if (isFlapOpen) {
            return;
        }
        animateEnvelopeOpen()
            .finished.then(() => {
            animateLetterOut();
        })
        setIsFlapOpen(true);

    };
    const handleCloseFlap = () => {
        if (!isFlapOpen) {
            return;
        }
        animateLetterIn()
            .finished.then(() => {
            animateEnvelopeClose();
        })
        setIsFlapOpen(false)
    }


    return (
        <div className={styles.container}>
            <img
                className={`${styles.back} ${styles.envelop}`}
                src={'/envelop-back.svg'}
                // onClick={handleOpenFlap}
            />

            <div className={`${styles.letterholder} ${styles.letter} ${styles.envelop}`}>
                <Letter/>
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
    )


}

export default Envelope