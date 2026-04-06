# Chat Application

## Overview
This Chat Application is a real-time messaging application where users can communicate with each other seamlessly.

## Features
- **Real-time messaging:** Instant messaging capabilities to send and receive messages in real-time.
- **User authentication:** Secure user signup and login processes.
- **Group chats:** Ability to create and join group chats for multiple users.
- **Message history:** Store and retrieve chat history for users to review previous conversations.
- **Responsive design:** Accessible chat features across various devices.

## Tech Stack
- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **WebSocket:** Socket.IO for real-time communication

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/saket-shubham/Chat-Application.git
   cd Chat-Application
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   Create a `.env` file in the root directory and add necessary configurations.

4. Start the server:
   ```bash
   npm start
   ```
5. Open the application in your browser by navigating to `http://localhost:3000`.

## API Endpoints
- **POST** `/api/auth/signup`: Create a new user account.
- **POST** `/api/auth/login`: Authenticate a user and retrieve a token.
- **GET** `/api/messages`: Retrieve message history.
- **POST** `/api/messages`: Send a new message.

## Usage Instructions
- Create a new account using the signup endpoint.
- Log in using the login endpoint to get an authentication token.
- Use the messages endpoints to send and receive messages.
- Enjoy chatting with your friends or groups!