"use server"

import Replicate from "replicate";

export const generateText = async (prompt) => {
    const replicate = new Replicate({
        auth: process.env.replicate_api_token,
    });


    const input = {
        prompt: prompt ?? "Can you write a poem about open source machine learning?"
    }

    console.log('processing for input - ', prompt)

    for await (const event of replicate.stream("meta/meta-llama-3-70b-instruct", { input })) {
        process.stdout.write(event.toString());
        // console.log(event.toString())
    }
}

