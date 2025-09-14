import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// Import the new Google AI package
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Check if the Google API key is loaded
if (!process.env.GOOGLE_API_KEY) {
  console.error("FATAL ERROR: GOOGLE_API_KEY is not defined in your .env file.");
  process.exit(1);
}

// Initialize the Google AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "Error: No message was provided." });
  }

  console.log(`Received message: "${userMessage}"`);

  try {
    // --- THIS IS THE FINAL CORRECTED LINE ---
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    // ----------------------------------------

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const aiReply = response.text();

    console.log(`Sending AI reply: "${aiReply}"`);
    res.json({ reply: aiReply });
  } catch (error) {
    console.error("Error calling Google AI API:", error.message);
    res.status(500).json({ reply: "Sorry, something went wrong with the AI service." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

