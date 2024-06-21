"use server"

import MistralClient from '@mistralai/mistralai';

import {getPreparedPromptWithInputData} from "@/actions/poem-preparation";
export const textGeneration = async (prompt) => {

    const apiKey = process.env.mistral_api_key;

    const client = new MistralClient(apiKey);

    const chatResponse = await client.chat({
        model: 'mistral-large-latest',
        messages: [{role: 'user', content: prompt}],
    });

    console.log('response: ', chatResponse.choices[0].message.content);
}

export const startGeneration = async (input) => {
    const preparedPrompt = getPreparedPromptWithInputData(input)
    console.log('---generating for prompt: ', preparedPrompt, '---')
    textGeneration(preparedPrompt)
}
