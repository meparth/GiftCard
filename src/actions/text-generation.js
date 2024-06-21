"use server"

import Groq from "groq-sdk";

import {getPreparedPromptWithInputData} from "@/actions/poem-preparation";

export const textGeneration = async (prompt) => {
    const groq = new Groq({ apiKey: process.env.groq_api_key });
    const chatCompletion = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
        temperature: 0.8,
        model: "llama3-8b-8192",
        // model: "mixtral-8x7b-32768",
        // model: "Llama3-70B-8k",
    });
    // Print the completion returned by the LLM.
    console.log(chatCompletion.choices[0]?.message?.content || "");
}

export const startGeneration = async (input) => {
    const preparedPrompt = getPreparedPromptWithInputData(input)
    console.log('---generating for prompt: ', preparedPrompt, '---')
    textGeneration(preparedPrompt)
}
