# Raseed – AI-Powered Receipt Management & Financial Assistant

## Overview
Raseed is a next-generation, AI-powered platform for managing receipts, analyzing spending, and providing actionable financial insights. It seamlessly integrates with Google Wallet, supports multilingual queries, and leverages advanced AI agents for a truly smart, user-centric experience.

---

## 🚀 Workflow & Execution Plan

### 1. Uploading the Receipt
- Users upload receipt images or videos via web or mobile.
- Files are securely stored in **Firebase Storage**.

### 2. Parsing the Receipt with Gemini
- **Gemini multimodal AI** (via Firebase Functions) extracts all details: items, prices, taxes, totals, store name, etc., in any language.
- Structured data is generated for each receipt.

### 3. Saving and Structuring the Data
- Parsed data is stored in:
  - **Firestore** (structured receipt records)
  - **Vertex Vector DB** (embedded text for fast, intelligent search)
- Each receipt is associated with user, timestamp, merchant, categories, and spend.

### 4. Adding the Receipt to Google Wallet
- A **Google Wallet Pass** is created for each receipt, summarizing store, amount, and items.
- Passes include a link to the full receipt on the Firebase-hosted web app.
- Passes are grouped by purchase time (today, week, month).

### 5. Agents Built Using Genkit
- **Retriever Agent**: Pulls relevant receipts from the Vector DB.
- **Query Agent**: Handles user questions ("What did I buy last week?") and generates responses with Gemini.
- **Formatter Agent**: Formats and delivers responses in-app or to Wallet passes.
- Agents collaborate for real-time, context-aware financial assistance.

### 6. Intelligent Suggestions in the Background
- Background processes analyze spending, trends, and suggest ways to save.
- Suggestions are shown in the dashboard and as a "Smart Tip" pass in Google Wallet.

### 7. Visual Dashboard for Receipts and Analytics
- Users can:
  - View full receipts and item lists
  - See spending breakdowns by category
  - Explore graphs and trends
  - Access suggestions and tips
- Dashboard is Firebase-hosted and linked from Wallet passes.

### 8. Multilingual Support for Queries
- Users interact with the AI assistant in their preferred language (Hindi, Marathi, etc. via Gemini).

### 9. Personal Chat Assistant with Context Awareness
- Smart chat interface answers queries like:
  - "Am I overspending on groceries?"
  - "What were my top purchases this week?"
- Uses Gemini and data from Firestore/Vector DB for personalized answers.

### 10. Receipt Management Tools
- Agents help users:
  - Filter by value, category, or merchant
  - Delete or manage receipts

### 11. Pattern Analysis and Push Notifications
- Agents detect spending patterns and send push notifications (via Firebase Cloud Messaging) for spikes or trends.
- Notifications link back to the dashboard for deeper insights.

### 12. Agent Orchestration with Vertex AI
- **AI Orchestrator** (Vertex AI Agent Builder or Genkit Flow API) decides which agents to trigger and how to compose responses.
- Enables multi-turn, modular, and scalable interactions.

---

## 🛠 Tech Stack
- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS, Lucide React
- **Backend**: Firebase (Firestore, Storage, Functions, Analytics), Google Cloud Functions
- **AI/ML**: Gemini (multimodal), Vertex AI, Genkit, Vertex Vector DB
- **Wallet Integration**: Google Wallet API (JWT-based pass generation)
- **Other**: React Dropzone, Custom UI Components, Charting Libraries

---

## ✨ Key Features
- AI-powered receipt parsing and analytics
- Google Wallet pass generation for receipts
- Multilingual, context-aware chat assistant
- Visual dashboard with trends, graphs, and suggestions
- Push notifications for spending patterns
- Modular, agent-based architecture for scalability

---

## 📂 Project Structure (Key Folders)
- `/client` – Next.js frontend (UI, dashboard, chat, upload, wallet integration)
- `/server` – API routes, backend logic, Agents integration, wallet pass generation
- `/Raseed` – Android app (native client)

---

## 📣 How It Works (User Flow)
1. **Upload**: User uploads a receipt (image/video)
2. **AI Parsing**: Gemini extracts all details
3. **Data Storage**: Data saved in Firestore & Vector DB
4. **Wallet Pass**: Pass generated and added to Google Wallet
5. **Dashboard**: User views receipts, analytics, and suggestions
6. **Chat**: User asks questions, gets AI-powered answers
7. **Notifications**: User receives smart alerts and tips

---

## 🌍 Inclusivity
- Full support for Indian languages and global users
- Designed for accessibility and ease of use

---

## 📈 Future Roadmap
- More agent types (e.g., investment, tax, reminders)
- Deeper analytics and personalized financial coaching
- Integration with more wallets and payment providers
- Open API for third-party integrations

---

## License
MIT

---