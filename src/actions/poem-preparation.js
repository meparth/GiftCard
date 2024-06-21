"use server"

export const getSanitizedText = (input) => {
    let sanitized = input.replace(/\s+/g, ' ');
    sanitized = sanitized.replace(/([.,!?])\1+/g, '$1');

    // Remove any remaining gibberish characters that are not alphanumeric, spaces, or specific punctuations
    sanitized = sanitized.replace(/[^a-zA-Z0-9\s.,!?]/g, '');

    return sanitized;
}


export const getPreparedPromptWithInputData = (inputData) => {
    const {recipient, messageTitle, interests, occasion: {value: occasionText}} = inputData

    const interestsAsText = interests.reduce((prev, curr) => prev + ', ' + curr.value, '').substring(1)
    console.log(interestsAsText, recipient, messageTitle, occasionText)

    const prompt = `I want to get a poem for someone. Write a 4 line poem for a person named ${recipient}. I want the poem to greet him on his ${occasionText}.
                             consider that their interests are: ${interestsAsText}. Use appropriate emojis at the start and end of each line. Make it cordial. Give me only the poem, NOTHING ELSE.`
    return getSanitizedText(prompt)
    //interests: Array(4), occasion: {…}, recipient: 'abcd', messageTitle: 'happy birthday from sylhet'
}