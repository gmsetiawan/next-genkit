"use client";

import React from "react";
import { menuSuggestionFlow } from "./genkit";

export default function Home() {
  const [menuItem, setMenuItem] = React.useState<string>("");

  async function getMenuItem(formData: FormData) {
    const theme = formData.get("theme")?.toString() ?? "";
    const suggestion = await menuSuggestionFlow(theme);
    setMenuItem(suggestion);
  }
  return (
    <main>
      <form action={getMenuItem}>
        <div className="flex flex-col gap-2">
          <label htmlFor="theme">Suggest a menu item for a theme</label>
          <input
            type="text"
            id="theme"
            name="theme"
            className="px-4 py-2 rounded border border-gray-600 text-gray-800"
          />
        </div>
        <button
          type="submit"
          className="my-2 px-4 py-2 rounded bg-blue-400 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <pre>{menuItem}</pre>
    </main>
  );
}
