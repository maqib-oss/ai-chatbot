# AI Chatbot

A lightweight AI-powered chatbot built with Next.js and Google Gemini. The project includes a simple chat interface and a backend API route that forwards user messages to the Gemini model and returns the generated response.

## Overview

This project is a starter chatbot application designed to demonstrate how to connect a Next.js app to a generative AI model. It uses:

- Next.js 15
- React 19
- Google Generative AI SDK
- App Router structure
- Tailwind CSS for styling support

## Features

- Chat interface built in the app frontend
- API route for message handling at `app/api/chat/route.js`
- Gemini client configuration in `lib/gemini.js`
- Simple and extensible project structure for adding new chatbot features
- Ready for local development and production builds

## Project Structure

```bash
.
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.jsx
├── lib/
│   └── gemini.js
├── public/
├── .eslintrc.json
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── ...
```

## Tech Stack

- Next.js
- React
- JavaScript
- Google GenAI
- Node.js

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js 18+
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/maqib-oss/ai-chatbot.git
cd ai-chatbot
```

2. Install dependencies:

```bash
npm install
```

3. Configure the Gemini API key.

The project includes a Gemini client in `lib/gemini.js`. Update or replace the key configuration there with your own valid Google AI API key before running the app.

4. Start the development server:

```bash
npm run dev
```

5. Open the app in your browser:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## How It Works

- The frontend sends the user message to the `/api/chat` endpoint.
- The backend receives the message list and sends it to the Gemini model.
- The model generates a response.
- The response is returned to the frontend and displayed in the chat UI.

## Main Files

- `app/page.jsx` – main chat page UI
- `app/api/chat/route.js` – server-side API route for AI responses
- `lib/gemini.js` – Gemini SDK connection setup
- `app/layout.js` – app-level layout

## Notes

This repository is a good starting point for building a chatbot app. You can extend it with:

- chat history persistence
- streaming responses
- user authentication
- message styling and themes
- custom AI prompts and conversation logic

## License

This project is currently set up as a personal/development project and does not include a custom license file.

## Contributing

Contributions are welcome. If you want to improve the chatbot interface, add new features, or refine the backend integration, feel free to open a pull request.
