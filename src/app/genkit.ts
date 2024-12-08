"use server";

import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";

const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_API_KEY,
    }),
  ],
  model: gemini15Flash,
});

export const menuSuggestionFlow = ai.defineFlow(
  {
    name: "menuSuggestionFlow",
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (restaurantTheme) => {
    const { text } = await ai.generate({
      model: gemini15Flash,
      prompt: `Generate a list of menu items for a website: ${restaurantTheme}`,
    });
    return text;
  }
);
