"use client"
import styles from './letter.module.css'
import {sendRequest} from "@/lib/action";
import TextInput from "@/components/elements/TextInput";
import DropdownInput from "@/components/elements/DropdownInput";
import {useState} from "react";
import Button from "@/components/elements/Button";
import MultiselectPills from "@/components/elements/MultiselectPills";
import {useForm} from "react-hook-form";


const Letter = () => {
    const {
        handleSubmit,
        control,
        getValues,
    } = useForm({
        defaultValues: {
            interests: [],
        }
    })


    const occasionOptions = [
        { value: "birthday", label: "Birthday Bash 🎂" },
        { value: "anniversary", label: "Anniversary Adventure 💑" },
        { value: "graduation", label: "Graduation Glory 🎓" },
        { value: "thankyou", label: "Thank You Triumph 🙏" },
        { value: "getwell", label: "Get Well Gala 🤒" },
        { value: "holiday", label: "Holiday Hooray 🎄" },
        { value: "other", label: "Other (Mystery Event) 🎭" },
    ];
    const interestOptions = [
        { value: "sport", label: "Sports Superstar 🏅" },
        { value: "music", label: "Music Maestro 🎵" },
        { value: "travel", label: "Travel Buff ✈️" },
        { value: "food", label: "Food Fanatic 🍕" },
        { value: "book", label: "Book Lover 📚" },
        { value: "movie", label: "Movie Enthusiast 🎬" },
        { value: "art", label: "Art Admirer 🎨" },
    ];

    const handleFormSubmit = (event) => {
        console.log(event)
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