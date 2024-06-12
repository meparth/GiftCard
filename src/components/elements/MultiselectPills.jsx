"use client"

import styles from './multiselectPills.module.css'
import {Controller} from "react-hook-form";
import {createAbortController} from "next/dist/server/web/spec-extension/adapters/next-request";
import Pill from "@/components/elements/Pill";

const MultiselectPills = ({
    name,
    text,
    control,
    options,
    onChange,
    label,
    error
}) => {


    return (
        <div className={`${styles.inputGroup}`}>
            {label && <label className={`${styles.label}`} htmlFor={name}>{label}</label>}
            <Controller
                name={name}
                control={control}
                render={({field}) => {
                    const {value, onChange} = field
                    const handleClick = (option) => {
                        let updatedValues
                        const valIdx = value.map(item => item.value).indexOf(option.value)
                        if (valIdx > -1) {
                            value.splice(valIdx, 1)
                            updatedValues = [...value]
                        } else {
                            updatedValues = [...value, option]
                        }
                        onChange(updatedValues)
                    }

                    const renderedPills = options.map(option => {
                        // console.log(option, value, value.map(item => item.value).includes(option.value))

                        return <Pill
                        key={option.value}
                        option={option}
                        onClick={handleClick}
                        selected={value.map(item => item.value).includes(option.value)}
                    >

                    </Pill>
                })
                    return (
                        <div className={`${styles.pillWrapper}`}>
                            {renderedPills}
                        </div>
                    )
                }}

            >

            </Controller>
        </div>

)
    ;
};

export default MultiselectPills;