"use client"
import styles from './letter.module.css'
import {useFormState} from "react-dom";
import {sendRequest} from "@/lib/action";
import TextInput from "@/components/elements/TextInput";
import DropdownInput from "@/components/elements/DropdownInput";
import {useState} from "react";
import Select from "react-select";
import Button from "@/components/elements/Button";


const Letter = () => {
    const [state, formAction] = useFormState(sendRequest, undefined);
    console.log('~! form action: ', formAction)

    const occasionOptions = [
        { value: "birthday", label: "Birthday Bash 🎂" },
        { value: "anniversary", label: "Anniversary Adventure 💑" },
        { value: "graduation", label: "Graduation Glory 🎓" },
        { value: "thankyou", label: "Thank You Triumph 🙏" },
        { value: "getwell", label: "Get Well Gala 🤒" },
        { value: "holiday", label: "Holiday Hooray 🎄" },
        { value: "other", label: "Other (Mystery Event) 🎭" },
    ];

    return (
        <div className={`${styles.lettercontent}`}>
            <form className={styles.form} action={formAction}>

                {/*OCCASION*/}
                <DropdownInput
                    name='occasion'
                    label="What's the celebration?"
                    options={occasionOptions}
                />

                {/*RECIPIENT*/}
                <TextInput
                    name='recipient'
                    label="Who is the recipient?"
                ></TextInput>

                <TextInput
                    name='messageTitle'
                    label="Give your message a catchy title"
                ></TextInput>





                <Button type="submit"> on </Button>
            </form>
        </div>
    )
}

export default Letter;