Serenity - AI-Powered Mental Wellness App
Hackathon Project Note

This project was developed as a prototype during a 5-hour hackathon. As a result, the primary focus was on implementing the core features, and not all functionalities are fully built out or connected. It serves as a proof-of-concept for an AI-powered wellness application.

✨ Key Features
🤖 AI Wellness Assistant: A functional chatbot powered by the Google Gemini API to provide supportive conversation and guidance.

💬 Friends & Support Network: A UI concept for a private, real-time messaging interface to connect with trusted friends.

🗺️ Therapist Locator: An interactive map (using OpenStreetMap) that allows users to find nearby mental health professionals.

🧩 Modular Design: A clean, tab-based navigation system built with React that can be easily extended with more features.

🎨 Sleek & Responsive UI: Styled with Tailwind CSS for a beautiful and intuitive user experience on any device.

🛠️ Tech Stack
Frontend: React, Vite, TypeScript, Tailwind CSS

Backend: Node.js, Express.js

AI: Google Gemini API

Mapping: OpenStreetMap with Leaflet

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js (which includes npm) installed on your system.

A free Google Gemini API Key. You can get one from Google AI Studio.

Installation & Setup
Clone the repository:

git clone [https://github.com/daviddasari/mentalwellness.git](https://github.com/daviddasari/mentalwellness.git)
cd mentalwellness/project

Install Frontend Dependencies:
(This installs React, Tailwind, and other frontend libraries)

npm install

Install Backend Dependencies:
(Navigate to the server folder and install its packages)

cd server
npm install

Set up Environment Variables:

While still in the server folder, create a new file named .env.

Add your Google Gemini API key to this file:

GOOGLE_API_KEY=AIzaSy...your...key...here

Save the file. The .gitignore file is already set up to protect this key from being uploaded.

🏃‍♀️ Running the Application
You will need to run two processes in separate terminals: one for the backend server and one for the frontend React app.

Start the Backend Server:

In a terminal, navigate to the server directory: mentalwellness/project/server

Run the command:

npm start

The server will be running at http://localhost:5000.

Start the Frontend React App:

In a new, separate terminal, navigate to the main project directory: mentalwellness/project

Run the command:

npm run dev

Open your browser and go to the URL provided (usually http://localhost:5173).

You should now see the Serenity application running live on your machine!

Acknowledgements
This project was vibecoded.
