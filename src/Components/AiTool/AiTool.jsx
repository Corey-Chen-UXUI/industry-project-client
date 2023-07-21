import "./AiTool.scss";
import { Configuration, OpenAIApi } from "openai";
import {useState, useEffect } from "react";

const AiTool = () => {

const [aiResponse, setAiResponse] = useState("")

useEffect(() => {
    async function generateResponse() {
        const configuration = new Configuration({
          apiKey: "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", // Replace with your OpenAI API key
        });
      
        const openai = new OpenAIApi(configuration);
        const prompt = "Explain to me in simplest terms what an AI tool is.";
        const maxTokens = 500;
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: maxTokens,
        });
      
        setAiResponse(response.data.choices[0].text);
      }
      generateResponse();
},[])


if (aiResponse === "") {
    return (<div>Loading...</div>)
}

  return (
    <div>{aiResponse}</div>
  )
}

export default AiTool