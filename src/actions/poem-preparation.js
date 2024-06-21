"use server"

export const sanitizeInput = (input) => {
    // Replace consecutive spaces with a single space
    let sanitized = input.replace(/\s+/g, ' ');
    sanitized = sanitized.replace(/([.,!?])\1+/g, '$1');

    // Remove any remaining gibberish characters that are not alphanumeric, spaces, or specific punctuations
    sanitized = sanitized.replace(/[^a-zA-Z0-9\s.,!?]/g, '');

    return sanitized;
}


export const getPoem = (prompt) => {
    const replicateApiKey = process.env.replicate_api_token
}
