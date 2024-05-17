"use client"
import styles from './envelope.module.css'
import anime from "animejs";
import {useEffect, useRef, useState} from "react";

const Envelope = () => {

    const [openFlap, setOpenFlap] = useState(false);

    const handleOpenFlap = () => {
        console.log(openFlap)
        !openFlap ? anime({
            targets: `.${styles.frontflap}`,
            rotateX: '180deg',
            easing: "easeOutExpo",
            duration: 350,
            translateY: '120px'
        }) :  anime({
            targets: `.${styles.frontflap}`,
            rotateX: '0deg',
            translateY: '0px',
            easing: "easeOutExpo",
            duration: 350,
        })

        setOpenFlap(prevState => !prevState);

    };





    return (
        <div className={styles.container}>
            <img
                className={`${styles.back} ${styles.envelop}`}
                 src={'/envelop-back.svg'}
                onClick={handleOpenFlap}
            />
            <img
                className={`${styles.letter} ${styles.envelop}`}
                 src={'/envelop-letter.svg'}
                onClick={handleOpenFlap}
            />
            <img
                className={`${styles.front} ${styles.envelop}`}
                src={'/envelop-front.svg'}
                onClick={handleOpenFlap}
            />
            <img
                className={`${styles.frontflap} ${styles.envelop}`}
                src={'/envelop-frontflap.svg'}
            />
            {/*<div className='frontflap-container'>*/}
            {/*</div>*/}
        </div>
    )


}

export default Envelope