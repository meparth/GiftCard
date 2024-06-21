"use server"



import {getPreparedPromptWithInputData} from "@/actions/poem-preparation";

export const textGeneration = async (prompt) => {

}

export const startGeneration = async (input) => {
    const preparedPrompt = getPreparedPromptWithInputData(input)
    console.log('---generating for prompt: ', preparedPrompt, '---')

}
