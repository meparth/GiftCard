"use client"
import styles from './letter.module.css'
import {useFormState} from "react-dom";
import {sendRequest} from "@/lib/action";
import TextInput from "@/components/elements/TextInput";


const Letter = () => {
    const [state, formAction] = useFormState(sendRequest, undefined);
    console.log('form action: ', formAction)
    console.log('state: ', state)


    return (
        <div className={`${styles.lettercontent}`}>
            <form className={styles.form} action={formAction}>
                <TextInput
                    name='occasion'
                    label='whats the big deal'
                ></TextInput>
            </form>
        </div>
    )
}

export default Letter;