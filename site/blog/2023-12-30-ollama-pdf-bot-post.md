---
slug: ollama-pdf-bot-release-post
title: Ollama PDF Bot
authors: [ amith ]
tags: [ Bot, Innovation, DocumentInteraction, ConversationalAI, Technology, Ollama, PDFBot
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Hello LLM Enthusiasts!

I wanted to share the details about a project that I put together while exploring LLMs and trying
out some ideas.

#### What is it?

Imagine an experience where you can engage with your text documents 📄 in a conversational 💬 manner!
This is exactly what it is. **A PDF Bot** 🤖. It is a chatbot that accepts PDF documents and lets you have conversation
over it.

#### How is this helpful?

- **_Talk to your documents_**: Interact with your PDFs and extract the information in a way that you'd like 📄✨. This could
  prove helpful in summarising the PDF, or to fetch
  specific details from a long document or to list/format data in a structure you'd like and much more!
- **_Choose your LLM_**: Switch to a different model that works for your needs. You control the system according to your
  requirements.
- **_Local Setup_**: The LLMs and the chat app is setup locally. Your data does not leave your computer!

#### How does it work?

The system consists of an app, LLM and a question-answering module.
The app is the interface for the user - where the user can upload PDF document and then ask questions. (built
with [StreamLit](https://streamlit.io/)).
The app connects to a module (built with [LangChain](https://www.langchain.com/)) that loads the PDF, extracts text,
splits it into smaller chunks, generates embeddings from
the text using LLM served via [Ollama](https://ollama.ai/) (a tool to manage and run LLMs locally) and creates a
vectorstore for information
retrieval.
It then sets up a question-answering system that enables user to have a conversation with the system.

Watch the demo:

<iframe width="500" height="315" src="https://www.youtube.com/embed/QcI1oVNvInM" title="PDF Bot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

🚀 **Try it out now:** https://github.com/amithkoujalgi/ollama-pdf-bot

Feel free to explore and share your thoughts! 💡

#DocumentInteraction #ConversationalAI #LLM #Ollama #PDFBot #AI #LLM #GenAI #GenerativeAI #Ollama #OpenSource

