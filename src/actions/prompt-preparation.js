"use server"

export const getSanitizedText = (input) => {
    let sanitized = input.replace(/\s+/g, ' ');
    sanitized = sanitized.replace(/([.,!?])\1+/g, '$1');

    // Remove any remaining gibberish characters that are not alphanumeric, spaces, or specific punctuations
    sanitized = sanitized.replace(/[^a-zA-Z0-9\s.,!?]/g, '');

    return sanitized;
}


export const getPreparedPromptWithInputData = (inputData, type) => {
    switch (type) {
        case 'POEM':
            return getPreparedPromptForPoem(inputData)
    }
}

const getPreparedPromptForPoem = (inputData) => {
    const {recipient, messageTitle, interests, occasion: {value: occasionText}} = inputData

    const interestsText = interests.reduce((prev, curr) => prev + ', ' + curr.value, '').substring(1)
    // console.log(interestsText, recipient, messageTitle, occasionText)

    let prompt = process.env.poem_prompt_template || 'I want to get a poem for someone. Write a 4 line poem for a person named GC_RECIPIENT. I want the poem to greet him on his GC_OCCASIONS. Consider that their interests are: GC_INTERESTS. Use appropriate emojis at the very start and also at the end of each line. Please make sure the words rhyme nicely. Add an appropriate title in all caps and emojis. Give me only the poem, NOTHING ELSE.'
    prompt = prompt.replace('GC_RECIPIENT', recipient)
        .replace('GC_INTERESTS', interestsText)
        .replace('GC_OCCASIONS', occasionText)


    return getSanitizedText(prompt)
}