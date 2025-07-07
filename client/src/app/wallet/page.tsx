"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function WalletPage() {
  const [userId, setUserId] = useState("");
  const [url, setUrl] = useState("");

  const generatePass = async () => {
    if (!userId) {
      alert("Please enter a User ID");
      return;
    }

    const res = await fetch("/api/wallet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    const data = await res.json();
    setUrl(data.saveUrl);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-blue-100">
        <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
          🎟️ Add Your Raseed Pass
        </h1>

        <label htmlFor="userId" className="block mb-2 text-sm font-medium text-gray-600">
          Enter User ID / Order ID
        </label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="e.g. ayush2025"
          className="w-full px-4 py-2 border text-purple-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <button
          onClick={generatePass}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Generate Wallet Pass
        </button>

        {url && (
          <div className="mt-6 text-center">
            <CheckCircle className="mx-auto text-green-500 w-8 h-8 mb-2" />
            <p className="text-gray-700 font-medium mb-2">Pass generated successfully!</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-semibold underline"
            >
              👉 Save to Google Wallet
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
