"use client"
import styles from './letter.module.css'
import TextInput from "@/components/elements/TextInput";
import DropdownInput from "@/components/elements/DropdownInput";
import Button from "@/components/elements/Button";
import MultiselectPills from "@/components/elements/MultiselectPills";
import {useForm} from "react-hook-form";
import {getGeneratedText} from "@/actions/text-generation";
import {INTEREST_OPTIONS, OCCASION_OPTIONS} from "@/lib/data";

const Letter = ({onGenerate}) => {
    const {
        handleSubmit,
        control,
        getValues,
    } = useForm({
        defaultValues: {
            interests: [],
        }
    })

    const occasionOptions = OCCASION_OPTIONS
    const interestOptions = INTEREST_OPTIONS

    const handleFormSubmit = async (event) => {
        const generatedText = await getGeneratedText(event, 'POEM')

        // todo: this will be split into two functions later, one before generating
        //       and one after.
        onGenerate({text: generatedText})
        console.log(generatedText)

    }

    return (
        <div className={`${styles.lettercontent}`}>
            <form className={styles.form} onSubmit={handleSubmit(data => handleFormSubmit(data))}>

                {/* OCCASION */}
                <DropdownInput
                    name='occasion'
                    label="What's the celebration?"
                    options={occasionOptions}
                    control={control}
                />

                {/* RECIPIENT */}
                <TextInput
                    name='recipient'
                    label="Who is the recipient?"
                    control={control}
                ></TextInput>

                {/* MESSAGE TITLE */}
                <TextInput
                    name='messageTitle'
                    label="Give your message a catchy title"
                    control={control}
                ></TextInput>

                <MultiselectPills
                    name='interests'
                    label='What are they into? Tap away!'
                    options={interestOptions}
                    control={control}
                >

                </MultiselectPills>



                <Button type="submit"> on </Button>
            </form>
        </div>
    )
}

export default Letter;