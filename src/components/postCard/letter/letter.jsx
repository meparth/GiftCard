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

    const options = [
        { value: "blues", label: "Blues" },
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" },
    ];

    const [selectedOption, setSelectedOption] = useState(null)


    return (
        <div className={`${styles.lettercontent}`}>
            <form className={styles.form} action={formAction}>
                <TextInput
                    name='occasion'
                    label='whats the big deal'
                ></TextInput>
                <DropdownInput
                    name='optionsss'
                    label='ples select'
                    options={options}
                    selectedOption={selectedOption}
                    onChange={setSelectedOption}
                />
                <Button type="submit"> on </Button>
            </form>
        </div>
    )
}

export default Letter;