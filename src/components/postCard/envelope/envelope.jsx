"use client"
import styles from './envelope.module.css'
import anime from "animejs";
import {useEffect, useRef, useState} from "react";


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
        targets: `.${styles.letter}`,
        duration: 0,
        translateY: '-2rem',
        scaleY: 0,
    }).finished.then(() => {
        anime({
            targets: `.${styles.letter}`,
            easing: "easeOutElastic",
            duration: 500,
            translateY: '-15rem',
            scaleY: 1,
        })
    })
}
const animateLetterIn = () => {
    return anime({
        targets: `.${styles.letter}`,
        easing: "easeOutExpo",
        duration: 250,
        translateY: '-2rem',
        scaleY: 0,
    })
}

const Envelope = () => {

    const [isFlapOpen, setIsFlapOpen] = useState(false);
    const [isLetterOut, setIsLetterOut] = useState(false)

    const handleOpenFlap = () => {
        if (isFlapOpen) {
            animateLetterIn()
                .finished.then(() => {
                    animateEnvelopeClose();
            })
        } else {
            animateEnvelopeOpen()
                .finished.then(() => {
                    animateLetterOut();
            })
        }
        setIsFlapOpen(prevState => !prevState);

    };



    return (
        <div className={styles.container}>
            <img
                className={`${styles.back} ${styles.envelop}`}
                 src={'/envelop-back.svg'}
                onClick={handleOpenFlap}
            />

            <div className={`${styles.letterholder}`}>
                <img
                    className={`${styles.letter} ${styles.envelop}`}
                    src={'/envelop-letter.svg'}
                    // onClick={handleOpenFlap}
                />
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