// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { LLMChain } from "langchain/chains";
// import { PromptTemplate } from "@langchain/core/prompts";

// export async function explainTopic(topic) {
//   const model = new ChatGoogleGenerativeAI({
//     model: "gemini-1.5-flash-latest",
//     temperature: 0.7,
//     maxOutputTokens: 1024,
//     apiKey: process.env.GOOGLE_API_KEY,
//   });

//   const prompt = PromptTemplate.fromTemplate(
//     `You are a helpful assistant that explains topics in detail.
//     Explain the topic below in detail.
    
//     Topic: {topic}`
//   );

//   const chain = new LLMChain({ llm: model, prompt });

//   const res = await chain.invoke({ topic });

//   return res.text;
// }




import { config } from 'dotenv';
config();

import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { LLMChain } from 'langchain/chains';
import { PromptTemplate } from '@langchain/core/prompts';

const model = new ChatGoogleGenerativeAI({
  model: 'gemini-1.5-flash-latest',
  temperature: 0.7,
  maxOutputTokens: 1024,
  apiKey: process.env.GOOGLE_API_KEY,
});

const prompt = PromptTemplate.fromTemplate(
  `You are a helpful assistant that explains topics in detail.
   Explain the topic below in detail.
   and also in points for cleaere readbility.

   Topic: {topic}`
);

const chain = new LLMChain({ llm: model, prompt: prompt });

export async function explainTopic(topic) {
  const res = await chain.invoke({ topic });

  // Fix: Check all possible result fields
  return res.text || res.output_text || JSON.stringify(res, null, 2);
}
