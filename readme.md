# Xplain – AI-Powered Explanation Tool 🧠💡

[![Hugging Face](https://img.shields.io/badge/Hugging%20Face-Deploy-blue?logo=huggingface)](https://huggingface.co/spaces/your-username/Xplain)
[![Node.js](https://img.shields.io/badge/Node.js-v22-blue?logo=node.js)](https://nodejs.org/)
[![LangChain](https://img.shields.io/badge/LangChain-v1.0-orange)](https://www.langchain.com/)
[![Gemini](https://img.shields.io/badge/Gemini-1.5-flash-purple)](https://developers.google.com/)
[![SerpAPI](https://img.shields.io/badge/SerpAPI-Active-yellowgreen)](https://serpapi.com/)

---

## Overview

**Xplain** is an AI-powered tool designed to provide clear and concise explanations for any topic, query, or concept. Powered by **Gemini** (Google’s AI), **LangChain**, and **SerpAPI**, Xplain fetches relevant information and delivers it in an easy-to-understand summary.  

---

## Features

- 🔍 Real-time search integration using **SerpAPI**  
- 🤖 Summarization and explanation via **Gemini AI**  
- 📝 Supports multiple queries at once  
- ⚡ Quick, reader-friendly explanations  
- 🌐 Deployable on **Hugging Face Spaces**  

---

## Getting Started

### Prerequisites

- Node.js v22+  
- npm or yarn  
- Gemini API Key  
- SerpAPI API Key  

### Installation

```bash
git clone https://github.com/your-username/Xplain.git
cd Xplain
npm install

Environment Variables

Create a .env file with your API keys:

GEMINI_API_KEY=your_gemini_api_key
SERPAPI_API_KEY=your_serpapi_api_key

Running Locally
npm start


The app will be available at http://localhost:3000.

Usage

You can query any topic, for example:

import { getExplanation } from "./agent.js";

const explanation = await getExplanation("Quantum Computing");
console.log(explanation);


The AI will return a summarized explanation in 3–5 sentences.
