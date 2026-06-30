# GraphOne - AI Intelligence Layer

GraphOne is the global intelligence layer for AI. It provides a single graph connecting companies, founders, investors, products, funding, and talent in the AI ecosystem.

## Features

- **Live AI Intelligence**: Real-time insights and most searched AI entities (Databricks, Notion, Pinecone, Weaviate, LangChain, etc.).
- **Ecosystem Graph**: A dynamic, interactive graph visualizing the connections between top AI companies (OpenAI, Anthropic, Cursor, Midjourney, Perplexity).
- **Product Directory**: Browse, filter, and discover the most popular and trending AI tools across categories like Code, Chat, Image, and more.
- **Trending Searches**: Stay up-to-date with what the community is looking for (e.g., Vibe Coding, Lovable, AI Agents).
- **Newsletter**: Subscribe to weekly updates on new tools and trends.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: Custom UI components built with modern best practices

## Getting Started

First, install the dependencies if you haven't already:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app`: Contains the main Next.js App Router pages and global layouts.
- `/components`: Reusable UI components grouped by feature (e.g., `/home`, `/layout`, `/ui`).
- `/public/logo`: Local WebP logo assets used throughout the application.
- `/lib`: Utility functions and helpers.
- `/types`: TypeScript type definitions.

## Assets

This project uses customized local WebP assets for prominent AI companies to ensure fast loading and consistent styling. They are located in the `public/logo` directory.
