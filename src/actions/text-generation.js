"use server"

import {generateWithGroq} from "@/actions/text-generation-with-groq";
import {getPreparedPromptWithInputData} from "@/actions/prompt-preparation";

/**
 * will return the text generated from llm.
 * type can be POEM
 */
export const getGeneratedText = async (input, type = 'POEM') => {
    const preparedPrompt = getPreparedPromptWithInputData(input, type)

    console.log('---generating for following prompt---', '\n', preparedPrompt)

    const llmService = process.env.llm_service || 'groq'
    switch (llmService) {
        case 'groq':
            return await generateWithGroq(preparedPrompt, process.env.groq_model || 'llama3-8b-8192')

    }
}
