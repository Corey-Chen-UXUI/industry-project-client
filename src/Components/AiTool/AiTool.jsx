import "./AiTool.scss";
import { Configuration, OpenAIApi } from "openai";
import {useState, useEffect } from "react";

const AiTool = () => {

    // UseState to store OpenAI response
const [aiResponse, setAiResponse] = useState("")

// UseEffect to ensure response only generates once
useEffect(() => {
    // OpenAI script to read prompt and generate response
    async function generateResponse() {
        const configuration = new Configuration({
          apiKey: "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", // API KEY
        });
      
        const openai = new OpenAIApi(configuration);
        // Prompt can be adjusted here dynamically. Just add ${} with variable nested 
        // within the curly brackets as a string or number to send prompt to OpenAI
        const prompt = `Explain to me in simplest terms what an AI tool is.`;
        // Max number of token responses (Think of how many characters it can send back but a slightly different metric that I'm unsure of)
        const maxTokens = 500;

        // Don't touch these
        // ========
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: maxTokens,
        });
        // ========
      
        // Store response in useState
        setAiResponse(response.data.choices[0].text);
      }
      generateResponse();
},[])

// If no response, page does not load yet
if (aiResponse === "") {
    return (<div>Loading...</div>)
}

  return (
    <div>{aiResponse}</div>
  )
}

export default AiTool